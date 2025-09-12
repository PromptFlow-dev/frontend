import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import {
    ChevronDownIcon,
    CheckIcon,
    UserGroupIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

// Initialize Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Hero() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handle email submission
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        try {
            const { data, error } = await supabase
                .from('joinlist')
                .insert([{ email: email }]);

            if (error) {
                if (error.code === '23505') {
                    alert('This email is already on our waitlist!');
                    return;
                }
                throw error;
            }

            setSubmitSuccess(true);
            setEmail('');
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="home" className="min-h-screen p-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: 'url(/Lucid_Origin_Create_a_sleek_ultramodern_hero_section_backgroun_1.webp)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80 backdrop-blur-2xl" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-24 left-24 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl"
                    animate={{ x: [0, 120, 0], y: [0, -60, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-24 right-24 w-56 h-56 bg-purple-500/30 rounded-full blur-2xl"
                    animate={{ x: [0, -100, 0], y: [0, 80, 0], scale: [1, 0.9, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
                    animate={{ x: [0, 40, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <img
                        src="/WhatsApp Image 2025-08-25 at 20.56.58_52843934.jpg"
                        alt="PromptFlow"
                        className="h-24 w-auto mx-auto mb-8 rounded-2xl shadow-xl border-4 border-purple-500/30"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight drop-shadow-xl"
                >
                    <span className="text-white">Build Powerful </span>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        n8n Automations
                    </span>
                    <br />
                    <motion.span
                        className="text-yellow-400 text-3xl font-bold"
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        No API Keys, No Stress
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl text-gray-200 mb-14 max-w-3xl mx-auto font-medium drop-shadow-lg"
                >
                    Smart AI-powered automation that builds and runs workflows for you, effortlessly.<br />
                    <span className="text-purple-300">Perfect for business owners tired of technical complexity.</span>
                </motion.p>

                {/* Community Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-gradient-to-r from-orange-500/30 to-red-500/30 backdrop-blur-lg border border-orange-500/40 p-8 rounded-3xl mb-14 max-w-2xl mx-auto shadow-xl"
                >
                    <div className="flex items-center justify-center mb-4">
                        <ChatBubbleLeftRightIcon className="h-10 w-10 text-orange-400 mr-3" />
                        <span className="text-3xl font-extrabold text-white tracking-tight">Join Our Community</span>
                    </div>
                    <p className="text-gray-200 mb-6 text-lg">
                        Connect with automation enthusiasts, find automation buddies, clarify doubts, and discover potential customers!
                    </p>
                    <a
                        href="https://www.reddit.com/r/PromptFlow_Dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <UserGroupIcon className="h-6 w-6 mr-2" />
                        Join Reddit Community
                    </a>
                </motion.div>

                {/* Email Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl max-w-lg mx-auto border border-white/30 shadow-2xl"
                >
                    <AnimatePresence mode="wait">
                        {!submitSuccess ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleEmailSubmit}
                                className="space-y-6"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email for early access"
                                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-lg transition-all duration-300 shadow-md"
                                    required
                                />
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-xl shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? 'Joining...' : 'Join Waitlist + Get Free Templates'}
                                </motion.button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <CheckIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                                <h3 className="text-3xl font-extrabold text-white mb-2">You're In!</h3>
                                <p className="text-gray-200 text-lg">Check your email for your free template library access!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 18, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-white/70 cursor-pointer drop-shadow-lg pt-8"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <ChevronDownIcon className="h-10 w-10" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
