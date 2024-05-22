// carsPage.js
import React, { useEffect } from 'react';
import Cars from '../components/cars';
import UpdateCar from '../components/updateCar';
import CreateCar from '../components/createCar';
import carsStore from '../stores/useCarStore';

export default function CarsPage() {
    const store = carsStore();

    const fetchCars = () => {
        store.fetchCars();
    };

    useEffect(() => {
        fetchCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
     <h1 className="text-3xl font-bold text-center py-8">Admin for Trekantens Bilcenter</h1>
            <CreateCar/>
            <Cars />
            <UpdateCar />
            
        </>
    );
}
