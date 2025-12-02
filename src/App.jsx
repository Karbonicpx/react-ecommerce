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

     const fetchAppData = async () => {
            // Requesting data from cart (using query parameter to expend product details)
            // eslint-disable-next-line no-unused-vars
            const response = await axios.get("/api/cart-items?expand=product").then((response) => {
                setCart(response.data)
            })
        }

    useEffect(() => {


        fetchAppData()
    }, [])

    return (

        // Need to wrap the elements in the Routes to work
        <Routes>
            {/* Route path (URL, in this case is empty so index, or "/") is basically the page, and element is the component we want to show in that page */}
            <Route index element={<HomePage cart={cart} loadCart = {fetchAppData}/>} />
            <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={fetchAppData} />} />
            <Route path="orders" element={<OrdersPage cart={cart} loadCart={fetchAppData} />} />
            <Route path="tracking" element={<TrackingPage />} />
        </Routes>

    )
}

export default App;