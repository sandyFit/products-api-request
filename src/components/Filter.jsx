import React, {useEffect, useState} from "react";
import {Form, Table, Container, InputGroup} from "react-bootstrap-v5";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; 

const Filter = () => {
	const apiUrl = "https://dummyjson.com/products";
	const [error, setError] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const filterProducts = async () => {
		try {
			const response = await axios.get(apiUrl); // Correct axios spelling
			setFilteredProducts(response.data.products); // Use response.data.products
		} catch (err) {
			setError(`Error fetching data ${err.message}`);
		}
	};

	useEffect(() => {
		filterProducts();
	}, []);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		console.log(`Term: ${term}`);

		const filtered = filteredProducts.filter((product) =>
			product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
		console.log(`Filtered Products: ${filtered}`);
	};

	return (
		<div>
			<Container>
				<h1 className="text-center my-4">Product Filter</h1>
				<Form className="my-4 col-6">
					<InputGroup>
						<Form.Control
							placeholder="Search products by category"
							value={searchTerm}
							onChange={handleSearch}
						/>
					</InputGroup>
				</Form>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Description</th>
							<th>Category</th>
							<th>Price</th>
						</tr>
					</thead>

					<tbody>
						{filteredProducts.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.title}</td>
								<td>{product.description}</td>
								<td>{product.category}</td>
								<td>${product.price}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
};

export default Filter;
