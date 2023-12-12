import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    

  return (
		<div className="card">
			<div className="card-box">
				<h4>Product N° {data.id}</h4>
				<h3>{data.title}</h3>
				<div className="img-box">
					<Link to={`/product/${data.id}`}>
						<img src={data.images[0]} alt="pic" />
					</Link>
				</div>
				<p>Category: {data.category}</p>
				<p className="description">{data.description}</p>
				<p>{data.rating}</p>
				<p>Price: {data.price}</p>
			</div>
		</div>
	);
};


export default Card
