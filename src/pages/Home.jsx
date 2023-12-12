import { useEffect, useState } from 'react'
import Card from '../components/Card';
import axios from 'axios';


const Home = () => {

    const apiUrl = "https://dummyjson.com/products";
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('')

    const getProducts = async () => {
        try {
            const response = await axios.get(apiUrl);
            setProducts(response.data.products);
        }
        catch (err) {
            setError(`Error fetching data ${err.message}`);
        }
        
    };

    useEffect(() => {
        getProducts();
    })


    return (
        <div className='container'>
            <h1>Products</h1>
            <div className="container-box">              
                {products.length
                ? products.map((products, index) => <Card key={index} data={products} />)
                : null}
            </div>
		</div>
	);
}

export default Home
