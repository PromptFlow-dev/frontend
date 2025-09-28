import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthMateClient } from 'authmate';

const apiKey = import.meta.env.VITE_AUTHMATE_API_KEY;

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

        return newErrors;
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
            // User email
            const payload = {
                email: formData.email
            };

            // Request password reset
            const resetRes = await AuthMateClient.requestPasswordReset(apiKey, payload);
            
            console.log('Password reset requested:', resetRes);
            setIsLoading(false);
            setIsSuccess(true);
            
        } catch (error) {
            console.error('Password reset error:', error);
            setErrors({ general: 'Failed to send reset email. Please try again.' });
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Success Message */}
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                            Check Your Email
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            We've sent a password reset link to <strong>{formData.email}</strong>
                        </p>
                    </div>

                    {/* Success Card */}
                    <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
                        <div className="text-center space-y-4">
                            <p className="text-gray-700">
                                Please check your email and click the link to reset your password. 
                                The link will expire in 24 hours.
                            </p>
                            
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex">
                                    <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-sm text-blue-700">
                                        Didn't receive the email? Check your spam folder or try again.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    Try Another Email
                                </button>
                                
                                <Link
                                    to="/login"
                                    className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium text-center"
                                >
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            Powered by <span className="font-medium text-indigo-600">AuthMate</span> Template
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Forgot Your Password?
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        No worries! Enter your email and we'll send you a reset link.
                    </p>
                </div>

                {/* Forgot Password Form */}
                <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* General Error Message */}
                        {errors.general && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                <p className="text-sm text-red-600">{errors.general}</p>
                            </div>
                        )}
                        
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                                    errors.email ? 'border-red-300' : 'border-gray-300'
                                }`}
                                placeholder="Enter your email address"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                                    isLoading
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700'
                                }`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending Reset Link...
                                    </div>
                                ) : (
                                    'Send Reset Link'
                                )}
                            </button>
                        </div>

                        {/* Back to Login */}
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Remember your password?{' '}
                                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Back to Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Additional Help */}
                <div className="bg-gray-50 py-4 px-6 rounded-lg">
                    <div className="text-center">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Need More Help?</h3>
                        <p className="text-xs text-gray-600 mb-3">
                            If you're having trouble accessing your account, please contact our support team.
                        </p>
                        <a 
                            href="mailto:support@authmate.io"
                            className="text-xs text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        Powered by <span className="font-medium text-indigo-600">AuthMate</span> Template
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
