import React from 'react'

const ClockUi = () => {
    return ( 
      
    <div className='flex justify-center '>
        <div id='1' className='relative w-full max-w-lg '> 
        <div className='absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-mr'></div>
        <div className='absolute top-0 -right-4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl animate-mr'></div>
        <div className='absolute top-0 -bottom-11 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-mr'></div>
    </div>
      </div>  
       
    
    )
}


export default ClockUi