import React, { useState } from 'react'
import styled from 'styled-components'

function Tab({imgUrl,title,onHoverFunc,onClickFunc,activeIndex,index}) {
  return (
    <Wrap className={`tab ${ (index == activeIndex ? 'activeTab' : 'inActiveTab')}`}  onMouseOver={onHoverFunc} onClick={onClickFunc}>
        <img src={imgUrl} alt={title}  />
        <span>{title}</span>
    </Wrap>
  )
}
//event. currentTarget. className

export default Tab

const Wrap = styled.div`
font-size: .875rem;
padding: 1.5rem 0.5rem 1.5rem 1rem;
display:flex;
align-items:center;
cursor:pointer;
position:relative;

  :hover{
    background-color: #dedede;
      span{
        font-weight:700;
    }
  }
 img{
    max-width: 1.5rem;
    max-height: 1.5rem; 
    margin-right: 1rem;
    border-radius:50rem;
 }
 span{
    text-transform:capitalize;
    text-overflow: ellipsis;
    max-width: calc(100% - 1rem);
    overflow: hidden;
    white-space: nowrap;
 }
 
 ::after {
  border-color: #86a1ae;
  border-width: 2px;
  width: 8px;
  height: 8px;
  content: "";
  position: absolute;
  display: none;
  top: 50%;
  border-left-style: solid;
  border-bottom-style: solid;
  transition: all .2s ease-in-out;
  transform: rotate(-135deg) translateY(-50%);
  right: 0;
  right: 1rem;
  margin-top: -0.5rem;
}
 
@media screen and (max-width:1131px){
   ::after{
    display: inline-block;
   }
}
`