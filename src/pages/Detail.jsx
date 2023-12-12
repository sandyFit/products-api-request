import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Detail = () => {
	const apiUrl = "https://dummyjson.com/products";
	const [product, setProduct] = useState({});
	const [error, setError] = useState("");
	const {id} = useParams();

	const getProduct = async () => {
		try {
			const response = await axios.get(`${apiUrl}/${id}`);
			console.log("Response:", response.data); // Log the entire response

			// Log individual properties
			console.log("ID:", response.data.id);
			console.log("Title:", response.data.title);

			setProduct(response.data);
		} catch (err) {
			setError(`Error fetching data ${err.message}`);
		}
	};

	// useEffect hook to trigger the product data fetching when the 'id' parameter changes
	useEffect(() => {
		getProduct();
	}, [id]);

    return (
        <div className="detail-box">
            <div className="card">
                {product.id ? (
                    <div className="card-box">
                        <h4>Product N° {product.id}</h4>
                        <h3>{product.title}</h3>
                        <div className="img-box">
                            {/* You might want to check if images array exists before accessing the first image */}
                            {product.images && product.images.length > 0 && (
                                <img src={product.images[0]} alt="pic" />
                            )}
                        </div>
                        <p>Category: {product.category}</p>
                        <p className="description">{product.description}</p>
                        <p>{product.rating}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ) : (
                    <p>{error || "Product data not found"}</p>
                )}
            </div>
        </div>
	);
};

export default Detail;
