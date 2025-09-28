import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthMateClient, tokenStorage } from 'authmate';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, UserCheck } from 'lucide-react';

// Replace with your actual AuthMate API key
const apiKey = import.meta.env.VITE_AUTHMATE_API_KEY;

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        return newErrors;
    };

    // Animation variants
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        try {
            // User credentials
            const payload = {
                email: formData.email,
                password: formData.password
            };

            // Login with JWT
            const loginRes = await AuthMateClient.loginWithJWT(apiKey, payload);

            console.log('Login submitted:', formData);
            console.log('JWT Login Response:', loginRes);

            setIsLoading(false);

            // Handle successful login here
            // You can store the JWT token in localStorage if needed
            if (loginRes.data.tokens.refresh && loginRes.data.tokens.access) {
                // Store tokens in tokenStorage
                tokenStorage.set(loginRes.data.tokens.access, loginRes.data.tokens.refresh);
            }

            // Redirect to profile page after successful login
            navigate('/dashboard');

        } catch (error) {
            console.error('Login error:', error);
            setErrors({ general: 'Login failed. Please check your credentials.' });
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.4, 0.15]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-gradient-to-l from-purple-500 to-pink-500 blur-3xl"
                />
            </div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="relative z-10 w-full max-w-md"
            >
                {/* Header */}
                <motion.div variants={fadeInUp} className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        Welcome back to PromptFlow
                    </h2>
                    <p className="text-gray-300">
                        Sign in to your account
                    </p>
                </motion.div>

                {/* Login Form */}
                <motion.div 
                    variants={fadeInUp}
                    className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* General Error Message */}
                        {errors.general && (
                            <motion.div 
                                variants={fadeInUp}
                                className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3"
                            >
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <p className="text-sm text-red-300">{errors.general}</p>
                            </motion.div>
                        )}

                        {/* Email Field */}
                        <motion.div variants={fadeInUp}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-3 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-400" />
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-gray-800/60 border rounded-xl shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 ${
                                    errors.email ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-white/10'
                                }`}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                            )}
                        </motion.div>

                        {/* Password Field */}
                        <motion.div variants={fadeInUp}>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-3 flex items-center gap-2">
                                <Lock className="w-4 h-4 text-purple-400" />
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 pr-12 bg-gray-800/60 border rounded-xl shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 ${
                                        errors.password ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-white/10'
                                    }`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-400">{errors.password}</p>
                            )}
                        </motion.div>

                        {/* Remember me and Forgot password */}
                        <motion.div variants={fadeInUp} className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-500 focus:ring-blue-500/50 border-gray-600 bg-gray-800 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/forgot-password" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                    Forgot your password?
                                </Link>
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={fadeInUp}>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center items-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transform hover:scale-105 active:scale-95 ${
                                    isLoading ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                                }`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    <>
                                        <LogIn className="w-5 h-5" />
                                        Sign in
                                    </>
                                )}
                            </button>
                        </motion.div>

                        {/* Sign up link */}
                        <motion.div variants={fadeInUp} className="text-center">
                            <p className="text-sm text-gray-400">
                                Don't have an account?{' '}
                                <Link to="/signup" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                    Sign up
                                </Link>
                            </p>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Footer */}
                <motion.div variants={fadeInUp} className="text-center mt-8">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                        <UserCheck className="w-4 h-4 text-blue-400" />
                        Secured by <span className="font-medium text-blue-400">AuthMate</span>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;
