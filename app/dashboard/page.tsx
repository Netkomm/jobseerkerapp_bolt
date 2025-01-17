'use client'
    import { useEffect, useState } from 'react'
    import { supabase } from '../auth/supabaseClient'
    import { useRouter } from 'next/navigation'

    export default function DashboardPage() {
      const [user, setUser] = useState<any>(null)
      const router = useRouter()

      useEffect(() => {
        const getUser = async () => {
          const { data: { user } } = await supabase.auth.getUser()
          if (!user) router.push('/auth/login')
          setUser(user)
        }

        getUser()
      }, [router])

      const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/auth/login')
      }

      if (!user) return <div>Loading...</div>

      return (
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
            <button
              onClick={handleLogout}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Logout
            </button>
          </div>
          {/* Dashboard content will go here */}
        </div>
      )
    }
