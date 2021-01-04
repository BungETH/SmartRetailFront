//npm import
import React from 'react'
import ReactLoading from 'react-loading';

//local import

const Loading = ({type, color}) => {
  return (
    <ReactLoading type={type} color={color} height={333} width={180} />
  )
}


export default Loading



