import useCarStore from "../stores/useCarStore"

export default function UpdateCar() {
    const store = useCarStore()

    if (!store.updateCar._id) {
        return <></>
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if required fields are filled
        if (!store.updateCar.title || !store.updateCar.body || !store.updateCar.imageURL || !store.updateCar.regNMR || !store.updateCar.year || !store.updateCar.mil || !store.updateCar.gearbox || !store.updateCar.fordonstyp || !store.updateCar.drivmedel || !store.updateCar.colour || !store.updateCar.pris) {
            alert("Please fill out all required fields.");
            return;
        }

        store.carUpdate(e);
    }

    return (
        <div className='p-8 block'>
            <h2 className='text-xl font-bold mb-4'>Update car:</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input onChange={store.handleUpdateFieldChange} value={store.updateCar.title} name='title' placeholder="Title" className='border p-2 rounded w-full'/>
                <textarea onChange={store.handleUpdateFieldChange} value={store.updateCar.body} name='body' placeholder="Description" className='border p-2 rounded w-full h-20'></textarea>
                <input onChange={store.handleUpdateFieldChange} value={store.updateCar.imageURL} name='imageURL' placeholder="Image URL" className='border p-2 rounded w-full'/>
                <input onChange={store.handleUpdateFieldChange} value={store.updateCar.regNMR} name='regNMR' placeholder="Registration Number" className='border p-2 rounded w-full'/>
                <input onChange={store.handleUpdateFieldChange} value={store.updateCar.year} name='year' placeholder="Year" className='border p-2 rounded w-full'/>
                <input onChange={store.handleUpdateFieldChange} value={store.updateCar.mil} name='mil' placeholder="Mileage" type="number" className='border p-2 rounded w-full'/>
                <select onChange={store.handleUpdateFieldChange} value={store.updateCar.gearbox} name='gearbox' className='border p-2 rounded w-full'>
                    <option>Välj Växellåda:</option>
                    <option value="manuell">Manuell</option>
                    <option value="automat">Automat</option>
                </select>
                <select onChange={store.handleUpdateFieldChange} value={store.updateCar.fordonstyp} name='fordonstyp' className='border p-4 rounded w-full'>
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
                    <select onChange={store.handleUpdateFieldChange} value={store.updateCar.drivmedel} name='drivmedel' className='border p-2 rounded w-full'>
                        <option>Välj Drivmedel</option>
                        <option value="bensin">Bensin</option>
                        <option value="diesel">Diesel</option>
                        <option value="plug-in hybrid">Plug-in hybrid</option>
                        <option value="elektrisk">Elektrisk</option>
                    </select>
                    <input onChange={store.handleUpdateFieldChange} value={store.updateCar.colour} name='colour' placeholder="Colour" className='border p-2 rounded w-full'/>
                    <input onChange={store.handleUpdateFieldChange} value={store.updateCar.pris} name='pris' placeholder="Price" type="number" className='border p-2 rounded w-full'/>
                    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Update car</button>
                    </form>
                    </div>
                    )
                    }