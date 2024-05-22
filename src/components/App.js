import CarsPage from '../pages/carsPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from '../pages/loginPage'
import RequireAuth from '../components/requireAuth'
import SignupPage from '../pages/signUpPage'
import LogoutPage from '../pages/logoutPage'
import HomePage from '../pages/homePage'
import CarIDPage from '../pages/carIDPage'
import Header from '../tailwindComps/header'
import Footer from '../tailwindComps/footer'
import '../index.css'

function App() {
    return (
        <div className='App'>
        <BrowserRouter>
        <Header/>
                <Routes>
                    <Route index element={<RequireAuth><CarsPage/></RequireAuth>} />
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/signup' element={<SignupPage/>}/>
                    <Route path='/logout' element={<LogoutPage/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path="/car/:carId" element={<CarIDPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
