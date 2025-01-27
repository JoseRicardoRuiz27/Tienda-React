import './Productos.css';
import {AddToCartIcon} from './icons.jsx';

export function Productos ({ products }){
    return(
        <main className='products'>
            <ul>
                {products.map(product =>(
                    <li key={product.id}>
                        <img
                        src={product.thumbnail}
                        alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}