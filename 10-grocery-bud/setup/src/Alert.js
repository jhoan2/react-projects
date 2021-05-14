import React, { useEffect } from 'react'

const Alert = ({msg, type, removeAlert, list}) => {
  //adding list to dependency array so that it waits 3 seconds before disappearing 
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  },[list])

  return (
  <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
