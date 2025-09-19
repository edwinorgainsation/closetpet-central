// src/components/Dashboard.tsx
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import supabase from '../integrations/supabase/client'

const Dashboard = () => {
    useEffect(() => {
        const testConnection = async () => {
          const { data, error } = await supabase.from("users").select("*");
      
          if (error) console.error("Supabase Error:", error.message);
          else console.log("Supabase Connected ✅", data);
        };
      
        testConnection();
      }, []);
      
  const { user } = useUser()

  useEffect(() => {
    const syncUser = async () => {
      if (!user) return

      const { error } = await supabase
        .from('users')
        .upsert([
          {
            id: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: user.fullName,
          }
        ])

      if (error) {
        console.error('Supabase sync error:', error)
      }
    }

    syncUser()
  }, [user])

  return <div>Welcome, {user?.firstName}!</div>
}

export default Dashboard
