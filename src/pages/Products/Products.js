import ProductCard from './ProductCard';
import useData from '../../data/useData'
const Products = () => {

  const data = useData('http://localhost:5000/api/alisnobba/products');

  return (
    <div>
     {data?.map((data) => {
        return (
          <ProductCard key={data.id} data={data}></ProductCard>
        );
      })}
    </div>
  )
}

export default Products