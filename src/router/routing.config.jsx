import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/landing/home.page";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
