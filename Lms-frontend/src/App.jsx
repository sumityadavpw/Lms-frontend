import './App.css'

import { Route, Routes } from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import CourseList from './Pages/Course/CourseList';
import Homepage from './Pages/HomePage';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CourseDescription from './Pages/Course/CourseDescription';
import RequireAuth from './Components/Auth/RequireAuth';
import CreateCourse from './Pages/Course/CreateCourse';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditProfile';
import Checkout from './Pages/Payment/Checkout';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route> | 
        <Route path= "/about" element={<AboutUs/>} ></Route>
        <Route path= "/courses" element={<CourseList/>} />
        <Route path= "/contact" element={<Contact/>} />
        <Route path= "/denied" element={<Denied/>} />

        <Route path="/course/description" element={<CourseDescription />}/>

        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/course/create" element={<CreateCourse/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} /> 
          <Route path='/user/editprofile' element={<EditProfile/>} />
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='checkout/success' element={<CheckoutSuccess/>}/>

        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
        
    </>
  )
}

export default App
