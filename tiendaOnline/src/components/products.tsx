import {AddToCartIcon} from './icons'
interface Product {
  id: number
  title: string
  thumbnail: string
}
interface Props {
  products: Product[]
}

export const Products = ( { products }: Props) => {
  return (
    <div> 
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}