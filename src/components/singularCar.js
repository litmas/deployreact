import useCarStore from "../stores/useCarStore";

export default function Car({ car }) {
    const store = useCarStore(store => ({
        deleteCar: store.deleteCar,
        toggleUpdate: store.toggleUpdate
    }));

    return (
        <div key={car._id} className='flex flex-col items-center p-6 border-b border-gray-200'>
            <h3 className='text-xl font-semibold mb-2'>{car.title}</h3>
            <p className='text-gray-600 mt-2'>{car.body}</p>
            <img className='w-full h-auto object-cover rounded-lg shadow-sm' src={car.imageURL} alt={car.title} />
            <div className='mt-4 flex justify-between w-full'>
                <button onClick={() => store.deleteCar(car._id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete car</button>
                <button onClick={() => store.toggleUpdate(car)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4'>Update car</button>
            </div>
        </div>
    );
}
