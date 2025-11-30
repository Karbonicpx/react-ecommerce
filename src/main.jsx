import ReactDOM from "react-dom/client"; // Required for rendering the root
import HomePage from "./pages/HomePage"

// Render the root, which is the main component that holds all other components
ReactDOM.createRoot(document.getElementById("root")).render((
  <>
    <HomePage/>

  </>
))