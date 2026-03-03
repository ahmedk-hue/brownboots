
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faqs: FAQItem[];
    title?: string;
}

const ServiceFAQ = ({ faqs, title = "Frequently Asked Questions" }: ServiceFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <HelpCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{title}</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openIndex === idx ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'
                                    }`}
                            >
                                <span className="font-bold text-slate-900 text-lg pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 bg-slate-50 text-slate-600 leading-relaxed italic">
                                            "{faq.answer}"
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
