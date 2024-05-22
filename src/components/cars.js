import carsStore from "../stores/useCarStore";
import Car from './singularCar';

export default function CarsStoreComponent() {
    const store = carsStore();

    return (
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {store.cars && store.cars.map(car => (
                <Car className="bg-white shadow-md rounded-lg p-6" car={car} key={car._id} />
            ))}
        </div>
    );
}
