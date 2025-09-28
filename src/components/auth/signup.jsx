import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthMateClient } from 'authmate';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, UserPlus, UserCheck, CheckCircle, Info, ExternalLink } from 'lucide-react';

const apiKey = import.meta.env.VITE_AUTHMATE_API_KEY;


const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userEmail, setUserEmail] = useState('');

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

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Full name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
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

            // Register new user
            const regRes = await AuthMateClient.register(apiKey, payload);

            // The response contains a JWT token and user details
            console.log('User Registered:', regRes);
            setIsLoading(false);
            // Handle successful registration here
            setUserEmail(formData.email);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Registration error:', error);
            setIsLoading(false);
            // Handle registration error here
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
                        Join PromptFlow
                    </h2>
                    <p className="text-gray-300">
                        Create your account to get started
                    </p>
                </motion.div>

                {/* Success Message */}
                {isSubmitted ? (
                    <motion.div 
                        variants={fadeInUp}
                        className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl"
                    >
                        <div className="text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 border border-green-500/30 mb-6"
                            >
                                <CheckCircle className="h-8 w-8 text-green-400" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-3">Account Created Successfully!</h3>
                            <p className="text-gray-300 mb-6">
                                We've sent a verification email to{' '}
                                <span className="text-blue-400 font-medium">{userEmail}</span>
                            </p>
                            
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                    <div className="text-left">
                                        <p className="text-sm text-blue-300 font-medium mb-1">
                                            Important: Verify your email to continue
                                        </p>
                                        <p className="text-sm text-blue-200">
                                            Please check your email inbox and click the verification link to activate your account.
                                            Don't forget to check your <span className="font-medium">spam/junk folder</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => window.location.href = 'mailto:'}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Open Email App
                                </button>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormData({
                                            fullName: '',
                                            email: '',
                                            password: '',
                                            confirmPassword: ''
                                        });
                                        setErrors({});
                                    }}
                                    className="w-full bg-gray-800/60 hover:bg-gray-800/80 border border-white/10 text-gray-300 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                                >
                                    Sign Up Another Account
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <>
                        {/* Signup Form */}
                        <motion.div 
                            variants={fadeInUp}
                            className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl"
                        >
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Full Name Field */}
                                <motion.div variants={fadeInUp}>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-200 mb-3 flex items-center gap-2">
                                        <User className="w-4 h-4 text-green-400" />
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        autoComplete="name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-800/60 border rounded-xl shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-200 ${
                                            errors.fullName ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-white/10'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.fullName && (
                                        <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
                                    )}
                                </motion.div>

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
                                            autoComplete="new-password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 pr-12 bg-gray-800/60 border rounded-xl shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 ${
                                                errors.password ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-white/10'
                                            }`}
                                            placeholder="Create a strong password"
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
                                    <div className="mt-2 text-xs text-gray-400">
                                        Password must contain uppercase, lowercase, and number
                                    </div>
                                </motion.div>

                                {/* Confirm Password Field */}
                                <motion.div variants={fadeInUp}>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200 mb-3 flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-pink-400" />
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            autoComplete="new-password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 pr-12 bg-gray-800/60 border rounded-xl shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-200 ${
                                                errors.confirmPassword ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-white/10'
                                            }`}
                                            placeholder="Confirm your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="mt-2 text-sm text-red-400">{errors.confirmPassword}</p>
                                    )}
                                </motion.div>

                                {/* Terms and Conditions */}
                                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        required
                                        className="h-4 w-4 text-blue-500 focus:ring-blue-500/50 border-gray-600 bg-gray-800 rounded mt-0.5"
                                    />
                                    <label htmlFor="terms" className="text-sm text-gray-300">
                                        I agree to the{' '}
                                        <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                                            Terms and Conditions
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div variants={fadeInUp}>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full flex justify-center items-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 transform hover:scale-105 active:scale-95 ${
                                            isLoading ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                                        }`}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Creating account...
                                            </div>
                                        ) : (
                                            <>
                                                <UserPlus className="w-5 h-5" />
                                                Create Account
                                            </>
                                        )}
                                    </button>
                                </motion.div>

                                {/* Sign in link */}
                                <motion.div variants={fadeInUp} className="text-center">
                                    <p className="text-sm text-gray-400">
                                        Already have an account?{' '}
                                        <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                            Sign in
                                        </Link>
                                    </p>
                                </motion.div>
                            </form>
                        </motion.div>
                    </>
                )}

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

export default Signup;
