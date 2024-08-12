import { useState } from 'react'
import './Filters.css'

export function Filters({changeFilters}) {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (e) =>{
        setMinPrice(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleChangeCategory = (e) =>{
        changeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" 
                id="price"
                min= '0'
                max= '2500'
                onChange={handleChangeMinPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div>
            <label htmlFor="categoty">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="All">Todas</option>
                    <option value="beauty">Bellesa</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="furniture">Mobiliario</option>
                    <option value="groceries">Comestibles</option>
                </select>
            </div>
        </section>
    )
}