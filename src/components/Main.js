import React, { useState } from 'react'
import Tab from './tab'
import { tabsState , tabsContentState } from '../recoil/recoil' 
import {  useRecoilValue } from 'recoil'
import TabContent from '../components/tabContent'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'

function Main() {
    const tabsStateValue = useRecoilValue(tabsState)
    const tabsContentStateValue = useRecoilValue(tabsContentState)
    const [activeTabContent,setActiveTabContent] = useState(tabsContentStateValue)
    const smallDevices = useMediaQuery({ query: '(max-width: 1131px)' })
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState()

    const handleTabsHover=(title,index)=>{
        setActiveTabContent(tabsContentStateValue.filter(e=>e.title==title))
        setActiveIndex(index)
    }

    const handleTabsClick = (title)=>{
        if(smallDevices){
            navigate(`/exams/${title}`)
        }
    }



  return (
    <div className='wrap'>
      <h1>690+ Explore all exams</h1>
      <p>Get exam-ready with concepts, questions and study notes as per the latest pattern</p>


                <div className='container-1'>
                    <div className='tab-section'>
                        {
                            tabsStateValue.map((e,index)=>{
                                 return(
                                    <Tab 
                                       imgUrl={`${e.imgUrl}`}
                                       title={e.title}
                                       onHoverFunc = {()=>{ handleTabsHover(e.title,index)   }}
                                       onClickFunc = {()=> handleTabsClick(e.title)}
                                       key={index}
                                       index={index}
                                       activeIndex={activeIndex}
                                    />
                                 )
                            })
                        }
                    </div>

                   {!smallDevices && <div className='tab-contents-section'>
                        {
                           activeTabContent[0].exams.map((e,index)=>{
                                    return(
                                       <TabContent
                                          imgURL={e.img}
                                          examName={e.examName}
                                          noOfTests={e.testAvailable}
                                          containerWidth={"200px"}
                                          key={index}

                                       />
                                    )
                            })
                           
                        }
                    </div>
                    }
                       
                </div>

     </div>


  )
}

export default Main