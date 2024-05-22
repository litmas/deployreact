import authStore from "../stores/authStore"
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
    const store = authStore()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
       
        if (!store.loginForm.email ||!store.loginForm.password) {
            alert('Fill in both email and password to log in!')
            return
        }
       
        await store.login()
        navigate('/')
    }

    return (
        <form onSubmit={handleLogin} className="space-y-4">
            <input onChange={store.updateLoginForm} value={store.loginForm.email} type='email' name='email' className="border p-2 rounded w-full"/>
            <input onChange={store.updateLoginForm} value={store.loginForm.password} type='password' name='password' className="border p-2 rounded w-full"/>
            <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </form>
    )
}
