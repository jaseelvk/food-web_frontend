import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Header() {
    const handleLog = () =>{
        updateUserData({type : "LOGOUT"})

    }

  return (
<>
<HeaderMain>
    <Main>
        <SectionLeft>
            <SectionNav>
                <SectionNavLink>
                    <NavImage src={require("../images/nav_icon.png")}alt="navHead" />
                </SectionNavLink>
                <SectionLogo>
                    <SectionHighlight>
                        <SectionLogoLink to='/'>
                            <LogoImage src={require("../images/logo.jpg")}alt="logo" />
                        </SectionLogoLink>
                    </SectionHighlight>
                </SectionLogo>
            </SectionNav>
        </SectionLeft>
        <SectionMiddle>
            <SectionContainer>
                <SectionSearchIcon>
                    <SearchImage src={require("../images/search.png")}alt="search" />

                </SectionSearchIcon>
                <SectionInput>
                    <SearchInput
                        placeholder="Search Your Favorites"
                        name="q"
                    />
                </SectionInput>
            </SectionContainer>
        </SectionMiddle>
        <SectionRight>
            <NavList>
                <NavImageContainer to="/createpost" title='createpost'><NavImages src={require("../images/create.png")}/></NavImageContainer>
                <NavImageContainer to="/favourite" title='favourite'><NavImages src={require("../images/favourite.png")}/></NavImageContainer>
                <NavImageContainer to="/mypost" title='createpost'><NavImages src={require("../images/mypost.png")}/></NavImageContainer>
            </NavList>
            <NavList>
                <LoginButton to="/login">Login</LoginButton>
                <SignupButton to="/signup">Signup</SignupButton>
            </NavList>
        </SectionRight>
    </Main>
    <SectionMainNav>
        <SectionNavLeft>
            <LogStatus>
                <LogButton onClick={()=>handleLog()}>LogOut</LogButton>
                <LogButton to='/login'>
                    Login
                </LogButton>
            </LogStatus>
            <SectionNavTop>
                <ProfileImageConatiner>
                    <ProfileImage src={require("../images/profile_demo.png")} alt="profile"/>

                </ProfileImageConatiner>
                <ProfileDetails>
                    <ProfileName>John Doe</ProfileName>
                    <ProfileEmail>example@example.com</ProfileEmail>
                    <SectionProfile>
                        <ProfileLink >View Profile</ProfileLink>
                    </SectionProfile>
                </ProfileDetails>

            </SectionNavTop>
            <SectionNavBottom>
                <SectionOrder>
                    <OrderLink>
                        <TitileSpan>My Post</TitileSpan> <SliderImage src={require("../images/scroldown.png")} alt="Slider Image"/>
                    </OrderLink>
                </SectionOrder>
                <SectionOrder>
                    <OrderLink>
                        <TitileSpan>Create Post</TitileSpan> <SliderImage src={require("../images/scroldown.png")} alt="Slider Image"/>
                    </OrderLink>
                </SectionOrder>
            </SectionNavBottom>
        </SectionNavLeft>
    </SectionMainNav>
</HeaderMain>
</>
  )
}


const HeaderMain = styled.div`
position: fixed;
width: 100%;
`;

const Main = styled.div`
position: relative;
background-color:#ffaa11;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
height:80px;
width: 100%;
@media (max-width: 640px){  
    padding: 0 15px;
    height:60px;
    }
@media (max-width: 480px){  
    padding: 0 5px;


    }
@media (max-width: 360px){  
    padding: 0 10px;


    }
`;
const SectionLeft = styled.div`
width: 20%;
display: flex;
align-items: center;
@media (max-width: 360px){  
    width: 30%;

    }
`;
const SectionNav = styled.div`
display: flex;
justify-content: center;;
align-items: center;


`;
const SectionNavLink = styled.divstyled(Link)`
display: block;
width: 30px;
@media (max-width:980px) {
    width: 25px;
    }
@media (max-width: 768px){  
    width: 20px;

    }
@media (max-width: 640px){  
    width: 20px;

    }
@media (max-width: 360px){  
    width: 18px;

    }
`;
const NavImage = styled.img`
display: block;
width: 100%;
`;
const SectionLogo =  styled.div`
width: 170px;
height: 90px;
display: flex;
align-items: center;
@media (max-width:980px) {
    width: 120px;
    height: 74px;
    }
@media (max-width: 768px){  
    width: 90px;
    height: 55px;
    }
@media (max-width: 640px){  
    width: 70px;
    height: 44px;
    }
@media (max-width: 360px){  
    width: 65px;
    height: 40px;
    }

`


