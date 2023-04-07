import Main from './components/Main'
import React from 'react'
import styled from 'styled-components'
import { Routes,Route } from 'react-router-dom'
import Exams from './components/exams'
function App() {

  return (
    <Wrap>
      <Routes >
            <Route exact path='/' element={<Main />} />
            <Route exact path='/exams/:title' element={<Exams />} />
      </Routes>
    </Wrap>
  )
}

export default App

const Wrap = styled.div`
    display:flex;
    justify-content:center;
`