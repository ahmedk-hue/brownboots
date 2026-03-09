import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    ArrowRight,
    ChefHat,
    Bath,
    Construction,
    Layout,
    DoorOpen,
    Plus,
    DollarSign,
    Clock,
    MapPin,
    User,
    Mail,
    Phone,
    ArrowBigRightDash
} from 'lucide-react';

const steps = [
    {
        id: 'project-type',
        title: 'What project are we looking at?',
        subtitle: 'Select the primary service you need help with.',
        fields: [
            { value: 'kitchen', label: 'Kitchen Remodeling', icon: <ChefHat className="w-6 h-6" /> },
            { value: 'bathroom', label: 'Bathroom Remodeling', icon: <Bath className="w-6 h-6" /> },
            { value: 'basement', label: 'Basement Remodeling', icon: <Construction className="w-6 h-6" /> },
            { value: 'trim', label: 'Trim Carpentry', icon: <Layout className="w-6 h-6" /> },
            { value: 'windows-doors', label: 'Windows & Doors', icon: <DoorOpen className="w-6 h-6" /> },
            { value: 'other', label: 'Something Else', icon: <Plus className="w-6 h-6" /> },
        ]
    },
    {
        id: 'budget',
        title: 'What is your target budget?',
        subtitle: 'This helps us suggest the best materials and scope.',
        fields: [
            { value: 'under-10k', label: 'Under $10,000', icon: <DollarSign className="w-6 h-6" /> },
            { value: '10k-25k', label: '$10,000 - $25,000', icon: <DollarSign className="w-6 h-6" /> },
            { value: '25k-50k', label: '$25,000 - $50,000', icon: <DollarSign className="w-6 h-6" /> },
            { value: '50k-100k', label: '$50,000 - $100,000', icon: <DollarSign className="w-6 h-6" /> },
            { value: 'over-100k', label: 'Over $100,000', icon: <DollarSign className="w-6 h-6" /> },
        ]
    },
    {
        id: 'timeline',
        title: 'When would you like to start?',
        subtitle: 'We generally respond to visits within 24-48 hours.',
        fields: [
            { value: 'asap', label: 'As Soon As Possible', icon: <Clock className="w-6 h-6" /> },
            { value: '1-3-months', label: 'Within 1-3 Months', icon: <Clock className="w-6 h-6" /> },
            { value: '3-6-months', label: '3-6 Months Out', icon: <Clock className="w-6 h-6" /> },
            { value: 'planning', label: 'Just in planning stage', icon: <Clock className="w-6 h-6" /> },
        ]
    },
    {
        id: 'location',
        title: 'Where is the project located?',
        subtitle: 'We serve Westmoreland County and surrounding areas.',
        isInput: true,
        fields: [
            { name: 'city', placeholder: 'City', icon: <MapPin className="w-6 h-6" />, type: 'text' },
            { name: 'zip', placeholder: 'Zip Code', icon: <MapPin className="w-6 h-6" />, type: 'text' },
        ]
    },
    {
        id: 'contact',
        title: 'Almost done! Who are we speaking with?',
        subtitle: 'Your lead magnet will be sent to this email.',
        isInput: true,
        fields: [
            { name: 'name', placeholder: 'Full Name', icon: <User className="w-6 h-6" />, type: 'text' },
            { name: 'email', placeholder: 'Email Address', icon: <Mail className="w-6 h-6" />, type: 'email' },
            { name: 'phone', placeholder: 'Phone Number', icon: <Phone className="w-6 h-6" />, type: 'tel' },
        ]
    }
];

export const QuoteFunnel = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSelect = (fieldId, value) => {
        setFormData(prev => ({ ...prev, [fieldId]: value }));
        if (currentStep < steps.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const submissionData = {
                ...formData,
                _subject: "New Quote Request (BrownBoot)",
                _captcha: "false"
            };

            const response = await fetch("https://formsubmit.co/ajax/kyle@brownbootrr.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(submissionData)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const handleNext = (e) => {
        e.preventDefault();
        nextStep();
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto bg-white rounded-[3rem] p-12 text-center shadow-2xl border border-slate-100"
            >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Success! Your Request is In.</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    Thanks, <span className="font-bold text-slate-900">{formData.name}</span>. Kyle or a team member will reach out to you within 24-48 hours.
                </p>

                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                    <div className="relative z-10 text-left">
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Free Gift</span>
                        <h3 className="text-2xl font-display font-bold mb-4 italic">Home Investment Guide</h3>
                        <p className="text-slate-400 mb-6 text-sm">We've sent your exclusive guide to <span className="text-white font-medium">{formData.email}</span>. Use these tips to maximize your investment and budget for your project.</p>
                        <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Download Guide Now <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }

    const step = steps[currentStep];

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <span>Step {currentStep + 1} of {steps.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-primary"
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h2>
                    <p className="text-xl text-slate-500 mb-10 leading-relaxed">{step.subtitle}</p>

                    {step.isInput ? (
                        <form onSubmit={currentStep === steps.length - 1 ? handleSubmit : handleNext} className="space-y-6">
                            {step.fields.map((field) => (
                                <div key={field.name} className="relative">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                        {field.icon}
                                    </div>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        required
                                        onChange={handleInputChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-3xl py-6 pl-16 pr-6 text-lg focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                                    />
                                </div>
                            ))}
                            <div className="flex gap-4 pt-6">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 bg-slate-100 text-slate-600 py-6 rounded-3xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                                >
                                    <ChevronLeft className="w-6 h-6" /> Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-[2] bg-primary text-white py-6 rounded-3xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                                >
                                    {loading ? 'Submitting...' : currentStep === steps.length - 1 ? 'Get My Free Quote' : 'Continue'}
                                    {!loading && (currentStep === steps.length - 1 ? <ArrowBigRightDash className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />)}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {step.fields.map((field) => (
                                <button
                                    key={field.value}
                                    onClick={() => handleSelect(step.id, field.value)}
                                    className={`group p-6 rounded-[2rem] border-2 transition-all text-left flex items-center gap-4 ${formData[step.id] === field.value
                                        ? 'border-primary bg-red-50 text-slate-900'
                                        : 'border-slate-100 bg-white hover:border-slate-300 text-slate-600'
                                        }`}
                                >
                                    <div className={`p-3 rounded-2xl transition-all ${formData[step.id] === field.value
                                        ? 'bg-primary text-white'
                                        : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-primary'
                                        }`}>
                                        {field.icon}
                                    </div>
                                    <span className="font-bold text-lg">{field.label}</span>
                                </button>
                            ))}
                            {currentStep > 0 && (
                                <button
                                    onClick={prevStep}
                                    className="sm:col-span-2 mt-8 text-slate-400 font-bold hover:text-primary transition-all flex items-center justify-center gap-2"
                                >
                                    <ChevronLeft className="w-5 h-5" /> Previous Question
                                </button>
                            )}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
