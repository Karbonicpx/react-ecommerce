import './index.css'
import axios from 'axios';
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { Routes, Route } from "react-router"; // Used to make a page be inserted in the routing (SPA)
import { useEffect, useState } from 'react';



function App() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Requesting data from cart
        axios.get("/api/cart-items").then((response) => {
            setCart(response.data)
        })
    }, [])

    return (

        // Need to wrap the elements in the Routes to work
        <Routes>
            {/* Route path (URL, in this case is empty so index, or "/") is basically the page, and element is the component we want to show in that page */}
            <Route index element={<HomePage cart={cart} />} />
            <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="tracking" element={<TrackingPage />} />
        </Routes>

    )
}

export default App;