import React, { useState, useRef } from 'react';
import { ArrowLeft, Upload, Mic, Square, Play, Download, Loader2, RefreshCw, AlertCircle } from 'lucide-react';
import { GoogleGenAI, Modality } from '@google/genai';

interface DarijaAudioToolProps {
    navigate: (page: string) => void;
}

const DarijaAudioTool: React.FC<DarijaAudioToolProps> = ({ navigate }) => {
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [transcript, setTranscript] = useState('');
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedAudioUrl, setGeneratedAudioUrl] = useState<string | null>(null);
    const [selectedVoice, setSelectedVoice] = useState('Kore');
    const [error, setError] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const voices = ['Puck', 'Charon', 'Kore', 'Fenrir', 'Zephyr'];

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudioFile(file);
            setAudioUrl(URL.createObjectURL(file));
            setError(null);
        }
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
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const file = new File([audioBlob], 'recording.webm', { type: 'audio/webm' });
                setAudioFile(file);
                setAudioUrl(URL.createObjectURL(audioBlob));
            };

            mediaRecorder.start();
            setIsRecording(true);
            setError(null);
        } catch (err) {
            setError('Microphone access denied or not available.');
            console.error(err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }
    };

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = reader.result as string;
                // Remove the data URL prefix (e.g., "data:audio/webm;base64,")
                const base64Data = base64String.split(',')[1];
                resolve(base64Data);
            };
            reader.onerror = error => reject(error);
        });
    };

    const handleTranscribe = async () => {
        if (!audioFile) return;

        try {
            setIsTranscribing(true);
            setError(null);

            const base64Audio = await fileToBase64(audioFile);
            
            const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY });

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [
                    {
                        parts: [
                            {
                                inlineData: {
                                    mimeType: audioFile.type || "audio/webm",
                                    data: base64Audio
                                }
                            },
                            {
                                text: "Transcribe the following audio strictly in Moroccan Darija (not MSA, no translation). Only output the transcription."
                            }
                        ]
                    }
                ]
            });

            if (response.text) {
                setTranscript(response.text);
            } else {
                setError("Could not generate transcription.");
            }

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Failed to transcribe audio.');
        } finally {
            setIsTranscribing(false);
        }
    };

    const handleGenerateAudio = async () => {
        if (!transcript.trim()) return;

        try {
            setIsGenerating(true);
            setError(null);

            const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY });

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-preview-tts",
                contents: [{ parts: [{ text: transcript }] }],
                config: {
                    responseModalities: [Modality.AUDIO],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: { voiceName: selectedVoice },
                        },
                    },
                },
            });

            const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
                const audioBlob = new Blob([Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0))], { type: 'audio/wav' });
                const url = URL.createObjectURL(audioBlob);
                setGeneratedAudioUrl(url);
            } else {
                setError("Failed to generate audio.");
            }

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Failed to generate audio.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <button 
                    onClick={() => navigate('tools')}
                    className="mb-8 text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Tools
                </button>

                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Darija Audio Studio</h1>
                        <p className="text-gray-400">Transcribe Moroccan Darija audio, edit the text, and generate new voiceovers using Gemini AI.</p>
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-900/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-start gap-3">
                            <AlertCircle className="shrink-0 mt-0.5" size={18} />
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column: Input */}
                        <div className="space-y-6">
                            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                                <h2 className="text-lg font-semibold text-white mb-4">1. Input Audio</h2>
                                
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <button
                                            onClick={isRecording ? stopRecording : startRecording}
                                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-colors ${
                                                isRecording 
                                                    ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30' 
                                                    : 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700'
                                            }`}
                                        >
                                            {isRecording ? <Square size={18} /> : <Mic size={18} />}
                                            {isRecording ? 'Stop Recording' : 'Record Audio'}
                                        </button>
                                        
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white border border-gray-600 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                                        >
                                            <Upload size={18} />
                                            Upload File
                                        </button>
                                        <input 
                                            type="file" 
                                            ref={fileInputRef} 
                                            onChange={handleFileUpload} 
                                            accept="audio/*" 
                                            className="hidden" 
                                        />
                                    </div>

                                    {audioUrl && (
                                        <div className="mt-4">
                                            <audio src={audioUrl} controls className="w-full" />
                                            <button
                                                onClick={handleTranscribe}
                                                disabled={isTranscribing}
                                                className="w-full mt-4 bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                            >
                                                {isTranscribing ? <Loader2 className="animate-spin" size={18} /> : <RefreshCw size={18} />}
                                                {isTranscribing ? 'Transcribing...' : 'Transcribe to Darija'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                                <h2 className="text-lg font-semibold text-white mb-4">2. Edit Transcript</h2>
                                <textarea
                                    value={transcript}
                                    onChange={(e) => setTranscript(e.target.value)}
                                    placeholder="Transcript will appear here. You can edit it before generating new audio..."
                                    className="w-full h-48 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 outline-none resize-none"
                                />
                            </div>
                        </div>

                        {/* Right Column: Output */}
                        <div className="space-y-6">
                            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                                <h2 className="text-lg font-semibold text-white mb-4">3. Generate Audio</h2>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Select Voice Profile</label>
                                        <select
                                            value={selectedVoice}
                                            onChange={(e) => setSelectedVoice(e.target.value)}
                                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                                        >
                                            {voices.map(voice => (
                                                <option key={voice} value={voice}>{voice}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        onClick={handleGenerateAudio}
                                        disabled={isGenerating || !transcript.trim()}
                                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Play size={18} />}
                                        {isGenerating ? 'Generating...' : 'Generate Voiceover'}
                                    </button>
                                </div>
                            </div>

                            {generatedAudioUrl && (
                                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4">
                                    <h2 className="text-lg font-semibold text-white mb-4">4. Result</h2>
                                    <audio src={generatedAudioUrl} controls className="w-full mb-4" />
                                    <a
                                        href={generatedAudioUrl}
                                        download={`darija-voiceover-${selectedVoice}.wav`}
                                        className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white border border-gray-600 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                                    >
                                        <Download size={18} />
                                        Download Audio
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DarijaAudioTool;
