import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Register from "./components/User/Register/Register";
import Login from "./components/User/Login/Login";
//import PrivateZone from "./guards/PrivateZone";
import Profile from "./components/User/Profile/Profile";
import AdminZone from "./guards/AdminZone";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import CreateEvent from "./components/Events/CreateEvent/CreateEvent";
import GetEvents from "./components/Events/GetEvents/GetEvents";
import EditEvent from "./components/Events/EditEvent/EditEvent";
import EventDetail from "./components/Events/EventDetail/EventDetail";
import CreateQuestion from "./components/Questions/CreateQuestion/CreateQuestion";
import Header from "./components/Header/Header";
import PrivateZone from "./guards/PrivateZone";
import Home from "./components/Home/Home";
import CardSlider from "./components/Tools/CardSlider/CardSlider";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/card" element={<CardSlider />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/getevents" element={<GetEvents />} />
          <Route path="/editevent/:_id" element={<EditEvent />} />
          <Route path="/eventdetail/:_id" element={<EventDetail />} />
          <Route path="/createquestion" element={<CreateQuestion />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <profile />
              </PrivateZone>
            }
            />
          <Route
            path="/admin"
            element={
              <AdminZone>
                <Admin />
              </AdminZone>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
