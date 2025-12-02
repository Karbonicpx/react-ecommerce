import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Product } from '../components/Product';
import axios from 'axios';
import './HomePage.css';
export function HomePage({ cart, loadCart }) {

    /* Getting the products backend data, with a fetch request
    // Returns a promise --> Asynchronous code
    fetch('http://localhost:3000/api/products')
    .then((response) =>{ // When it finishes fetching, loads the "then"

        // Transforming the response to a json, and when this process finishes executes the next "then"
        return response.json().then(() => {

        })
    })
    */

    // Saving the data of the backend in this state ([] is for empty initial value)
    const [products, setProducts] = useState([]);

    // Using a useEffect since the request needs to only run once (with empty array)
    // Since the await requires a async function, the function of useEffect returns a promise, which breaks his functionality
    // Instead, create a async function inside the useEffect function
    useEffect(() => {

        const getHomeData = async () => {
            // OR, you can use axios (npm package) which already makes the json conversion process
            // Use await for saving the fetch data to a variable
            // eslint-disable-next-line no-unused-vars
            const response = await axios.get("/api/products").then((response) => {

                // Function that will load the data for the products
                setProducts(response.data)
            });

        };

        getHomeData();
    }, [])

    // Loading the elements of the / into this component
    return (
        <>
            <Header cart={cart} />
            <title>Home Page</title>
            <div className="home-page">
                <div className="products-grid">

                    {products.map((product) => {

                        return (
                            <Product key={product.id} product={product} loadCart={loadCart()} />
                        )
                    })}
                </div>
            </div>
        </>

    )

}