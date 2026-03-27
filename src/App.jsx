import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cabins from "./pages/Cabins";
import CabinDetails from "./pages/CabinDetails";
import Login from "./pages/Login";
import PageNotFound from "./ui/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            {/* nested routes */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cabins" element={<Cabins />} />
              <Route path="/cabins/:cabinId" element={<CabinDetails />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
