import React from 'react'
import { motion } from 'framer-motion';
import {
    StarIcon,
    UserGroupIcon,
    ChatBubbleLeftRightIcon,
    RocketLaunchIcon,
    CogIcon,
    LightBulbIcon,
    FolderIcon,
    EyeIcon,
    DevicePhoneMobileIcon,
    CheckIcon
} from '@heroicons/react/24/outline';

function Works() {
    return (
        <section id="how-it-works" className="p-20 bg-gradient-to-br from-slate-900 to-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        How PromptFlow Works
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Three simple steps to automation mastery. No technical knowledge required.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <UserGroupIcon className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-sm font-bold text-gray-400 mb-2">STEP 01</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Connect</h3>
                        <p className="text-gray-300">Link your n8n instance with one click. We handle all the technical setup.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <ChatBubbleLeftRightIcon className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-sm font-bold text-gray-400 mb-2">STEP 02</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Describe</h3>
                        <p className="text-gray-300">Tell our AI what you want in plain English. No coding or technical jargon needed.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <RocketLaunchIcon className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-sm font-bold text-gray-400 mb-2">STEP 03</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Deploy</h3>
                        <p className="text-gray-300">Follow our step-by-step guides and watch your automation come to life.</p>
                    </motion.div>
                </div>
            </div>

            {/* Features Grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16"
            >
                <h3 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                        <LightBulbIcon className="h-8 w-8 text-yellow-400 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Automation Builder</h4>
                            <p className="text-gray-300">Trained on thousands of real workflows to ensure reliability and effectiveness.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                        <FolderIcon className="h-8 w-8 text-blue-400 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">1,000+ Premium Templates</h4>
                            <p className="text-gray-300">Marketing funnels, data sync, notifications, and more - all battle-tested.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                        <UserGroupIcon className="h-8 w-8 text-green-400 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Hand-Holding Setup Guides</h4>
                            <p className="text-gray-300">Screenshots, videos, and step-by-step instructions for every connection.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                        <EyeIcon className="h-8 w-8 text-purple-400 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Transparent Billing</h4>
                            <p className="text-gray-300">See exactly what you're paying for with clear, detailed dashboards.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                        <DevicePhoneMobileIcon className="h-8 w-8 text-pink-400 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Modern Interface</h4>
                            <p className="text-gray-300">Beautiful, intuitive design that doesn't make you want to throw your computer.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                        <CogIcon className="h-8 w-8 text-green-400 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">AI Debugging Assistant</h4>
                            <p className="text-gray-300">Explains problems in plain English, not technical jargon.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl font-bold text-white text-center mb-12">What Early Users Say</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah K.",
                            role: "Marketing Manager",
                            avatar: "SK",
                            quote: "Holy crap, automation that doesn't require a CS degree. I set up 5 workflows on day one.",
                            color: "from-blue-500 to-purple-500"
                        },
                        {
                            name: "Mike R.",
                            role: "Small Business Owner",
                            avatar: "MR",
                            quote: "Finally, no more API key nightmares. This is what n8n should have been from the start.",
                            color: "from-green-500 to-emerald-500"
                        },
                        {
                            name: "Jennifer L.",
                            role: "Operations Manager",
                            avatar: "JL",
                            quote: "The setup guides are incredible. Connected all my apps without getting stuck even once.",
                            color: "from-purple-500 to-pink-500"
                        }
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                        >
                            <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                                    <span className="font-bold text-white">{testimonial.avatar}</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                            <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Works
