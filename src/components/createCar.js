import useCarStore from "../stores/useCarStore"

export default function CreateCar() {
    const store = useCarStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (!store.createCar.title || !store.createCar.body || !store.createCar.imageURL || !store.createCar.regNMR || !store.createCar.year || !store.createCar.mil || !store.createCar.gearbox || !store.createCar.fordonstyp || !store.createCar.drivmedel || !store.createCar.colour || !store.createCar.pris) {
            alert("Please fill out all required fields.");
            return;
        }

        store.createdCar(e);
    };

    return (
        <div className='p-8 block'>
            <h2 className='text-xl font-bold mb-4'>Create car:</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input onChange={store.updateCreateCarField} value={store.createCar.title} name='title' placeholder="Title" className='border p-2 rounded w-full'/>
                <textarea onChange={store.updateCreateCarField} value={store.createCar.body} name='body' placeholder="Description" className='border p-2 rounded w-full h-20'></textarea>
                <input onChange={store.updateCreateCarField} value={store.createCar.imageURL} name='imageURL' placeholder="Image URL" className='border p-2 rounded w-full'/>
                <input onChange={store.updateCreateCarField} value={store.createCar.regNMR} name='regNMR' placeholder="Registration Number" className='border p-2 rounded w-full'/>
                <input onChange={store.updateCreateCarField} value={store.createCar.year} name='year' placeholder="Year" className='border p-2 rounded w-full'/>
                <input onChange={store.updateCreateCarField} value={store.createCar.mil} name='mil' placeholder="Mileage" type="number" className='border p-2 rounded w-full'/>
                <select onChange={store.updateCreateCarField} value={store.createCar.gearbox} name='gearbox' className='border p-2 rounded w-full'>
                    <option>Välj Växellåda:</option>
                    <option value="manuell">Manuell</option>
                    <option value="automat">Automat</option>
                </select>
                <select onChange={store.updateCreateCarField} value={store.createCar.fordonstyp} name='fordonstyp' className='border p-2 rounded w-full'>
                    <option>Välj Car Type:</option>
                    <option value="SUV">SUV</option>
                    <option value="Halvkombi">Halvkombi</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Kombi">Kombi</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Van">Van</option>
                    <option value="Minivan">Minivan</option>
                    <option value="Cabriolet">Cabriolet</option>
                    <option value="Hypercar">Hypercar</option>
                    <option value="Sports car">Sports car</option>
                    <option value="Brick">Brick</option>
                </select>
                <select onChange={store.updateCreateCarField} value={store.createCar.drivmedel} name='drivmedel' className='border p-2 rounded w-full'>
                    <option>Välj Drivmedel</option>
                    <option value="bensin">Bensin</option>
                    <option value="diesel">Diesel</option>
                    <option value="plug-in hybrid">Plug-in hybrid</option>
                    <option value="elektrisk">Elektrisk</option>
                </select>
                <input onChange={store.updateCreateCarField} value={store.createCar.colour} name='colour' placeholder="Colour" className='border p-2 rounded w-full'/>
                <input onChange={store.updateCreateCarField} value={store.createCar.pris} name='pris' placeholder="Price" type="number" className='border p-2 rounded w-full'/>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Create car</button>
            </form>
        </div>
    );
}
