
import React from 'react'
import logoImage from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link to = '/home'>
        <div className="logo h-16 w-16">
            <img src={logoImage} alt="" />
        </div>
        </Link>
    );
}
