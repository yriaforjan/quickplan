import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import EventDetail from "./pages/EventDetail/EventDetail";
import "./App.css";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <>
      <FavoritesProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/evento/:id" element={<EventDetail />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </>
  );
};

export default App;
