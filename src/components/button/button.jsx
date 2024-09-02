/** @format */

import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [carts, setCarts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	// carts = [{
	//     id: 1,
	//     price: 29,
	//     quantity: 1
	// }];

	useEffect(() => {
		axios
			.get('https://backend-seven-black-77.vercel.app/products')
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		console.log(carts);
	}, [carts]);

	const handleSelectProduct = async (product) => {
		const newCarts = [...carts];
		const index = newCarts.findIndex((item) => item.id === product.id);
		if (index === -1) {
			newCarts.push({ ...product, quantity: 1 });
		} else {
			newCarts[index].quantity += 1;
		}
		setCarts(newCarts);
	};

	return (
		<div className='grid grid-flow-col gap-3'>
			<div className='p-2 w-[600px] flex flex-col container'>
				<h1 className='text-xl font-bold text-center w-[600px]'>Products</h1>
				<div className='grid grid-cols-3 w-[600px] gap-3 mt-2'>
					{products.map((product) => {
						let data = {
							id: product.id,
							price: product.price,
						};

						return (
							<div
								key={product.id}
								onClick={() => handleSelectProduct(data)}
								className='w-[190px] h-[190px] border flex flex-col justify-center items-center text-lg rounded-md cursor-pointer'>
								<span>{product.name}</span>
								<span>{product.price} ฿</span>
								<span className='text-xs mt-2 text-slate-500'>
									{product.description}
								</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className='p-2 w-[424px] flex justify-center  justify-self-center flex-col'>
				<span className='text-xl font-bold text-center w-[400px]'>Carts</span>
				<div className='w-[400px] '>
					{carts.map((cart) => {
						let product = products.filter(
							(product) => product.id === cart.id
						)[0];

						setTotalPrice(totalPrice + cart.price * cart.quantity);

						return (
							<div key={cart.id} className='flex justify-between'>
								<span>{product.name}</span>
								<span>{cart.price}</span>
								<span>{cart.quantity}</span>
							</div>
						);
					})}

					{totalPrice}
				</div>
			</div>
		</div>
	);
};

export default Products;
