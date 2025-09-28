import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 p-4 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl -z-10"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1.2, 1, 1.2], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-gradient-to-l from-purple-500 to-pink-500 blur-3xl -z-10"
      />
      {/* Main Card */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col items-center z-10 max-w-md w-full"
      >
        <Ghost className="w-16 h-16 text-purple-400 mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold text-white mb-2">404 - Not Found</h1>
        <p className="text-lg text-gray-300 mb-6 text-center">Oops! The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
          <ArrowLeft className="w-5 h-5" />
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
