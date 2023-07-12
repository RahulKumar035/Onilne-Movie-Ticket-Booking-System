import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carouselslide from "./pages/Carousel";
import Aboutus from "./pages/Aboutus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CustomersList from "./pages/CustomerList";
import UserDetails from "./pages/UserDetails";
import MyBookings from "./pages/MyBookings";
import SearchResult from "./pages/SearchResult";
import UserProfile from "./pages/UserProfile";
import MyPayments from "./pages/MyPayments";
import CustomerRegister from "./pages/CustomerRegister";
import Booknow from "./pages/Booknow";
import Bookings from "./pages/Bookings";
import Movies from "./pages/Movies";
import Halls from "./pages/Halls";
import Shows from "./pages/Shows";
import Reports from "./pages/Reports";
import SeatSelect from "./pages/SeatSelect";

export default function App() {
  return (
   <div style={{width:"100vw"}}>
     <BrowserRouter>
     <Navbar/>     
        <Routes>
          <Route element={<><Carouselslide/><Aboutus /><Footer/></>} path="/" exact />
          <Route element={<><SearchResult /></>} path="/search" exact />
          <Route element={<Login/>} path="/login" />
          <Route element={<CustomerRegister/>} path="/cregister" />
          <Route element={<CustomersList/>} path="/users" />
          <Route element={<Halls/>} path="/halls" />
          <Route element={<Movies/>} path="/movies" />
          <Route element={<Shows/>} path="/shows" />
          <Route element={<UserDetails/>} path="/udetails/:id" />
          <Route element={<MyBookings/>} path="/mybookings" />
          <Route element={<Bookings/>} path="/bookings" />
          <Route element={<Reports/>} path="/reports" />
          <Route element={<Booknow/>} path="/book/:id" />
          <Route element={<SeatSelect/>} path="/selectseat" />
          <Route element={<MyPayments/>} path="/mypayments" />
          <Route element={<UserProfile/>} path="/profile" />
        </Routes>
     </BrowserRouter>     
   </div>
  );
}