const SectionHighlight = styled.h1`
height: 100%;
width: 100%;


`
const SectionLogoLink = styled(Link)`
width: 100%;
height: 100%;
display: block;

`
const LogoImage = styled.img`
display: block;
height: 100%;
width: 100%;
`
const SectionMiddle = styled.div`
width: 55%;
background-color: #ffbe4b;
padding: 20px;
border-radius:10px;
@media (max-width: 768px){  
    padding: 18px;
    width: 50%;
    }
@media (max-width: 640px){  
    padding: 14px;
    }
@media (max-width: 480px){  
    width: 45%;
    padding: 8px 4px;

    }
`
const SectionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const SectionSearchIcon = styled.div`
width: 15px;
margin-right: 15px;
@media (max-width: 480px){  
   display: none;
}

`
const SearchImage = styled.img`
display: block;
width: 100%;
`
const SectionInput = styled.div`
width: 80%;
`
const SearchInput = styled.input`
display:block;
width:100%;
background-color: #ffbe4b;
border: 0px;
&:focus{
    outline: none;
}
@media (max-width:360px) {
    font-size: 10px;

    }

`
const SectionRight = styled.div`
width: 15%;
display: flex;
align-items: center;
margin-left: 20px;
@media (max-width:1280px) {
    width: 20%;

    }
@media (max-width:980px) {
    width: 25%;

    }
@media (max-width:768px) {
    margin-left: 5px;
    width: 30%;

    }
@media (max-width:640px) {


    }


`
const NavList = styled.div`
display: flex;
align-items: center;
`
const NavImageContainer = styled(Link)`
display: block;
width: 30px;
margin-left: 30px;
@media (max-width:1280px) {
    margin-left: 20px;
    width: 25px;
    }
@media (max-width: 768px){  
    width: 22px;
    }
@media (max-width: 640px){  
    margin-left: 10px;
    width: 20px;

    }
@media (max-width: 480px){  
    margin-left: 10px;
    width: 18px;

    }
@media (max-width:360px){  
&:first-child{
    margin-left: 5px;

}

    }
`
const NavImages = styled.img`
display: block;
width: 100%;
`
const LoginButton = styled(Link)`
margin-right: 20px;
font-size: 20px;
font-weight: 700;
display: block;
color: #381a5a;
@media (max-width:1280px) {
    font-size: 16px;

    }
@media (max-width:640px) {
    font-size: 12px;
    }
@media (max-width:480px) {
    margin-left: 20px;
    }

`
const SignupButton = styled(Link)`
padding: 12px 16px;
background-color: #381a5a;
font-size: 20px;
font-weight: 600;
border-radius: 10px;
display: block;
color: #ffaa11 ;
@media (max-width:1280px) {
    font-size: 16px;
    padding: 10px 14px;
    }
@media (max-width:640px) {
    font-size: 13px;
    padding: 8px 10px;
    

    }
@media (max-width:480px) {
    display: none;
    }

`
const SectionMainNav = styled.div`
display: flex;
z-index:1;
position: absolute;
left: 0;
top: 0;
width: 100%;
height:700px;;

`
const SectionNavLeft = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 30%;
background-color: white;
@media (max-width:980px) {
    width: 40%;
    }
@media (max-width:768px) {
    width: 45%;

    }
@media (max-width:640px) {
    width: 60%;

    }
@media (max-width:480px) {
    width: 70%;

    }
@media (max-width:360px) {
    width: 80%;

    }
`

const LogStatus = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-top: 10px;
width: 80%;
`
const LogButton = styled(Link)`
display: inline-block;
color:#ffaa11;
font-weight: 600;
font-size: 20px;
@media (max-width:768px) {
    font-size: 17px;
    }
`

const SectionNavTop = styled.div`
margin-top: 60px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media (max-width:980px) {
    margin-top: 30px;
    }
`

const ProfileImage = styled.img`
display: block;
width: 98%;
height: 98%;
border-radius: 50%;

`
const ProfileDetails = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 30px;
`
const ProfileName = styled.h1`
color: #686868;
font-weight: 600;
font-size: 20px;
text-align: center;
color: #ffaa11;
@media (max-width:980px) {
    font-size: 17px;
    }
`
const ProfileEmail = styled.h2`
color: #686868;
font-weight: 600;
font-size: 20px;
text-align: center;
margin: 10px 0 20px;
@media (max-width:980px) {
    font-size: 17px;
    }

`
const SectionProfile = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const ProfileLink = styled(Link)`
    display: block;
    border-radius: 10px;
    background-color: #381a5a;
    color: #ffaa11;
    padding: 10px 16px;
    font-size: 20px;
    font-weight: 600;
    @media (max-width:980px) {
        padding: 8px 12px;
        font-size: 16px;
    }
`
const SectionNavBottom = styled.div`
width: 90%;
background-color: #eee;
`
const SectionOrder = styled.div`
&:first-child{
    border-bottom: 1px solid #381a5a;
}
`
const OrderLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
color: #ffaa11;
@media (max-width:980px) {
        padding: 16px ;
    }
`

const SliderImage = styled.img`
display: block;
width: 10px;
transform: rotate(270deg);

`



