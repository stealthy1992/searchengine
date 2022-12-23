import React from 'react'
import { TailSpin } from 'react-loader-spinner'


const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <TailSpin color="blue"  height="550" width="80"/>
      {/* <Loader type="Puff" color="#00BFF" height="550" width="80"/> */}
    </div>
  )
}

export default Loading
