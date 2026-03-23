import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cabins from "./pages/Cabins";
import CabinDetails from "./pages/CabinDetails";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/cabins/:cabinId" element={<CabinDetails />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
