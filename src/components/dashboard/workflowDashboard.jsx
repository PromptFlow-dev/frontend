import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, MessageSquare, Zap, Copy, ChevronDown, AlertCircle, Loader2 } from 'lucide-react';
import { chatAPI, workflowAPI } from '../../api';

const WorkflowDashboard = () => {
    const [chats, setChats] = useState([]);
    const [workflows, setWorkflows] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Load data on component mount
    useEffect(() => {
        loadChats();
        loadWorkflows();
    }, []);

    const loadChats = async () => {
        try {
            const data = await chatAPI.list();
            setChats(data.results || data); // Handle paginated or simple array response
        } catch (error) {
            setError('Failed to load chats');
        }
    };

    const loadWorkflows = async () => {
        try {
            const data = await workflowAPI.list();
            setWorkflows(data.results || data);
        } catch (error) {
            setError('Failed to load workflows');
        }
    };

    const createNewChat = async () => {
        try {
            setLoading(true);
            const newChat = await chatAPI.create("New Workflow Chat");
            setChats([newChat, ...chats]);
            setSelectedChat(newChat);
            setError(null);
        } catch (error) {
            setError('Failed to create chat');
        } finally {
            setLoading(false);
        }
    };

    const generateWorkflow = async () => {
        if (!prompt.trim()) {
            setError('Please enter a prompt');
            return;
        }

        try {
            setLoading(true);
            setError(null);

            // Create workflow (with or without existing chat)
            const result = await workflowAPI.create(
                prompt,
                selectedChat?.chat_id || null
            );

            // Add to workflows list
            setWorkflows([result, ...workflows]);

            // If a new chat was created, update chats list
            if (result.chat_id && !selectedChat) {
                loadChats(); // Reload to get the new chat
            }

            setPrompt('');
            alert('Workflow generated successfully!');

        } catch (error) {
            setError(error.message || 'Failed to generate workflow');
        } finally {
            setLoading(false);
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen p-6 text-white">
            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="max-w-7xl mx-auto space-y-8"
            >
                {/* Header */}
                <motion.div variants={fadeInUp} className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        Workflow Generator
                    </h1>
                    <p className="text-gray-300">Create n8n workflows with AI-powered automation</p>
                </motion.div>

                {/* Error Message */}
                {error && (
                    <motion.div
                        variants={fadeInUp}
                        className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 flex items-center gap-3"
                    >
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-red-300">{error}</span>
                    </motion.div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Chat Selection */}
                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <div className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-blue-400" />
                                    Chats
                                </h2>
                                <button
                                    onClick={createNewChat}
                                    disabled={loading}
                                    className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 disabled:opacity-50"
                                >
                                    <Plus className="w-4 h-4" />
                                    New Chat
                                </button>
                            </div>

                            <div className="space-y-3 max-h-80 overflow-y-auto">
                                {chats.map(chat => (
                                    <div
                                        key={chat.id}
                                        className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer ${selectedChat?.id === chat.id
                                                ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                                                : 'bg-gray-800/40 border-white/10 hover:bg-gray-800/60 text-gray-300'
                                            }`}
                                        onClick={() => setSelectedChat(chat)}
                                    >
                                        <div className="font-medium truncate">{chat.title}</div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            {new Date(chat.created_at).toLocaleDateString()}
                                        </div>
                                    </div>
                                ))}
                                {chats.length === 0 && (
                                    <div className="text-gray-400 text-center py-4">
                                        No chats yet. Create your first chat!
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Workflow Generation */}
                    <motion.div variants={fadeInUp} className="lg:col-span-2">
                        <div className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-purple-400" />
                                Generate Workflow
                            </h2>

                            <div className="mb-4 p-3 bg-gray-800/40 border border-white/10 rounded-lg">
                                {selectedChat ? (
                                    <p className="text-gray-300">
                                        Adding to chat: <span className="text-blue-400 font-medium">{selectedChat.title}</span>
                                    </p>
                                ) : (
                                    <p className="text-gray-400">Will create a new chat</p>
                                )}
                            </div>

                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Describe your workflow... e.g., 'Send email when new row added to Google Sheet'"
                                rows={4}
                                className="w-full p-4 bg-gray-800/60 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 resize-none"
                            />

                            <button
                                onClick={generateWorkflow}
                                disabled={loading || !prompt.trim()}
                                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <Zap className="w-5 h-5" />
                                        Generate Workflow
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Workflows List */}
                <motion.div variants={fadeInUp}>
                    <div className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-400" />
                            Generated Workflows
                        </h2>

                        <div className="space-y-4">
                            {workflows.map(workflow => (
                                <div key={workflow.id} className="bg-gray-800/40 border border-white/10 rounded-xl p-5">
                                    <h3 className="text-lg font-medium text-white mb-2">{workflow.prompt}</h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Created: {new Date(workflow.created_at).toLocaleDateString()}
                                    </p>

                                    <details className="group">
                                        <summary className="flex items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-300 transition-colors">
                                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                                            View JSON
                                        </summary>
                                        <div className="mt-3 p-4 bg-gray-900/60 rounded-lg border border-white/10">
                                            <pre className="text-gray-300 text-sm overflow-x-auto whitespace-pre-wrap">
                                                {JSON.stringify(workflow.workflow_json, null, 2)}
                                            </pre>
                                        </div>
                                    </details>

                                    <button
                                        onClick={() => navigator.clipboard.writeText(JSON.stringify(workflow.workflow_json, null, 2))}
                                        className="mt-4 bg-gray-700/50 hover:bg-gray-700/70 border border-white/10 text-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"
                                    >
                                        <Copy className="w-4 h-4" />
                                        Copy JSON
                                    </button>
                                </div>
                            ))}
                            {workflows.length === 0 && (
                                <div className="text-gray-400 text-center py-8">
                                    No workflows generated yet. Create your first workflow!
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WorkflowDashboard;