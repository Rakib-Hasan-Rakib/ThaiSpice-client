import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
