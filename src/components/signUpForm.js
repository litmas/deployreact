import authStore from "../stores/authStore"
import { useNavigate } from 'react-router-dom'

export default function SignUpForm() {
    const store = authStore()
    const navigate = useNavigate()

   
    const handleSignUp = async (e) => {
        e.preventDefault()
       
        if (!store.signUpForm.email ||!store.signUpForm.password) {
            alert('Fill in both email and password to log in!')
            return
        }
       
        await store.signUp()
        navigate('/login')
    }

    return (
        <form onSubmit={handleSignUp} className="space-y-4">
            <input onChange={store.updateSignUpForm} value={store.signUpForm.email} type='email' name='email' className="border p-2 rounded w-full"/>
            <input onChange={store.updateSignUpForm} value={store.signUpForm.password} type='password' name='password' className="border p-2 rounded w-full"/>
            <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</button>
        </form>
    )
}
