import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
import Dishes from './components/screens/Dishes'
import Dish from './components/screens/Dish'
import Createpost from "./components/screens/CreatePost";
import Delete from "./components/screens/Delete";
import Edit from "./components/screens/Edit";
import Favourite from "./components/screens/Favorite";
import Mypost from "./components/screens/MyPost";
import Profile from "./components/screens/Profile";
import EditProfile from "./components/screens/EditProfile";
import Search from "./components/screens/Search";

export const userContext = React.createContext()
export default function App() {
  const [userdata, setUserdata] = useState({});
  const updateUserData = (action) =>{

	  switch(action.type){
		case "LOGOUT":
		  setUserdata(null);
		  localStorage.clear();
		  break;
		case "LOGIN" :
		  setUserdata(action.payload);
		  break;
		default :
		  break;
  
	  }
  
	};  
  return (
<>
<userContext.Provider value={{userdata , updateUserData}}>
<Router>
  <Routes>
    <Route path="/dish/:id" element={<Dish/>} />
    <Route path="/createpost" element={<Createpost/>} />
    <Route path='/' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/dishes' element={<Dishes/>} />
    <Route path="/delete/:id" element={<Delete/>} />
    <Route path='/edit/:id' element={<Edit/>} />
    <Route path='/favorite' element={<Favourite/>} />
    <Route path='/mypost' element={<Mypost/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/editprofile/edit' element={<EditProfile/>} />
    <Route path='/:q/' element={<Search/>} />
  </Routes>
</Router>

</userContext.Provider>

</>
  )
}
