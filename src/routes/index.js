import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import MainLayout from "../layouts";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
