import { UseBusiness } from '../context/BusinessContext'
import { FaStar } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { GenerateHeadline } from '../middlewares/FetchingData';
import { SlEnergy } from "react-icons/sl";
import { useEffect, useState } from 'react';
// used framer motion for the animation
import { motion, AnimatePresence } from 'framer-motion';


function DisplayCard() {
  // Used to show a small delay for loading in handleDataView for UX purpose
  // Its nice to see the loading view
  const [showContent, setShowContent] = useState(false)
  
  // Working on the context values and functions
  const { businessInfo, headline, setHeadline, name, location } = UseBusiness()
  
  // this is the fetching of the random headline 
  const {data:fetchData,isFetching,refetch,isSuccess} = GenerateHeadline(name,location)

  // This useEffect will renders only when the rating and reviews are changes
  // It delays 1 sec to show the DataView until the DataLoaderView will render using setShowContent
  // basically here Iam using the showContent state to manage the Views
  // This is used for loading preview purpose only, for UX
  useEffect(() => {
    if (businessInfo) {
      setShowContent(false)
      const delay = setTimeout(() => {
        setShowContent(true)
      }, 1000)
      
    return ()=>clearTimeout(delay)
    }
  }, [businessInfo])

  // This useEffect renders when the user wants another headline 
  // If they click Generate New Headline Button the data fetches then it updates the headline in the context
  useEffect(() => {
    if (isSuccess && fetchData ) {
      setHeadline(fetchData.headline)
    }
  },[fetchData,isSuccess])

  // This handles the submittion for Generate New Headline button
  // refetch() recalls the getQuery from the fetchingData.jsx
  const handleClick = () => {
    if (name && location) refetch();
  } 

  // this component just shows some message before user submit the form
  const PreView = () => (
    <div className='flex flex-col justify-center items-center w-[95%] max-w-[600px] m-3 p-3 text-center'>
      <div className='bg-linear-45 from-gray-50 to-sky-100 p-3 rounded-full border border-gray-300 md:p-4'>
        <SlEnergy className='text-4xl text-sky-500 md:text-5xl animate-pulse'/>
      </div>
      <h1 className='text-xl font-semibold my-2 md:text-2xl'>Ready to analyze your business?</h1>
      <p className='text-sm text-gray-500 md:text-lg'>Enter your business information above to get started with AI-powered insights, SEO headlines, and performance metrics.</p>
  </div>
  )
  
  // This is the main Card that shows the data fetched from backend
  const DataView = () => (
      <section className={`animate-fadeSlideUpborder border-gray-200 bg-white rounded-2xl p-3 m-3 shadow-2xl/5 w-[95%] max-w-[600px] transition-all duration-700 ease-in-out
      `}>
        {/* given input */}
        <section className='border-b border-gray-100 p-3 text-center'>
          <h1 className='text-2xl font-semibold'>{name}</h1>
          <p>{location}</p>
        </section>
      
        {/* rating and reviews */}

        <section className='flex flex-col md:flex-row justify-evenly'>
          <div className='flex-1 flex flex-col justify-center items-center bg-orange-50 rounded-2xl m-3 p-3 border border-orange-200'>
            <div className='bg-linear-45 from-yellow-400 to-orange-400 p-3 rounded-full my-2'><FaStar className='text-white text-2xl' /></div>
            <p className='text-2xl text-orange-800 font-semibold'>{businessInfo.rating}</p>
            <p className='text-md text-orange-700 font-semibold'>Google Rating</p>
          </div>

          <div className='flex-1 flex flex-col justify-center items-center bg-green-50 rounded-2xl m-3 p-3 border border-green-200'>
            <div className='bg-linear-45 from-green-400 to-green-500 p-3 rounded-full my-2'><LuMessageCircle className='text-white text-2xl' /></div>
            <p className='text-2xl text-green-800 font-semibold'>{businessInfo.reviews}</p>
            <p className='text-md text-green-700 font-semibold'>Total Reviews</p>
          </div>
        </section>

        {/* headline section */}
        <section className='flex flex-col items-start bg-violet-50 rounded-2xl m-3 p-4 border border-violet-200 text-center'>
          <div className='flex items-center my-2'>
            <div className='bg-violet-500 p-2 rounded-lg mr-2'><LuSparkles className='text-white text-2xl' /></div>
            <h2 className='text-xl text-violet-800 font-bold'>AI-Generated SEO Headline</h2>
          </div>

          {/* <p className='text-lg font-semibold italic'>"{headline}"</p> */}

        
        {isFetching && (
            <div className="text-sm bg-violet-500 animate-pulse italic w-full h-[20px] my-2 rounded-lg"></div>
          )}

        {/* Used Framer-Motion for animation effect */}
          <AnimatePresence mode="wait">
            {!isFetching && headline && (
              <motion.p
                key={headline}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-semibold italic"
              >
                "{headline}"
              </motion.p>
            )}
          </AnimatePresence>


        {/* Maintained dinamically changing the icon and text of the button  */}
        <button className='flex items-center my-2 bg-white p-2 px-4 border border-gray-300 rounded-lg text-violet-800 font-semibold cursor-pointer disabled:opacity-50 mt-3' type='button' onClick={handleClick}
        disabled={isFetching}>
            <FaArrowsRotate className={`mr-2 ${isFetching ? 'animate-spin' : ''}`} />
            {isFetching ? "Generating..." : "Generate New Headline"}
          </button>
        </section>
      </section>
  )

  // simple data loading preview for the card
  const DataViewLoader = () => (
    <div className='h-[400px] w-[95%] flex items-center justify-center bg-white rounded-2xl opacity-40 border border-gray-400 max-w-[600px] animate-pulse m-3'><FaArrowsRotate className='animate-spin text-6xl text-violet-400' /></div>
  )

  
  const HandleDataView = ({showContent}) => {
    return showContent ? <DataView/> : <DataViewLoader/>
  }

  return businessInfo && headline ? <HandleDataView showContent={showContent} />:<PreView/>
  
}

export default DisplayCard