import React from 'react'
import { motion } from 'framer-motion';
import {
    LightBulbIcon
} from '@heroicons/react/24/outline';

function Founders() {
    return (
        <section id="founders" className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 relative overflow-hidden">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-blue-900/60 backdrop-blur-2xl pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Meet the Founders
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We're real people building a real solution. Get to know the team behind PromptFlow and our mission to make automation accessible to everyone.
                    </p>
                </motion.div>

                {/* Founders Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Dinesh H */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 shadow-2xl"
                        >
                            <div className="mb-6">
                                <img
                                    src="/dinesh.jpg"
                                    alt="Dinesh H"
                                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-blue-500/40 shadow-lg"
                                />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Dinesh H</h3>
                            <p className="text-blue-400 font-semibold mb-4 text-lg">Co-Founder & CEO</p>
                            <p className="text-gray-200 mb-6 text-lg">
                                Passionate about making complex technology simple and accessible.<br />
                                Experienced in automation and AI, dedicated to solving real business problems.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/dinesh56"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                </svg>
                                Connect on LinkedIn
                            </a>
                        </motion.div>

                    {/* Sarnitha K */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 shadow-2xl"
                    >
                        <div className="mb-6">
                            <div className="w-36 h-36 rounded-full mx-auto bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-4 border-purple-500/40 shadow-lg">
                                <span className="text-5xl font-extrabold text-white">SK</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Sarnitha K</h3>
                        <p className="text-purple-400 font-semibold mb-4 text-lg">Co-Founder & CMO</p>
                        <p className="text-gray-200 mb-6 text-lg">
                            Marketing strategist with a deep understanding of customer needs.<br />
                            Focused on building meaningful connections and growing our community.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/sarnitha-k-b7907b380/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                            Connect on LinkedIn
                        </a>
                    </motion.div>

                    {/* Anmol */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white/10 backdrop-blur-xl border border-green-500/20 rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-300 shadow-2xl"
                    >
                        <div className="mb-6">
                            <div className="w-36 h-36 rounded-full mx-auto bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center border-4 border-green-500/40 shadow-lg">
                                <span className="text-5xl font-extrabold text-white">A</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Anmol</h3>
                        <p className="text-green-400 font-semibold mb-4 text-lg">Co-Founder & CTO</p>
                        <p className="text-gray-200 mb-6 text-lg">
                            Technical architect and AI specialist. Responsible for building the robust,<br />
                            scalable infrastructure that powers PromptFlow's automation engine.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/anmol-776877294/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                            Connect on LinkedIn
                        </a>
                    </motion.div>
                </div>

                {/* Trust Building Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-12 text-center shadow-xl mt-8"
                >
                    <LightBulbIcon className="h-20 w-20 text-yellow-400 mx-auto mb-8" />
                    <h3 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Our Mission</h3>
                    <p className="text-2xl text-gray-200 mb-10 max-w-4xl mx-auto font-medium">
                        We believe automation should empower everyone, not just technical experts.<br />
                        Our goal is to democratize n8n automation, making it as simple as describing what you want in plain English.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-extrabold text-blue-400 mb-2">1,200+</div>
                            <div className="text-gray-200 text-lg">People on Waitlist</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-green-400 mb-2">1,000+</div>
                            <div className="text-gray-200 text-lg">Premium Templates</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-purple-400 mb-2">24/7</div>
                            <div className="text-gray-200 text-lg">Community Support</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Founders
