import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
import Dishes from './components/screens/Dishes'
import Dish from './components/screens/Dish'
import Createpost from "./components/screens/CreatePost";

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

  
  </Routes>
</Router>

</userContext.Provider>

</>
  )
}
