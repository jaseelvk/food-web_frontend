import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import styled from "styled-components";
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
import PrivateRoute from "./components/screens/PrivateRoute";

export const userContext = React.createContext()
export default function App() {
  const [userdata, setUserdata] = useState({});
  const [loading, setLoading] = useState(true);



  const updateUserData = (action) =>{

	  switch(action.type){
		case "LOGOUT":
		  setUserdata(null);
		  localStorage.clear();
		  break;
		case "LOGIN" :
		  break;
		default :
		  break;
  
	  }
  
	};useEffect(() =>{
	  setUserdata(JSON.parse(localStorage.getItem("user_data")));
	  setLoading(false);
  
	},[]);




  return loading?(<Loading><LoadingTitle></LoadingTitle></Loading>) :  (
<>
<userContext.Provider value={{userdata , updateUserData}}>
<Router>
  <Routes>
    <Route element={<PrivateRoute/>}>
      <Route path="/dish/:id" element={<Dish/>} />
      <Route path="/createpost" element={<Createpost/>} />
      <Route path='/mypost' element={<Mypost/>} />
      <Route path="/delete/:id" element={<Delete/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/favorite' element={<Favourite/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/editprofile/edit' element={<EditProfile/>} />
    </Route>
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Dishes/>} />
    <Route path='/:q/' element={<Search/>} />
  </Routes>
</Router>

</userContext.Provider>

</>
  )
}
const Loading = styled.div`
width: 100%;
height: 100vh;
background-color: #ffaa11;
display: flex;
align-items: center;
justify-content: center;
`
const LoadingTitle = styled.h1`
font-size: 700px;
color: #381a5a;
`