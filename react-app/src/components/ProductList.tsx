import { useEffect } from 'react'
import { useState } from 'react';

const ProductList = ({category}:{category: string}) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log('ProductList mounted in', category);
        setProducts(['cls', 'shs'])
    }, [category]);
    return (
        <div>ProductList</div>
    )
}

export default ProductList