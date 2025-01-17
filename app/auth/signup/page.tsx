'use client'
    import { useState } from 'react'
    import { supabase } from '../supabaseClient'
    import { useRouter } from 'next/navigation'
    import Link from 'next/link'

    export default function SignUpPage() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [loading, setLoading] = useState(false)
      const [notification, setNotification] = useState<{
        type: 'success' | 'error'
        message: string
      } | null>(null)
      const router = useRouter()

      const handleSignUp = async () => {
        setLoading(true)
        setNotification(null)
        
        try {
          // Step 1: Create auth user
          const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth/confirm`,
              data: {
                // Add any additional user data here
              }
            }
          })

          if (authError) throw authError

          // Step 2: Create public user profile
          if (authData.user) {
            const { error: profileError } = await supabase
              .from('users')
              .insert([
                {
                  id: authData.user.id,
                  email: authData.user.email,
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString()
                }
              ])

            if (profileError) throw profileError
          }

          setNotification({
            type: 'success',
            message: 'Account created successfully! Please check your email to confirm your account.',
          })

          // Redirect after 3 seconds
          setTimeout(() => {
            router.push('/dashboard')
          }, 3000)
        } catch (error: any) {
          setNotification({
            type: 'error',
            message: error.message || 'Failed to create account. Please try again.',
          })
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-4 p-4">
            <h1 className="text-2xl font-bold">Create Account</h1>

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
              onClick={handleSignUp}
              disabled={loading}
              className="w-full rounded bg-blue-600 p-2 text-white disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
            <div className="text-center">
              <Link href="/auth/login" className="text-blue-600 hover:underline">
                Already have an account? Log in
              </Link>
            </div>
          </div>
        </div>
      )
    }
