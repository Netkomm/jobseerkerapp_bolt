'use client'
    import { useEffect } from 'react'
    import { useRouter } from 'next/navigation'
    import { supabase } from '../supabaseClient'

    export default function ConfirmPage() {
      const router = useRouter()

      useEffect(() => {
        const handleEmailConfirmation = async () => {
          const { data, error } = await supabase.auth.getSession()
          
          if (data.session) {
            // Create user profile after confirmation
            await supabase
              .from('users')
              .insert([
                {
                  id: data.session.user.id,
                  email: data.session.user.email,
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString()
                }
              ])
            
            router.push('/dashboard')
          }
        }

        handleEmailConfirmation()
      }, [router])

      return (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Confirming your email...</h1>
            <p className="mt-4">Please wait while we verify your email address.</p>
          </div>
        </div>
      )
    }
