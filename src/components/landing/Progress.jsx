import React from 'react'
import { motion } from 'framer-motion';
import {
    CheckIcon,
    XMarkIcon,
    CogIcon,
    RocketLaunchIcon
} from '@heroicons/react/24/outline';

function Progress() {
    return (
        <section id="progress" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Our Development Journey
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Transparency builds trust. Here's exactly where we are in building PromptFlow and what's coming next.
                    </p>
                </motion.div>

                {/* Progress Flow */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 p-8 rounded-2xl text-center"
                    >
                        <CheckIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">Idea & Research</h3>
                        <p className="text-gray-300">Market research completed, pain points identified, solution architected</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 p-8 rounded-2xl text-center"
                    >
                        <CogIcon className="h-16 w-16 text-blue-400 mx-auto mb-4 animate-spin" />
                        <h3 className="text-2xl font-bold text-white mb-4">MVP Development</h3>
                        <p className="text-gray-300">Core features being built, AI training in progress, beta testing soon</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 p-8 rounded-2xl text-center"
                    >
                        <RocketLaunchIcon className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">Launch Ready</h3>
                        <p className="text-gray-300">Public launch, scaling infrastructure, community building</p>
                    </motion.div>
                </div>

                {/* Development Screenshots */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-white text-center mb-12">Behind the Scenes</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                            <img
                                src="/image.png"
                                alt="PromptFlow Interface"
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h4 className="text-lg font-semibold text-white mb-2">Clean Interface Design</h4>
                            <p className="text-gray-400 text-sm">User-friendly dashboard that makes automation simple</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                            <img
                                src="/WhatsApp Image 2025-08-31 at 09.52.19_e3efa277.jpg"
                                alt="Workflow Builder"
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h4 className="text-lg font-semibold text-white mb-2">Advanced Workflow Engine</h4>
                            <p className="text-gray-400 text-sm">Powerful automation builder with AI assistance</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                            <img
                                src="/WhatsApp Image 2025-09-06 at 15.11.08_4d4d9b0e.jpg"
                                alt="PromptFlow Branding"
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h4 className="text-lg font-semibold text-white mb-2">Professional Branding</h4>
                            <p className="text-gray-400 text-sm">Built for teams, freelancers, and SMBs</p>
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                    <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose PromptFlow?</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                                    <th className="text-center py-4 px-6 text-red-400 font-semibold">Traditional Methods</th>
                                    <th className="text-center py-4 px-6 text-green-400 font-semibold">PromptFlow</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-6 font-medium">API Key Management</td>
                                    <td className="py-4 px-6 text-center">
                                        <XMarkIcon className="h-6 w-6 text-red-400 mx-auto" />
                                        <span className="block text-sm mt-1">Complex & Confusing</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <CheckIcon className="h-6 w-6 text-green-400 mx-auto" />
                                        <span className="block text-sm mt-1">Handled Automatically</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-6 font-medium">Workflow Reliability</td>
                                    <td className="py-4 px-6 text-center">
                                        <XMarkIcon className="h-6 w-6 text-red-400 mx-auto" />
                                        <span className="block text-sm mt-1">Often Breaks</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <CheckIcon className="h-6 w-6 text-green-400 mx-auto" />
                                        <span className="block text-sm mt-1">AI-Tested & Reliable</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-6 font-medium">Setup Time</td>
                                    <td className="py-4 px-6 text-center">
                                        <XMarkIcon className="h-6 w-6 text-red-400 mx-auto" />
                                        <span className="block text-sm mt-1">Hours to Days</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <CheckIcon className="h-6 w-6 text-green-400 mx-auto" />
                                        <span className="block text-sm mt-1">Minutes</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-4 px-6 font-medium">Technical Knowledge Required</td>
                                    <td className="py-4 px-6 text-center">
                                        <XMarkIcon className="h-6 w-6 text-red-400 mx-auto" />
                                        <span className="block text-sm mt-1">High</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <CheckIcon className="h-6 w-6 text-green-400 mx-auto" />
                                        <span className="block text-sm mt-1">None</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium">Support Quality</td>
                                    <td className="py-4 px-6 text-center">
                                        <XMarkIcon className="h-6 w-6 text-red-400 mx-auto" />
                                        <span className="block text-sm mt-1">Generic Responses</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <CheckIcon className="h-6 w-6 text-green-400 mx-auto" />
                                        <span className="block text-sm mt-1">Personal & Helpful</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Progress
