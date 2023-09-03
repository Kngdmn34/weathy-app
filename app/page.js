'use client'

import {Search, SunMedium,Wind,Map ,CloudRain, Cloudy ,Snowflake ,Droplets,Sunrise,Sunset      } from 'lucide-react';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import ClockUi from './components/ui/date';

const api = {
  url : 'https://api.openweathermap.org/data/2.5/',
  key:"6261b11f6cf4f416b5903d0b4bf3000f"
}
export default function Home() {
   
  const [location , setLocation] = useState('')
  const [wheather , setWheather] = useState({})


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`

  }

    const citysearch = async () =>{
      if( setLocation !== 0 ){
        try{
      await fetch(`${api.url}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setLocation('');
        setWheather(result)
        console.log(result)
      })
        }catch(error){
          console.log(error)
        }
      }
        toast.error('Invalid location')
      }
    
       
    const getWeatherIcon = (condition) => {
        switch (condition ) {
            case 'Rain': return <CloudRain size={70} style={{transition: '1s ease-in-out' }}/>
            case 'Clear': return <SunMedium size={70} style={{transition: '1s ease-in-out' }}/>
            case 'Clouds': return <Cloudy  size={70} style={{transition: '1s ease-in-out' }}/>
            case 'Snow': return <Snowflake  size={70} style={{transition: '1s ease-in-out' }}/>
            default:
              return <Cloudy  size={70} style={{transition: '1s ease-in-out' }}/>
        }
       
    }

    function formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes}`
    }

    

  
  return (
    <>
    <main className='relative bg-transparent pt-6'>
  
      <div className="sm:max-w-[40%] mx-auto grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-gray-200 text-4xl tracking-wider text-center font-bold p-6 border rounded-md">
          <span className='text-black'>Weathy</span>
        </div>
        <div className="border-b border-black rounded-full mt-6 "></div>
        <div className="relative">
          <input
            className="relative mt-6 p-2 block justify-center items-center w-full rounded-md ring-1 ring-black hover:ring-blue-400 hover:shadow-lg focus:shadow-xl outline-none"
            placeholder="Search city"
            type='text'
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <Search className='absolute center p-2 items-center right-2.5 bottom-1.5 hover:shadow-lg cursor-pointer transform hover:scale-125 transition ease-in-out delay-150 hover:duration-700 bg-gray-100 border border-gray-300 hover:border-black rounded-full divide-x divide-black p-2'
            size={30}
            onClick={citysearch}
          />
        </div>
        {wheather && Object.keys(wheather).length !== 0 ? (
          <>
            <div className='bg-gray-200 rounded-md p-2 mt-6'>
              <div className='mt-11 text-3xl text-black text-center font-extralight '>
                {(wheather.cod == '404') ? (
                  <p style={{ color: 'red' }}>City not found </p>
                ) : ''}
                {wheather?.name}
                <div className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100'></div>
                <div className='relative text-lg text-center text-black flex justify-center'>
                  <Map size={20} className='absolute mr-28 mt-1' />
                  {wheather?.sys?.country}
                </div>
                <div className='my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100'></div>
                <span className='font-extralight text-xl'>{dateBuilder(new Date())}</span>
              </div>
            </div>
          </>
        ) : <div></div>}
        <ClockUi />
        <div className='border-b border-black rounded-full mt-6 '></div>
        {wheather && Object.keys(wheather).length !== 0 ? (
          <div className="bg-gray-200 mt-11 p-4 rounded-md border-2 border-white">
            <div className="flex flex-col sm:flex-row justify-between font-thin text-7xl tracking-widest p-12 ">
              <div className="text-center sm:text-left">{Math.round(wheather?.main?.temp)} °C</div>
              <div className='text-3xl flex items-center font-light tracking-wide border-l border-black pl-6 sm:pl-0 sm:border-l-0 sm:border-t sm:mt-4'>
                <div className='relative mr-6 sm:mr-0'>
                  {getWeatherIcon(wheather?.weather[0]?.main)}
                </div>
                <div className='mr-6 sm:mr-0'>{wheather?.weather[0]?.main}</div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-gray-200 mt-11 p-4 rounded-md text-black border-white border-2">
              <div className="flex flex-col sm:flex-row justify-between font-thin text-7xl tracking-widest p-12 ">
                <div className="text-center sm:text-left">-- °C</div>
                <div className='text-3xl flex items-center font-light tracking-wide border-l border-black pl-6 sm:pl-0 sm:border-l-0 sm:border-t sm:mt-4'>
                  <div>
                    <Cloudy size={70} style={{ transition: '1s ease-in-out' }} />
                  </div>
                  <span className='ml-6'>--</span>
                </div>
              </div>
            </div>
          </>
        )}
        <div className='border-b border-black rounded-full mt-6 '></div>
        <ClockUi id='2' />
        <div className='bg-gray-200 flex flex-col sm:flex-row justify-between mt-11 p-4 rounded-md text-black border-white border-2 mb-4'>
          <div className='border-r border-black rounded-md m-2 p-3 grid justify-center'>
            <div className='flex items-center p-2' >
              <Wind size={30} />
              <span className='p-2'>:</span>
              <div className='flex p-2 py-4 items-center'>{wheather && Object.keys(wheather).length !== 0 ? wheather?.wind?.speed + `${'Km/h'}` : '--'} </div>
            </div>
          </div>
          <div className='border-l border-black border-r rounded-md m-2 p-6 grid justify-center items-center'>
            <div className='flex items-center p-2' >
              <Droplets size={30} /> <span className='p-2'>:</span>
              <div className='flex p-2 py-4 items-center'>{wheather && Object.keys(wheather).length !== 0 ? wheather?.main?.humidity + `${'%'}` : '--'} </div>
            </div>
          </div>
          <div className='border-l border-black rounded-md m-2 p-6 grid justify-center '>
            <div className='relative p-2 flex justify-col-2 items-center' >
              <Sunrise size={30} />
              <div className='flex  pt-2 ml-2'>:</div>
              <span className='   mt-2 ml-3'>{wheather && Object.keys(wheather).length !== 0 ? formatDate(wheather.sys?.sunrise) + "am" : '--'}</span>
            </div>
            <div className='relative p-2 flex justify-col-2 items-center' >
              <Sunset size={30} />
              <div className='flex items-center pt-2 ml-2'>:</div>
              <span className=' mt-2 ml-3'>{wheather && Object.keys(wheather).length !== 0 ? formatDate(wheather.sys?.sunset) + "pm" : '--'}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}
