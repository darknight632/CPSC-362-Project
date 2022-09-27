import React from 'react'
import {useStateContext} from '../contexts/ContextProvider';

const Dashboard = () => {
  return (
    <div className ="mt-12">
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern  bg: bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-white'>
              Progress
            </p>
          </div>
        </div>
        <div className='mt-6'>
          <Button color = "white" byColor="blue" text='Download' borderRadius="10px" size='md'/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard