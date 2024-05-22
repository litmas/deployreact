// carsStore.js

import axios from 'axios'
import { create } from 'zustand'

const useCarStore = create((set) => {
    return ({
        cars: [], // if cars array is empty then populate it. Because if you just copy and paste the link then the store isnt populated!
        currentCar: {},
        createCar: {
            title: '',
            body: '',
            imageURL: '',
            regNMR: '',
            year: '',
            mil: Number,
            gearbox: '',
            fordonstyp: '',
            drivmedel: '',
            colour: '',
            pris: Number,
        },
        updateCar: {
            _id: null,
            title: '',
            body: '',
            imageURL: '',
            regNMR: '',
            year: '',
            mil: Number,
            gearbox: '',
            fordonstyp: '',
            drivmedel: '',
            colour: '',
            pris: Number,
        },
        fetchCars: async () => {
            const res = await axios.get('/cars')
            set({cars: res.data.cars})
        },  
        updateCreateCarField: (e) => {
            const { name, value } = e.target;
            set((state) => {
                switch (name) {
                    case 'gearbox':
                    case 'fordonstyp':
                    case 'drivmedel':
                        return { createCar: { ...state.createCar, [name]: value } };
                    default:
                        return { createCar: { ...state.createCar, [name]: value } };
                }
            });
        },
        createdCar: async (e) => {
            e.preventDefault()
            const res = await axios.post('/cars', useCarStore.getState().createCar)
            set((state) => ({
                cars: [...state.cars, res.data.car],
                createCar: {title: '', body: '', imageURL: '', regNMR: '', year: '', mil: '', gearbox: '', drivmedel: '', fordonstyp: '', colour: '', pris: ''},
            }))
        },
        deleteCar: async (_id) => {
            await axios.delete(`/cars/${_id}`)
            set((state) => ({
                cars: state.cars.filter((car) => car._id !== _id),
            }))
        },
        handleUpdateFieldChange: (e) => {
            const { value, name } = e.target;
            set((state) => {
                let newState = {...state };
                if (name === 'gearbox' || name === 'drivmedel' || name === 'fordonstyp') {
                    newState.updateCar[name] = value; 
                } else {
                    newState.updateCar[name] = value; 
                }
                return newState;
            });
        },        
        
        toggleUpdate: (car) => {
            set({
                updateCar: {
                    _id: car._id,
                    title: car.title,
                    body: car.body,
                    imageURL: car.imageURL,
                    regNMR: car.regNMR,
                    year: car.year,
                    mil: car.mil,
                    gearbox: car.gearbox,
                    drivmedel: car.drivmedel,
                    fordonstyp: car.fordonstyp,
                    colour: car.colour,
                    pris: car.pris,
                },
            });
        },
        
        carUpdate: async (e) => {
            e.preventDefault()
            const {title, body, imageURL, regNMR, year, mil, gearbox, drivmedel, fordonstyp, colour, pris} = useCarStore.getState().updateCar;
            const res = await axios.put(`/cars/${useCarStore.getState().updateCar._id}`, {title, body, imageURL, regNMR, year, mil, gearbox, drivmedel, fordonstyp, colour, pris})
            set((state) => {
                const newUpdatedCar = [...state.cars]
                const carIndex = state.cars.findIndex((car) => car._id === useCarStore.getState().updateCar._id)
                newUpdatedCar[carIndex] = res.data.car
                return {cars: newUpdatedCar, updateCar: {_id: null, title: '', body: '', imageURL: '', regNMR: '', year: '', mil: null, gearbox: '', drivmedel: '', fordonstyp: '', colour: '', pris: null}}
            })
        },
        setCurrentCar: (id) => {
            set((state) => {
                let currentCarFiltered = state.cars.filter(x => x._id === id);
                let currentCar = currentCarFiltered.length === 0 ? {} : currentCarFiltered[0]
                return {currentCar: currentCar}
            })
        },

    });
})

export default useCarStore;
