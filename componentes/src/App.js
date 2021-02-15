import React from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Footer from "./components/Footer/Footer"
import styled from 'styled-components'

const AppContainer = styled.div`
  background-color: #2A292E;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`
const App = () => {
  return (
    <AppContainer>
      <Header/>
      <HomePage/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
