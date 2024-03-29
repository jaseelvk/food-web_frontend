import React,{useState,useEffect, useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import queryString from "query-string"
import axios from 'axios';
import { userContext } from '../../App';


export default function Login() {



    const [username,setUsername] = useState("")
	const [password,setPassword] = useState("")
	const [message,setMessage] = useState("")
    const [nextpath, setNextpath] = useState("");

    const navigate = useNavigate()
    const {user_data,updateUserData} = useContext(userContext)
    const location = useLocation();


    useEffect(() => {
     const search = location.search ;
     const value = queryString.parse(search);
     const {next} = value;
     setNextpath(next);
      
   },[]);

    let handleSubmit = (e)=>{
        setMessage("")
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/v1/auth/token/`,{username,password})
        .then((response)=>{
            
            console.log(response);
           let  {data} = response;
            localStorage.setItem("user_data",JSON.stringify(data));
            updateUserData ({type : "LOGIN", payload : data});
            {navigate("/")}
        })
        .catch((error)=>{
            console.log(error.message)
            if (error.response.status === 401){
                setMessage(error.response.data.detail)

            }
        })
    }




  return (
    <Container>
    <LeftContainer>
        <HeaderContainer>
            <Logo
                src={require("../images/logo.jpg")}
                alt="Image"
            />
        </HeaderContainer>
    </LeftContainer>
    <RightContainer>
        <LoginContainer>
            <LoginHeading>Login to your Account</LoginHeading>
            <LoginInfo>Enter email and password to login</LoginInfo>
            <Form onSubmit={handleSubmit} > 
                <InputContainer>
                    <TextInput type="text"  placeholder="Email" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <TextInput type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                </InputContainer>
                <LoginButton to="/signup">Signup Now</LoginButton>
                {message && <ErrorMessage>{message}</ErrorMessage>}
                <ButtonContainer>
                    <SubmitButton >Login</SubmitButton>
                </ButtonContainer>
            </Form>
        </LoginContainer>
    </RightContainer>
</Container>
);
}

const Container = styled.div`
min-height: 100vh;
display: flex;
padding: 15px;
background-color: #1b4040;
@media (max-width:640px) {
    flex-direction: column;
}
@media (max-width:640px) {

    padding:20px 50px;
    
}
@media (max-width:480px) {

padding:0 10px 20px ;

}

`;

const LeftContainer = styled.div`
width: 60%;
padding: 40px 0px 70px;
background-color: #1b4040;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:1280px) {
    width: 55%;
    }
@media (max-width:1080px) {
    width: 50%;
    }
@media (max-width:768px) {
    width: 40%;
}
@media (max-width:640px) {
    width: 100%;
    padding: 10px 0px 10px;
    
}

`;

const HeaderContainer = styled.div`
width: 90%;

`;
const Logo = styled.img`
display: block;
width: 70%;
border-radius: 50%;

`;
const RightContainer = styled.div`
background: #1b4040;
width: 40%;
display: flex;
align-items: flex-end;
justify-content: center;
border-radius: 20px;
padding:70px 70px;
background-color: #1b4040;
@media (max-width:1280px) {
    width: 45%;
    }
@media (max-width:1080px) {
    width: 50%;
    }
@media (max-width:980px) {
    padding:30px 30px;
}
@media (max-width:768px) {
    width: 60%;
}
@media (max-width:640px) {
    width: 100%;
    padding:50px 50px; 
}
@media (max-width:320px) {
    padding:20px 15px;
    
}

`;
const LoginContainer = styled.div`
padding-bottom: 70px;
border-bottom: 2px solid #ffaa11;
width: 100%;

`;
const LoginHeading = styled.h3`
font-size: 32px;
font-weight: bold;
margin-bottom: 20px;
color: #fff;
@media (max-width:980px) {
    font-size: 28px;
}
@media (max-width:360px) {
    font-size: 20px;
}
`;
const LoginInfo = styled.p`
font-size: 18px;
margin-bottom: 35px;
color: #fff;
@media (max-width:360px) {
    font-size: 15px;
}
 `;

 const Form = styled.form`
width: 100%;
display: block;
 `;
const InputContainer = styled.div`
margin-bottom: 15px;
position: relative;
&:before {
}
`;
const TextInput = styled.input`
padding: 20px 25px 20px 30px;
width: 100%;
display: block;
border: none;
border-radius: 10px;
font-size: 18px;
outline: none;
@media (max-width:980px) {
    padding: 12px 20px ;
    font-size: 16px;


}
@media (max-width:360px) {
    padding: 8px 12px ;
    font-size: 14px;

    
}
`;

const LoginButton = styled(Link)`
display: flex;
justify-content: flex-end;
margin-bottom: 25px;
color: #ffaa11;
font-size: 20px;
@media (max-width:980px) {
    font-size: 17px;

}
@media (max-width:360px) {
    font-size: 14px;

}
`;
const ButtonContainer =  styled.div`
display: flex;
justify-content: center;
`;


const SubmitButton = styled.button`
background: #ffaa11;
border: 0;
outline: 0;
color: #381a5a;
padding: 25px 40px;
border-radius: 8px;
font-size: 20px;
cursor: pointer;
font-weight: 600;
@media (max-width:980px) {
    padding: 12px 20px;
    font-size: 18px;

}
@media (max-width:360px) {
    padding: 8px 12px ;
    font-size: 16px;
    
}
`;
const ErrorMessage = styled.p`
font-size: 17px;
color: red;
margin-bottom: 25px;
text-align: center;
`
