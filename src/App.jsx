
import AboutUs from './Pages/AboutUs';

import HomePage from './Pages/HomePage';

import { Routes,Route } from 'react-router-dom'
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CourseDescription from './Pages/Course/CourseDescription';
import RequireAuth from './Components/Auth/RequireAuth';
import CreateCourse from './Pages/Course/CreateCourse';
import EditProfile from './Pages/User/EditProfile';



function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/denied" element={<Denied></Denied>}></Route>
          <Route path="/course/description" element={<CourseDescription></CourseDescription>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          
           <Route element={<RequireAuth allowedRoles={["ADMIN"]}></RequireAuth>}>
              <Route path='/course/create' element={<CreateCourse></CreateCourse>}></Route>
           </Route>
           
           <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]}></RequireAuth>}>
              <Route path='/user/profile' element={<Profile></Profile>}></Route>
              <Route path='/user/editprofile' element={<EditProfile></EditProfile>}></Route>
           </Route>


          <Route path="/courses" element={<CourseList></CourseList>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
