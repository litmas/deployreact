import useCarStore from "../stores/useCarStore";
import Car from './singleCarList.js';

export default function CarsStoreComponent() {
    const store = useCarStore();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {store.cars && store.cars.map((car) => (
                <Car car={car} key={car._id} />
            ))}
        </div>
    );
}
