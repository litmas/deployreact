import { useEffect } from 'react'
import authStore from '../stores/authStore'

export default function LogoutPage() {
    
    const store = authStore()

    useEffect(() => {
        store.logout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h1 className="text-3xl font-bold">You are now logged out!</h1>
            </div>
        </div>
    </div>
    )
}