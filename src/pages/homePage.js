import Cars from '../components/carList'
import carsStore from '../stores/useCarStore'
import { useEffect } from'react'

export default function HomePage() {
    const store = carsStore()

    useEffect(() => {
        store.fetchCars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold text-center mb-4'>Cars for sale</h1>
            <Cars/>
        </div>
    )
}
