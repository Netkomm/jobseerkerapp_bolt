'use client'
    import { useState } from 'react'
    import { supabase } from '../supabaseClient'
    import { useRouter } from 'next/navigation'
    import Link from 'next/link'
    import { Logo } from '../../components/Logo'

    export default function LoginPage() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [loading, setLoading] = useState(false)
      const [notification, setNotification] = useState<{
        type: 'success' | 'error'
        message: string
      } | null>(null)
      const router = useRouter()

      const handleLogin = async () => {
        setLoading(true)
        setNotification(null)
        try {
          const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
          })

          if (error) throw error
          router.push('/dashboard')
        } catch (error: any) {
          setNotification({
            type: 'error',
            message: error.message || 'Failed to login. Please try again.',
          })
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center">
          {/* Logo Link to Home */}
          <div className="absolute top-4 left-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <h1 className="text-xl font-bold text-gray-900">JobSeeker.ai</h1>
            </Link>
          </div>

          <div className="w-full max-w-md space-y-4 p-4">
            <h1 className="text-2xl font-bold">Login</h1>

            {/* Notification */}
            {notification && (
              <div
                className={`p-4 rounded ${
                  notification.type === 'success'
                    ? 'bg-green-100 border border-green-400 text-green-700'
                    : 'bg-red-100 border border-red-400 text-red-700'
                }`}
              >
                {notification.message}
              </div>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border p-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border p-2"
              required
              minLength={6}
            />
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full rounded bg-blue-600 p-2 text-white disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className="flex justify-between">
              <Link href="/auth/signup" className="text-blue-600 hover:underline">
                Create Account
              </Link>
              <Link href="/auth/forgot-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      )
    }
