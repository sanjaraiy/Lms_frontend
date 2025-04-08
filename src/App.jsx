
import AboutUs from './pages/AboutUs';

import HomePage from './pages/HomePage';

import { Routes,Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login'
import CourseList from './pages/course/CourseList';
import Contact from './pages/Contact';
import Denied from './pages/Denied';
import CourseDescription from './pages/course/CourseDescription';
import RequireAuth from './components/auth/RequireAuth';
import CreateCourse from './pages/course/CreateCourse';
import EditProfile from './pages/user/EditProfile';
import Checkout from './pages/payment/Checkout'


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
              <Route path='/checkout' element={<Checkout></Checkout>}></Route>
           </Route>


          <Route path="/courses" element={<CourseList></CourseList>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
