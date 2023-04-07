import { faAngleRight, faArrowDown, faArrowDown19, faArrowDownShortWide, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'

function tabContent({imgURL,examName,noOfTests,containerWidth}) {
  return (
    <Wrap style={{width:`${containerWidth}`}} target="_blank" href='https://google.com'>
            <img src={imgURL} alt={examName} />
            <div className='texts'>
                <h4>{examName}</h4>
                <p>{noOfTests} tests</p>
            </div>
    </Wrap>
  )
}

export default tabContent

const Wrap = styled.a`
text-decoration:none;
position:relative;
padding-left: 30px;
transition: all .2s ease-in-out;
cursor: pointer;
min-height: 70px;
display: flex;
justify-content: center;
background:white;

:hover{
    transform: scale(1.02);
    transition: all .2s ease-in-out;
}

img{
    position: absolute;
    left: 1rem;
    top: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.texts{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:120px;
}
.texts p, h4{
    text-overflow: ellipsis;
    max-width: calc(100% - .2rem);
    overflow: hidden;
    white-space: nowrap;
}

.texts p{
    color: #86a1ae;
    font-size: .75rem;
}
.texts h4{
    color:Black;
}

.texts::after {
    border-color: #86a1ae;
    border-width: 2px;
    width: 8px;
    height: 8px;
    content: "";
    position: absolute;
    display: inline-block;
    top: 50%;
    border-left-style: solid;
    border-bottom-style: solid;
    transition: all .2s ease-in-out;
    transform: rotate(-135deg) translateY(-50%);
    right: 0;
    right: 1rem;
    margin-top: -0.5rem;
}

`