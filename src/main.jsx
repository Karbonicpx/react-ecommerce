import ReactDOM from "react-dom/client"; // Required for rendering the root
import HomePage from "./pages/HomePage"
import { BrowserRouter } from "react-router"; // Used to navigate in different pages with the same html

// Render the root, which is the main component that holds all other components
ReactDOM.createRoot(document.getElementById("root")).render((
  <>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </>
))