// these are react-icons
import { LuBuilding2 } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { UseBusiness } from '../context/BusinessContext';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { PostBusinessDetails } from "../middlewares/FetchingData";
import { SlEnergy } from "react-icons/sl";
import { useEffect } from "react";


function InputForm() {
    // here accessing variables and set functions from context
    const { setLocation, setName, name, location,setBusinessInfo,setHeadline } = UseBusiness()

    // accessing the response of the data as well as the status of them
    const {mutate:postDetails,data,isPending,isSuccess,isError,error} = PostBusinessDetails()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // set the name & location values in the context 
        postDetails({name, location})
    }

    useEffect(() => {

        // In this useEffect when the data comes and it is success it stores the values in the context
        if (isSuccess && data) {
            setBusinessInfo({ rating: data.rating, reviews: data.reviews })
            setHeadline(data.headline)
        };
    },[isSuccess,data])

  return (
      <form className='m-3 w-[95%] max-w-[600px] p-5 rounded-xl shadow-2xl/5 border border-gray-200 bg-white' onSubmit={handleSubmit}>
          {/* This is the top header part for the form */}
          <section className='flex flex-col items-center justify-center text-xl'>
              <div className="bg-linear-45 from-blue-600 to-sky-400 p-3 mr-2 rounded-full">
              <LuBuilding2 className='text-5xl text-white '/></div>
              <h3 className='font-semibold'>Business Analysis</h3>
          </section>

          {/* This section the name and location inputs with the submit button and some loading animations */}
          <section className="m-3">
              <div className='mt-3 w-full'>
                  <label htmlFor='name' className='flex items-center font-semibold'>
                      <FaRegChartBar className='mr-2 text-purple-500 text-xl'/>
                      Business Name</label>
                  <input id="id" type='text' className='border rounded p-2 border-gray-300 text-md font-semibold outline-none w-full bg-white' placeholder='eg.,Cakes&Co'
                    onChange={(e) => setName(e.target.value)}
                      value={name}
                  />
              </div>

               <div className='mt-3 w-full'>
                  <label htmlFor='location' className='flex items-center font-semibold'>
                      <IoLocationOutline className='mr-2 text-pink-500  text-xl'/>
                      Location</label>
                  <input id="location" type='text' className='border rounded p-2 border-gray-300 text-md font-semibold outline-none w-full bg-white' placeholder='eg.,Chennai'
                    onChange={(e) => setLocation(e.target.value)}
                      value={location}
                  />
              </div>

              <button className={`bg-linear-45 from-purple-500 to-sky-500 text-white p-3 rounded-lg mt-3 flex items-center justify-center cursor-pointer w-full ${isPending && 'animate-pulse'} hover:shadow-md hover:shadow-sky-200 disabled:opacity-50 font-semibold`} disabled={isPending}>
                  {isPending ? <AiOutlineLoading3Quarters className='animate-spin mr-2 text-xl' /> :
                <SlEnergy className="mr-2 text-xl"/>}
                    Simulate Rating & Headline
              </button>
              
              {/* If error occurs it displays isError->True/False values error.message has the error text */}
              {isError?<p className="text-red-600 font-semibold text-sm">{error.message}</p>:null}
          </section>
    </form>
  )
}

export default InputForm