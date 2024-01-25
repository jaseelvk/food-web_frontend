import React from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'

export default function NoPage() {
  return (
    <>
        <Header/>
        <SectionMain>
            <Title>OPs...No page Found..!</Title>
            <Title>Please check your URL</Title>
        </SectionMain>
    
    </>
  )
}

const SectionMain = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 28px;
`