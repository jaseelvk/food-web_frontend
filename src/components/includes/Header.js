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
                <SeactionInput>
                    <SearchInput
                        placeholder="Search Your Favorites"
                        name="q"
                    />
                </SeactionInput>
            </SectionContainer>
        </SectionMiddle>
        <SeactionRight>
            <NavList>
                <NavImageConatiner to="/createpost" title='createpost'><NavImages src={require("../images/create.png")}/></NavImageConatiner>
                <NavImageConatiner to="/favourite" title='favourite'><NavImages src={require("../images/favourite.png")}/></NavImageConatiner>
                <NavImageConatiner to="/mypost" title='createpost'><NavImages src={require("../images/mypost.png")}/></NavImageConatiner>
            </NavList>
            <NavList>
                <LoginButton to="/login">Login</LoginButton>
                <SignupButton to="/signup">Signup</SignupButton>
            </NavList>
        </SeactionRight>
    </Main>
    <SectionMainNav>
        <SectionNavLeft>
            <LogStatus>
                <LogButton onClick={()=>handleLog()}>LogOut</LogButton>
                <LogButoon to='/login'>
                    Login
                </LogButoon>
            </LogStatus>
            <SectionNavTop>
                <ProfileImageConatiner>
                    <ProfileImage src={require("../images/profile_demo.png")} alt="profile"/>

                </ProfileImageConatiner>
                <ProfileDetails>
                    <ProfileName>John Doe</ProfileName>
                    {/* <ProfileEmail>example@example.com</ProfileEmail> */}
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


