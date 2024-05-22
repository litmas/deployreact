import { Link } from 'react-router-dom';

export default function Car({ car }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <Link to={`/car/${car._id}`} className="block mt-4">
                <img className="h- w-full rounded-lg" src={car.imageURL} alt={car.title} />
            </Link>
            <h2 className="text-xl font-semibold mb-2 py-3">{car.title} {car.body}</h2>
            <p className="text-gray-600 font-semibold">
            <span className="mr-6">Year: {car.year}</span>
            <span>Antal mil: {car.mil}</span>
            </p>

        </div>
    );
}
