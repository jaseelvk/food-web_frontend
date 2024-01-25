import React, {useEffect,useState } from 'react' 
import {Link} from 'react-router-dom' 
import styled from 'styled-components' 
 
 
export default function Header() { 
 
     
 
 
    return ( 
        <> 
            <Headertop> 
                <Top> 
                    <SectionLeft > 
                        <SectionNav > 
                            <SectionLogo> 
                                <SectionHighlight> 
                                    <SectionLogoLink to='/'> 
                                        <LogoImage src={require("../images/logo.jpg")} alt ="logo" /> 
                                    </SectionLogoLink> 
                                </SectionHighlight> 
                            </SectionLogo> 
                        </SectionNav> 
                    </SectionLeft> 
                    <SectionMiddle>  
                        <SectionContainer> 
                            <SectionSearchIcon> 
                                <SearchImage src={require("../images/search.png")} alt="search icon"  /> 
                            </SectionSearchIcon> 
                            <SectionInput> 
                                    <SearchInput  
                                        placeholder='type here to search...'  
                                        name='q' 
                                        
                
                                    /> 
                            </SectionInput> 
                        </SectionContainer> 
                    </SectionMiddle> 
                    <SectionRight> 
                        <NavList> 
                            <NavImageContainer to= "/add" title='addpost' ><NavImages src={require("../images/create.png")} /></NavImageContainer> 
                            <NavImageContainer to= "/favourite" title= 'favourites'><NavImagesFav src={require("../images/favourite.png")} /></NavImageContainer> 
                            <NavImageContainer to= "/mypost" title='mypost' ><NavImages src={require("../images/edit.svg").default} /></NavImageContainer> 
                        </NavList> 
                         
                        <NavList> 
                            <LoginButton to = "/login">Logout</LoginButton> 
                            
                        </NavList> 
     
                     
                         
                    </SectionRight> 
                </Top> 
                <SectionMainNav> 
                    <SectionNavLeft> 
                        <LogStatus> 
                                <LogButton>Logout</LogButton> 
                                <LogButton  to="/login" >Log in</LogButton> 
                        </LogStatus> 
                        <SectionNavBottom> 
                            <SectionOrder> 
                                <OrderLink to="/mypost"> 
                                    <TitleSpan >My Posts</TitleSpan> <SliderImage src={require("../images/logo.jpg")} alt = "slider Image"/> 
                                </OrderLink> 
                            </SectionOrder> 
                            <SectionOrder> 
                                <OrderLink to="/createpost"> 
                                <TitleSpan >Create Post</TitleSpan> <SliderImage src={require("../images/logo.jpg")} alt = "slider Image"/> 
                                </OrderLink> 
                            </SectionOrder> 
                            
                        </SectionNavBottom> 
                    </SectionNavLeft> 
                </SectionMainNav> 
            </Headertop> 
        </> 
    ) 
} 
 
 
const Headertop = styled.div` 
position: fixed; 
width: 100%; 
` 
 
const Top = styled.div` 
position: relative; 
background-color: #1b4040;; 
display: flex; 
justify-content: space-between; 
align-items: center; 
padding: 0 30px; 
height:80px; 
width: 100%; 
` 
const SectionLeft = styled.div` 
width: 20%; 
display: flex; 
align-items: center; 
 
` 
const SectionNav = styled.div` 
display:flex; 
justify-content: center;; 
align-items: center; 
 
` 
 
const SectionLogo = styled.div` 
width: 170px; 
height: 90px; 
display: flex; 
align-items: center; 
 
` 
 
const SectionHighlight = styled.h1` 
height: 100%; 
width: 100%; 
 
 
` 
const SectionLogoLink = styled(Link)` 
width: 100%; 
height: 100%; 
display: block; 
display: flex; 
align-items: center; 
justify-content: center; 
 
` 
const LogoImage = styled.img` 
display: block; 
height: 70%; 
width: 60%; 
border-radius:12px; 
` 
const SectionMiddle = styled.div` 
width: 30%; 
background-color: #fff; 
padding: 15px; 
border-radius:10px; 
` 
const SectionContainer = styled.div` 
display: flex; 
justify-content: center; 
align-items: center; 
 
` 
const SectionSearchIcon = styled.div` 
width: 15px; 
margin-right: 15px; 
 
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
background-color: #fff; 
border: 0px; 
&:focus{ 
    outline: none; 
} 
` 
const SectionRight = styled.div` 
width: 40%; 
display: flex; 
align-items: center; 
margin-left: 20px; 
justify-content: flex-end; 
 
` 
const NavList = styled.div` 
display: flex; 
align-items: center; 
` 
const NavImageContainer = styled(Link)` 
display: block; 
width: 30px; 
margin-left: 30px; 
 
` 
const NavImages = styled.img` 
display: block; 
width: 100%; 
` 
const NavImagesFav = styled.img` 
display: block; 
width: 100%; 
border-radius: 50%; 
` 
const LoginButton = styled(Link)` 
padding: 10px 20px; 
margin: 0 20px; 
font-size: 17px; 
font-weight: 600; 
display: block; 
color: #000; 
background-color: #a5a0a0; 
border-radius: 12px; 
 
` 
const SignupButton = styled(Link)` 
padding: 12px 16px; 
background-color: #381a5a; 
font-size: 20px; 
font-weight: 600; 
border-radius: 10px; 
display: block; 
color: #ffaa11 ; 
 
` 
const SectionMainNav = styled.div` 
display: none; 
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
 
` 
const TitleSpan = styled.span` 
font-size: 16px; 
font-weight: 600; 
display: block; 
 
` 
const SliderImage = styled.img` 
display: block; 
width: 10px; 
transform: rotate(270deg); 
 
`