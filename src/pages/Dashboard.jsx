import React, { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '../components';
import { earningData } from '../data/dummy';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart, FiActivity, FiZap, FiUser } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft, BsFillBarChartFill } from 'react-icons/bs';

const Dashboard = () => {
  var id = 344;

  const [weight, setWeight] = useState("");
  const [calorie, setCalories] = useState("");
  useEffect(() => {
      fetch(`http://127.0.0.1:8000/client/${id}`)
        .then(response => response.json())
        .then(data => {
          setWeight(data.client[10]);
          setCalories(data.client[11]);
          console.log(data);
        })
        .catch(() => {
          console.log("error")
        })
  },);
  var earning = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: `${calorie}/2500`,
      title: 'Calories',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '70',
      percentage: '%',
      title: 'Progress',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: `${weight}/170`,
      percentage: 'Ibs',
      title: 'Weight Goal',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
  ];
  
  return (
    <div className="mt-12">
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-100 p-8 pt-9 m-3 bg-hero-pattern  bg: bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-white'>
              Fitness Progress
            </p>
          </div>
          <div className='mt-6'>
            <Button color="white" byColor="#0693e3" text='Statistics' borderRadius="10px" size='md' />
          </div>
        </div>
      </div>
      <div className='flex m-3 flex-wrap  justify-center gap-1 items-center'>
        {earning.map((item) => (
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