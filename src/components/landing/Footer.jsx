import React from 'react'

function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-3 mb-4 md:mb-0">
                            <img
                                src="/WhatsApp Image 2025-08-25 at 20.56.58_52843934.jpg"
                                alt="PromptFlow"
                                className="h-8 w-auto"
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                PromptFlow
                            </span>
                        </div>
                        <p className="text-gray-400 text-center">
                            © 2025 PromptFlow. Making automation accessible to everyone.
                        </p>
                    </div>
                </div>
            </footer>
  )
}

export default Footer
