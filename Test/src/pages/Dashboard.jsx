import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '../components';
import { earningData } from '../data/dummy';


const Dashboard = () => {
  return (
    <div className="mt-12">
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-100 p-8 pt-9 m-3 bg-hero-pattern  bg: bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-white'>
              Progress
            </p>
          </div>
          <div className='mt-6'>
            <Button color="white" byColor="#0693e3" text='Statistics' borderRadius="10px" size='md' />
          </div>
        </div>
      </div>
      <div className='flex m-3 flex-wrap  justify-center gap-1 items-center'>
        {earningData.map((item) => (
          <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
            <button type="button" style={{ color: item.iconColor, background: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
              {item.icon}
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {item.amount}
              </span>
              <span className={`text-sm ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className='text-sm text-gray-400 mt-1'>
              {item.title}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Dashboard