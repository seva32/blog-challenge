import { Routes, Route } from "react-router-dom";

// import the Home.tsx component
import { Home } from "../views/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { AppRoutes };
