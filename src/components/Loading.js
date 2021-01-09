import React from 'react'
import styled from 'styled-components'

function Loading() {
 return (
<LoadingWrapper className="container">
  <div className="banner">
    <h1>LOADING</h1>
    <div className="banner-left"></div>
    <div className="banner-right"></div>
  </div>
</LoadingWrapper>
 )
}


const LoadingWrapper = styled.div`
 .container
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.banner
{
  position: relative;
  background-color: #256780;
  padding: 10px 20px;
  animation: loader 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;
  height: 10vh;
}

@keyframes loader
{
  0%
  {
    letter-spacing: -1px;
  }
  100%
  {
    letter-spacing: 15px;
  }
}

.banner::before
{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  transform: skewX(-15deg);
  background-color: #eee;
}

.banner-left, .banner-right
{
  width: 60px;
  height: 100%;
  position: absolute;
  z-index: -2;
  bottom: -30%;
  transform: skewX(-15deg);
  background-color: #ccc;
}

.banner-left
{
  animation: sub-banner-left 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;
}

@keyframes sub-banner-left
{
  0%
  {
    right: 82%;
  }
  100%
  {
    right: 90%;
  }
}

.banner-right
{
  animation: sub-banner-right 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;
}

@keyframes sub-banner-right
{
  0%
  {
    left: 82%;
  }
  100%
  {
    left: 90%;
  }
}

.banner-left::before, .banner-right::before
{
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: -1px;
  border: 22px solid;
  border-color: transparent;
}

.banner-left::before
{
  left: -1px;
  border-left-color: #18506F;
}

.banner-right::before
{
  right: -1px;
  border-right-color: #18506F;
}
`

export default Loading

