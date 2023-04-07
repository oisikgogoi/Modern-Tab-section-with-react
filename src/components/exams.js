import React from 'react'
import TabContent from './tabContent'
import styled from 'styled-components'
import { tabsContentState } from '../recoil/recoil' 
import { useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function Exams() {
  const tabsContentStateValue = useRecoilValue(tabsContentState)
  const [examNames,setExamNames] = useState([])
  const {title} = useParams()
  
  useEffect(()=>{
    const test = tabsContentStateValue.find(e=> e.title == title)
    setExamNames(test.exams)
  },[])

console.log(examNames)
  return (
    <Wrap className='exams-page-primary-container'>
      <h1>exams</h1>
          <div className='exams-content-container'>                 
            {
            examNames.map(e=>{ 
                    return(
                    <TabContent 
                    imgURL={e.img}
                    examName={e.examName}
                    noOfTests={e.testAvailable}
                    containerWidth={"100%"}
                    />
                    )
            })
            }
          </div>
    
    </Wrap>
  )
}

export default Exams

const Wrap = styled.div`
width:100%;
height:100%;
padding:2rem;
background-color: #ebebeb;
width: 70rem;
height:max-content;

h1{
  font-size: 1.5rem;
  margin-bottom:2rem;
}
 .exams-content-container{
  display:grid;
  width:100%;
  grid-template-columns:1fr;
 }

 .exams-content-container a{
  justify-content: flex-start;
  margin:2px 0;
 }
 .exams-content-container img{
  position:relative;
 }

 .exams-content-container .texts{
  margin-left:2rem;
 }

`