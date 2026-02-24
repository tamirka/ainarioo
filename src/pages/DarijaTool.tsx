import React, { useState, useRef } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import {
  Mic,
  Upload,
  Play,
  Download,
  Edit3,
  Save,
  RefreshCw,
  Volume2,
  StopCircle,
  FileText,
} from "lucide-react";

export default function DarijaTool() {
  const [activeTab, setActiveTab] = useState<"transcribe" | "tts">(
    "transcribe",
  );
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [transcript, setTranscript] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("Kore");
  const [generatedAudioUrl, setGeneratedAudioUrl] = useState<string | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const voices = ["Puck", "Charon", "Kore", "Fenrir", "Zephyr"];

  const initGenAI = () => {
    const apiKey =
      import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Gemini API Key is missing. Please set it in your environment.",
      );
    }
    return new GoogleGenAI({ apiKey });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);

        // Create a File object from the Blob
        const file = new File([audioBlob], "recording.webm", {
          type: "audio/webm",
        });
        setAudioFile(file);

        // Stop all tracks to release microphone
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setError(null);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setError("Could not access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      setAudioUrl(URL.createObjectURL(file));
      setError(null);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          // Remove the data URL prefix (e.g., "data:audio/webm;base64,")
          const base64String = reader.result.split(",")[1];
          resolve(base64String);
        } else {
          reject(new Error("Failed to convert file to base64"));
        }
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const transcribeAudio = async () => {
    if (!audioFile) return;

    setIsProcessing(true);
    setError(null);

    try {
      const ai = initGenAI();
      const base64Data = await fileToBase64(audioFile);

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: audioFile.type || "audio/webm",
                data: base64Data,
              },
            },
            {
              text: "Transcribe the following audio strictly in Moroccan Darija. Do not translate it to English or Modern Standard Arabic (MSA). Write exactly what is said in Darija using Arabic script or Latin script (whichever is most appropriate for Darija, but prefer Arabic script if clear). Do not add any extra commentary.",
            },
          ],
        },
      });

      if (response.text) {
        setTranscript(response.text);
        setActiveTab("tts"); // Move to TTS tab automatically
      } else {
        setError("Failed to generate transcription.");
      }
    } catch (err: any) {
      console.error("Transcription error:", err);
      setError(err.message || "An error occurred during transcription.");
    } finally {
      setIsProcessing(false);
    }
  };

  const generateAudio = async () => {
    if (!transcript.trim()) {
      setError("Please provide some text to generate audio.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const ai = initGenAI();

      const prompt = `Read the following Moroccan Darija text naturally: ${transcript}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: selectedVoice },
            },
          },
        },
      });

      const base64Audio =
        response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (base64Audio) {
        const audioUrl = `data:audio/pcm;rate=24000;base64,${base64Audio}`;
        setGeneratedAudioUrl(audioUrl);
      } else {
        setError("Failed to generate audio.");
      }
    } catch (err: any) {
      console.error("TTS error:", err);
      setError(err.message || "An error occurred during audio generation.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Volume2 className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Darija <span className="text-indigo-400">Language Lab</span>
          </h1>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto leading-relaxed">
            Record, transcribe, and synthesize Moroccan Darija using advanced AI
            models. A tool built for cultural preservation and technological
            innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200">
              <button
                onClick={() => setActiveTab("transcribe")}
                className={`flex-1 py-4 px-6 text-center font-medium text-sm transition-colors ${
                  activeTab === "transcribe"
                    ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                1. Speech to Text (Darija)
              </button>
              <button
                onClick={() => setActiveTab("tts")}
                className={`flex-1 py-4 px-6 text-center font-medium text-sm transition-colors ${
                  activeTab === "tts"
                    ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                2. Text to Speech (Darija)
              </button>
            </div>

            <div className="p-8">
              {activeTab === "transcribe" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Input Audio
                    </h3>
                    <p className="text-slate-500 text-sm mb-6">
                      Record your voice or upload an audio file speaking in
                      Moroccan Darija.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      {isRecording ? (
                        <button
                          onClick={stopRecording}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-red-500 hover:bg-red-600 transition-colors shadow-sm"
                        >
                          <StopCircle className="mr-2 h-5 w-5 animate-pulse" />
                          Stop Recording
                        </button>
                      ) : (
                        <button
                          onClick={startRecording}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                        >
                          <Mic className="mr-2 h-5 w-5" />
                          Record Audio
                        </button>
                      )}

                      <div className="relative">
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <button className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200">
                          <Upload className="mr-2 h-5 w-5" />
                          Upload File
                        </button>
                      </div>
                    </div>
                  </div>

                  {audioUrl && (
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3">
                        Audio Preview
                      </h4>
                      <audio src={audioUrl} controls className="w-full mb-4" />

                      <button
                        onClick={transcribeAudio}
                        disabled={isProcessing}
                        className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 transition-colors shadow-sm"
                      >
                        {isProcessing ? (
                          <>
                            <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                            Transcribing...
                          </>
                        ) : (
                          <>
                            <FileText className="mr-2 h-5 w-5" />
                            Transcribe to Darija
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "tts" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        Darija Transcript
                      </h3>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                      >
                        {isEditing ? (
                          <>
                            <Save className="h-4 w-4 mr-1" /> Save
                          </>
                        ) : (
                          <>
                            <Edit3 className="h-4 w-4 mr-1" /> Edit
                          </>
                        )}
                      </button>
                    </div>

                    {isEditing ? (
                      <textarea
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                        className="w-full h-40 p-4 rounded-xl border border-indigo-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Enter Moroccan Darija text here..."
                        dir="auto"
                      />
                    ) : (
                      <div
                        className="w-full h-40 p-4 rounded-xl border border-slate-200 bg-slate-50 overflow-y-auto text-slate-800"
                        dir="auto"
                      >
                        {transcript || (
                          <span className="text-slate-400 italic">
                            No transcript available. Transcribe audio or click
                            Edit to type.
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="text-sm font-semibold text-slate-700 mb-4">
                      Voice Settings
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                      {voices.map((voice) => (
                        <button
                          key={voice}
                          onClick={() => setSelectedVoice(voice)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            selectedVoice === voice
                              ? "bg-indigo-600 text-white shadow-md"
                              : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
                          }`}
                        >
                          {voice}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={generateAudio}
                      disabled={isProcessing || !transcript.trim()}
                      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 transition-colors shadow-sm"
                    >
                      {isProcessing ? (
                        <>
                          <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                          Generating Audio...
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-5 w-5" />
                          Generate Darija Audio
                        </>
                      )}
                    </button>
                  </div>

                  {generatedAudioUrl && (
                    <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                      <h4 className="text-sm font-semibold text-emerald-800 mb-3">
                        Generated Audio
                      </h4>
                      <audio
                        src={generatedAudioUrl}
                        controls
                        className="w-full mb-4"
                      />

                      <a
                        href={generatedAudioUrl}
                        download="darija-audio.wav"
                        className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-colors font-medium"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Audio
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Learn More About Our Programs
          </h2>
          <p className="text-slate-300 mb-8">
            The Darija Language Lab is just one of the many innovative programs
            at Atlas Academy.
          </p>
          <a
            href="/programs"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow"
          >
            Explore All Programs
          </a>
        </div>
      </section>
    </div>
  );
}
