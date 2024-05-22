import { useParams } from 'react-router-dom';
import useCarStore from '../stores/useCarStore';
import { useEffect } from 'react';

export default function CarIDPage() {
    const { carId } = useParams();
    const store = useCarStore();

    useEffect(() => {
        store.setCurrentCar(carId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const car = store.currentCar;

    if (!car) {
        return <div>Loading...</div>
    }

    return (
        <div className='p-8 bg-white shadow-md rounded-lg'>
            <div className='flex flex-wrap -mx-4'>
                {/* Image Section */}
                <div className='w-full sm:w-1/2 p-4'>
                    <img src={car.imageURL} alt={car.title} className='w-full h-auto rounded-lg mb-4' />
                </div>

                {/* Information Section */}
                <div className='w-full sm:w-1/2 p-4 px-10'>
                    <h1 className='text-3xl font-bold mb-2 text-gray-900'>{car.title}</h1>
                    <p className='text-lg text-gray-800 mb-4 font-semibold'>{car.body}</p>
                    <p className='text-lg text-gray-700'>
                        <span className='text-2xl font-bold'>Price:</span> {car.pris} kr
                    </p>
                    <p className='text-lg text-gray-700'>
                        <span className='font-semibold'>Year:</span> {car.year}
                    </p>
                    <p className='text-lg text-gray-700'>
                        <span className='font-semibold'>Mileage:</span> {car.mil}
                    </p>
                    <p className='text-lg text-gray-700'>
                        <span className='font-semibold'>Transmission:</span> {car.gearbox}
                    </p>
                    <p className='text-lg text-gray-700'>
                        <span className='font-semibold'>Fuel Type:</span> {car.drivmedel}
                    </p>
                    <p className='text-lg text-gray-700'>
                        <span className='font-semibold'>Vehicle Type:</span> {car.fordonstyp}
                    </p>
                    <p className='text-lg text-gray-700'>
                        <span className='font-semibold'>Color:</span> {car.colour}
                    </p>
                    <p className='text-lg text-gray-700'>
                        <span className='font-semibold'>Registration Number:</span> {car.regNMR}
                    </p>
                </div>
            </div>
        </div>
    );
}
