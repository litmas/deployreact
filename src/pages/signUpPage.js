import SignUpForm from "../components/signUpForm"

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-3xl font-bold underline text-center">Sign up</h1>
                </div>
                <SignUpForm/>
            </div>
        </div>
    );
}
