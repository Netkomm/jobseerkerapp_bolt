'use client'
    import { useState } from 'react'
    import { supabase } from '../supabaseClient'
    import { useRouter } from 'next/navigation'
    import Link from 'next/link'

    export default function ForgotPasswordPage() {
      const [email, setEmail] = useState('')
      const [loading, setLoading] = useState(false)
      const [message, setMessage] = useState('')
      const [error, setError] = useState('')

      const handleResetPassword = async () => {
        setLoading(true)
        setError('')
        try {
          const { error } = await supabase.auth.resetPasswordForEmail(email)
          if (error) throw error
          setMessage('Password reset email sent! Check your inbox.')
        } catch (error: any) {
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-4">
            <h1 className="text-2xl font-bold">Reset Password</h1>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {message}
              </div>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border p-2"
            />
            <button
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full rounded bg-blue-600 p-2 text-white disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
            <div className="text-center">
              <Link href="/auth/login" className="text-blue-600 hover:underline">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      )
    }
