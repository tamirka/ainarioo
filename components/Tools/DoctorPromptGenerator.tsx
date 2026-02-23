import React, { useState } from 'react';
import { ArrowLeft, Copy, CheckCircle2, AlertCircle } from 'lucide-react';

interface DoctorPromptGeneratorProps {
    navigate: (page: string) => void;
}

const DoctorPromptGenerator: React.FC<DoctorPromptGeneratorProps> = ({ navigate }) => {
    const [step, setStep] = useState(1);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [generatedPrompt, setGeneratedPrompt] = useState('');

    const [formData, setFormData] = useState({
        // Basic Info
        clinicName: '',
        specialization: '',
        address: '',
        phone: '',
        email: '',
        businessHours: '',
        website: '',
        instagram: '',
        facebook: '',
        linkedin: '',
        description: '',

        // Medical Details
        services: '',
        experience: '',
        certifications: '',
        equipment: '',
        languages: '',
        insurance: '',

        // Positioning
        targetPatients: '',
        differentiators: '',
        emergencyServices: 'no',
        emergencyContact: '',
        onlineBooking: 'no',
        bookingMethod: '',

        // Conversion & Style
        mainCta: 'Book Appointment',
        tone: 'Professional',
        brandColors: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(null);
    };

    const validateStep = (currentStep: number) => {
        if (currentStep === 1) {
            if (!formData.clinicName || !formData.specialization || !formData.address || !formData.phone || !formData.email || !formData.businessHours) {
                setError('Please fill in all mandatory basic info fields.');
                return false;
            }
        } else if (currentStep === 2) {
            if (!formData.services || !formData.experience || !formData.certifications || !formData.equipment || !formData.languages) {
                setError('Please fill in all mandatory medical details.');
                return false;
            }
        } else if (currentStep === 3) {
            if (!formData.targetPatients || !formData.differentiators) {
                setError('Please fill in target patients and differentiators.');
                return false;
            }
            if (formData.emergencyServices === 'yes' && !formData.emergencyContact) {
                setError('Please provide an emergency contact.');
                return false;
            }
            if (formData.onlineBooking === 'yes' && !formData.bookingMethod) {
                setError('Please provide a booking method.');
                return false;
            }
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(prev => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
        window.scrollTo(0, 0);
    };

    const generatePrompt = () => {
        if (!validateStep(3)) return;

        const prompt = `Write a high-converting, professional, trust-building landing page for the following medical clinic:

CLINIC BASIC INFO
- Clinic / Doctor Name: ${formData.clinicName}
- Specialization: ${formData.specialization}
- Address: ${formData.address}
- Phone Number: ${formData.phone}
- Email Address: ${formData.email}
- Business Hours: ${formData.businessHours}
${formData.website ? `- Website: ${formData.website}` : ''}
${formData.instagram ? `- Instagram: ${formData.instagram}` : ''}
${formData.facebook ? `- Facebook: ${formData.facebook}` : ''}
${formData.linkedin ? `- LinkedIn: ${formData.linkedin}` : ''}
${formData.description ? `- Description: ${formData.description}` : ''}

MEDICAL DETAILS
- Services Offered: ${formData.services}
- Years of Experience: ${formData.experience}
- Certifications / Board Memberships: ${formData.certifications}
- Equipment / Advanced Technology Used: ${formData.equipment}
- Languages Spoken: ${formData.languages}
${formData.insurance ? `- Insurance Accepted: ${formData.insurance}` : ''}

POSITIONING
- Target Patients: ${formData.targetPatients}
- What makes this clinic different: ${formData.differentiators}
- Emergency Services Available: ${formData.emergencyServices === 'yes' ? `Yes (Contact: ${formData.emergencyContact})` : 'No'}
- Online Booking Available: ${formData.onlineBooking === 'yes' ? `Yes (Method: ${formData.bookingMethod})` : 'No'}

CONVERSION GOAL & BRAND STYLE
- Main CTA: ${formData.mainCta}
- Brand Tone: ${formData.tone}
${formData.brandColors ? `- Brand Colors: ${formData.brandColors}` : ''}

The landing page MUST include:

HERO SECTION
- Strong, reassuring headline
- Clear subheadline
- Main CTA using real contact info (${formData.mainCta})
- Mention of specialization and experience

ABOUT THE DOCTOR / CLINIC SECTION
- Background
- Credentials
- Mission

SERVICES SECTION
- Clear breakdown of medical services

WHY CHOOSE US SECTION
- 4–6 strong differentiators
- Equipment, experience, patient care

PATIENT TESTIMONIALS SECTION
- Professional and realistic tone

APPOINTMENT PROCESS SECTION
- 3 simple steps

${formData.insurance ? 'INSURANCE & PAYMENT SECTION\n- Details on accepted insurance and payment methods' : ''}

FAQ SECTION
- At least 5 medically relevant questions

CONTACT SECTION
- FULL contact details
- Address
- Business hours
${formData.emergencyServices === 'yes' ? '- Emergency contact' : ''}

FINAL CALL-TO-ACTION SECTION
- Clear instruction
- Encourage booking

Tone must be:
- Professional
- Reassuring
- Trustworthy
- Clear
- Ethical

STRICT RULES:
- No placeholders allowed (e.g., no [Insert phone]).
- No missing sections allowed.
- All contact and medical information must be fully written and usable.
- Ready-to-publish quality.`;

        setGeneratedPrompt(prompt);
        setStep(4);
        window.scrollTo(0, 0);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
                        <h1 className="text-3xl font-bold text-white mb-2">Medical Landing Page Prompt Generator</h1>
                        <p className="text-gray-400">Generate a complete, ready-to-publish landing page prompt with zero placeholders.</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center justify-between mb-8 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-700 -z-10 rounded-full"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-cyan-500 -z-10 rounded-full transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
                        
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-gray-800 text-gray-500 border-2 border-gray-700'}`}>
                                {s}
                            </div>
                        ))}
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-900/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-start gap-3">
                            <AlertCircle className="shrink-0 mt-0.5" size={18} />
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="space-y-6">
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">Step 1: Clinic Basic Info</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Clinic / Doctor Name *</label>
                                        <input type="text" name="clinicName" value={formData.clinicName} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. Dr. Smith Dental" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Specialization *</label>
                                        <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. Cardiology, Dermatology" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Address *</label>
                                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Full physical address" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="(555) 123-4567" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="contact@clinic.com" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Business Hours *</label>
                                        <input type="text" name="businessHours" value={formData.businessHours} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Mon-Fri: 9am-5pm" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Optional Description</label>
                                        <textarea name="description" value={formData.description} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none h-24 resize-none" placeholder="Brief description of the clinic..." />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Website (Optional)</label>
                                        <input type="text" name="website" value={formData.website} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="https://..." />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Instagram (Optional)</label>
                                        <input type="text" name="instagram" value={formData.instagram} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="@username" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Facebook (Optional)</label>
                                        <input type="text" name="facebook" value={formData.facebook} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Page URL" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn (Optional)</label>
                                        <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Profile URL" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">Step 2: Medical Details</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Services Offered (List clearly) *</label>
                                        <textarea name="services" value={formData.services} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none h-24 resize-none" placeholder="e.g. Teeth Whitening, Root Canals, Implants..." />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience *</label>
                                            <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. 15+ years" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Languages Spoken *</label>
                                            <input type="text" name="languages" value={formData.languages} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. English, Spanish" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Certifications / Board Memberships *</label>
                                        <input type="text" name="certifications" value={formData.certifications} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. Board Certified Cardiologist, Member of AMA" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Equipment or Advanced Technology Used *</label>
                                        <input type="text" name="equipment" value={formData.equipment} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. 3D X-Rays, Laser Dentistry" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Insurance Accepted (Optional)</label>
                                        <input type="text" name="insurance" value={formData.insurance} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. BlueCross, Medicare, etc." />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">Step 3: Positioning & Conversion</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Target Patients *</label>
                                        <input type="text" name="targetPatients" value={formData.targetPatients} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. Families, children, elderly, cosmetic patients" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">What makes this clinic different? *</label>
                                        <textarea name="differentiators" value={formData.differentiators} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none h-24 resize-none" placeholder="e.g. Pain-free treatments, luxury waiting room, fast appointments" />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Emergency Services Available?</label>
                                        <select name="emergencyServices" value={formData.emergencyServices} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none">
                                            <option value="no">No</option>
                                            <option value="yes">Yes</option>
                                        </select>
                                    </div>
                                    {formData.emergencyServices === 'yes' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Emergency Contact *</label>
                                            <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Emergency phone number" />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Online Booking Available?</label>
                                        <select name="onlineBooking" value={formData.onlineBooking} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none">
                                            <option value="no">No</option>
                                            <option value="yes">Yes</option>
                                        </select>
                                    </div>
                                    {formData.onlineBooking === 'yes' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Booking Method (Link/Portal) *</label>
                                            <input type="text" name="bookingMethod" value={formData.bookingMethod} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. Zocdoc link, website portal" />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Main CTA *</label>
                                        <select name="mainCta" value={formData.mainCta} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none">
                                            <option value="Book Appointment">Book Appointment</option>
                                            <option value="Call Now">Call Now</option>
                                            <option value="Schedule Consultation">Schedule Consultation</option>
                                            <option value="Request a Callback">Request a Callback</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Brand Tone *</label>
                                        <select name="tone" value={formData.tone} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none">
                                            <option value="Professional">Professional</option>
                                            <option value="Reassuring">Reassuring</option>
                                            <option value="Premium">Premium</option>
                                            <option value="Family-friendly">Family-friendly</option>
                                            <option value="Modern">Modern</option>
                                            <option value="Clinical">Clinical</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Brand Colors (Optional)</label>
                                        <input type="text" name="brandColors" value={formData.brandColors} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="e.g. Navy blue and white" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-2">
                                    <h2 className="text-xl font-semibold text-white">Generated Prompt</h2>
                                    <button 
                                        onClick={copyToClipboard}
                                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                                    >
                                        {copied ? <CheckCircle2 size={18} className="text-green-400" /> : <Copy size={18} />}
                                        {copied ? 'Copied!' : 'Copy Prompt'}
                                    </button>
                                </div>
                                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 relative">
                                    <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm overflow-x-auto">
                                        {generatedPrompt}
                                    </pre>
                                </div>
                                <div className="mt-6 bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-lg">
                                    <p className="text-cyan-400 text-sm">
                                        <strong>Next Step:</strong> Copy this prompt and paste it into your favorite AI model (like Gemini, ChatGPT, or Claude) to generate your complete landing page copy.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-10 flex justify-between border-t border-gray-700 pt-6">
                        {step > 1 && step < 4 ? (
                            <button onClick={prevStep} className="px-6 py-2.5 text-gray-300 hover:text-white font-medium transition-colors">
                                Back
                            </button>
                        ) : <div></div>}
                        
                        {step < 3 ? (
                            <button onClick={nextStep} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-500/20">
                                Continue
                            </button>
                        ) : step === 3 ? (
                            <button onClick={generatePrompt} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-500/20">
                                Generate Prompt
                            </button>
                        ) : (
                            <button onClick={() => setStep(1)} className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                                Start Over
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorPromptGenerator;
