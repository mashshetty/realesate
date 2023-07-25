import React from 'react'
import Sites from './Sites'

function HomePage(props) {
  return (
    <>
    <Sites sites={props.sites}/>
    </>
  )
}

export default HomePage