import React from 'react'
import { useLocation } from 'react-router-dom'
import { AuthMateClient } from 'authmate'
import { CheckCircleIcon, XCircleIcon, ArrowPathIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const apiKey = import.meta.env.VITE_AUTHMATE_API_KEY;

function VerifyEmail() {
  const location = useLocation()
  const [verificationState, setVerificationState] = React.useState('verifying') // 'verifying', 'success', 'error', 'no-token', 'network-error', 'expired'
  const [errorMessage, setErrorMessage] = React.useState('')

  // Extract token from query parameters
  const getTokenFromQuery = () => {
    const urlParams = new URLSearchParams(location.search)
    return urlParams.get('token')
  }

  async function verifyEmail(token) {
    try {
      const payload = {token:token }
      setVerificationState('verifying')
      setErrorMessage('') // Clear any previous errors
      
      const result = await AuthMateClient.verifyEmail(apiKey, payload)
      
      // Check if the result actually indicates success or failure
      if (result && result.error) {
        const errorMsg = typeof result.error === 'string' ? result.error : 
                        (result.error.message || 'Invalid or expired token')
        throw new Error(errorMsg)
      }
      
      if (result && result.success === false) {
        const errorMsg = result.message || result.error || 'Verification failed'
        throw new Error(typeof errorMsg === 'string' ? errorMsg : 'Verification failed')
      }
      
      setVerificationState('success')
    } catch (error) {
      // Handle different types of errors
      let errorMessage = 'Failed to verify email. Please try again.';
      let statusCode = null;
      
      // Extract status code from various error sources
      if (error.status) {
        statusCode = error.status;
      } else if (error.statusCode) {
        statusCode = error.statusCode;
      } else if (error.response && error.response.status) {
        statusCode = error.response.status;
      }
      
      // Try to extract a clean error message
      if (error.message && typeof error.message === 'string' && !error.message.includes('{') && error.message !== '[object Object]') {
        errorMessage = error.message;
      } else if (error.error && typeof error.error === 'string') {
        errorMessage = error.error;
      } else if (error.response && error.response.data) {
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        } else if (error.response.data.error && typeof error.response.data.error === 'string') {
          errorMessage = error.response.data.error;
        } else if (error.response.data.message && typeof error.response.data.message === 'string') {
          errorMessage = error.response.data.message;
        }
      }
      
      // Set appropriate state based on error type
      if (!navigator.onLine) {
        setVerificationState('network-error')
        setErrorMessage('No internet connection. Please check your connection and try again.')
      } else if (statusCode === 400) {
        setVerificationState('expired')
        setErrorMessage('This verification link has expired or is invalid. Please request a new verification email.')
      } else if (statusCode === 404) {
        setVerificationState('error')
        setErrorMessage('Invalid verification link. Please check your email for the correct link.')
      } else if (statusCode === 409 || (errorMessage && errorMessage.toLowerCase().includes('already verified'))) {
        setVerificationState('success')
        setErrorMessage('')
      } else if (statusCode >= 500) {
        setVerificationState('error')
        setErrorMessage('Server error. Please try again in a few minutes.')
      } else {
        setVerificationState('error')
        setErrorMessage(errorMessage)
      }
    }
  }

  React.useEffect(() => {
    const token = getTokenFromQuery()
    if (token) {
      // Validate token format before attempting verification
      if (token.length < 10 || !/^[a-zA-Z0-9._-]+$/.test(token)) {
        setVerificationState('error')
        setErrorMessage('Invalid token format. Please check your verification link.')
        return
      }
      verifyEmail(token)
    } else {
      setVerificationState('no-token')
    }
  }, [location.search])

  const renderContent = () => {
    switch (verificationState) {
      case 'verifying':
        return (
          <>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <ArrowPathIcon className="w-16 h-16 text-blue-400 animate-spin" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-blue-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Verifying Your Email</h1>
            <p className="text-gray-300 text-lg mb-4">
              Please wait while we verify your email address...
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </>
        )
      
      case 'success':
        return (
          <>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckCircleIcon className="w-16 h-16 text-green-400" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-green-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Email Verified Successfully!</h1>
            <p className="text-gray-300 text-lg mb-6">
              Great! Your email has been verified. You can now access all features of PromptFlow.
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => window.close()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Close Window
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/30 transition-all duration-200"
              >
                Go to Homepage
              </button>
            </div>
          </>
        )
      
      case 'error':
        return (
          <>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <XCircleIcon className="w-16 h-16 text-red-400" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-red-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Verification Failed</h1>
            <p className="text-gray-300 text-lg mb-4">
              We couldn't verify your email address.
            </p>
            {errorMessage && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6">
                <p className="text-red-400 text-sm">{errorMessage}</p>
              </div>
            )}
            <div className="space-y-3">
              <button 
                onClick={() => verifyEmail(getTokenFromQuery())}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Try Again
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/30 transition-all duration-200"
              >
                Go to Homepage
              </button>
            </div>
          </>
        )

      case 'expired':
        return (
          <>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <XCircleIcon className="w-16 h-16 text-orange-400" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-orange-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Link Expired</h1>
            <p className="text-gray-300 text-lg mb-4">
              This verification link has expired for security reasons.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-6">
              <p className="text-orange-400 text-sm">
                <strong>What's next?</strong> Please request a new verification email from your account settings or login page.
              </p>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => window.location.href = '/login'}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Go to Login
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/30 transition-all duration-200"
              >
                Go to Homepage
              </button>
            </div>
          </>
        )

      case 'network-error':
        return (
          <>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <XCircleIcon className="w-16 h-16 text-yellow-400" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-yellow-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Connection Problem</h1>
            <p className="text-gray-300 text-lg mb-4">
              Unable to connect to our servers. Please check your internet connection.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
              <p className="text-yellow-400 text-sm">
                <strong>Troubleshooting:</strong> Check your internet connection, disable VPN if active, or try again in a few moments.
              </p>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => verifyEmail(getTokenFromQuery())}
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Retry Connection
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/30 transition-all duration-200"
              >
                Go to Homepage
              </button>
            </div>
          </>
        )
      
      case 'no-token':
        return (
          <>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <EnvelopeIcon className="w-16 h-16 text-yellow-400" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-yellow-400/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Invalid Verification Link</h1>
            <p className="text-gray-300 text-lg mb-6">
              This doesn't appear to be a valid email verification link. Please check your email and click the correct verification link.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
              <p className="text-yellow-400 text-sm">
                <strong>Need help?</strong> Make sure you're clicking the verification link from your email, and that the entire URL is copied correctly.
              </p>
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Go to Homepage
            </button>
          </>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center border border-white/20 shadow-2xl">
        {renderContent()}
      </div>
    </div>
  )
}

export default VerifyEmail