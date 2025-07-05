import { createContext, useContext, useState } from 'react'

// created the context all business Data storing and accessing for simpler and clean code 
// I have exported both Provider and context, The provider is used in App.jsx to work all over the components
const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
    // defined for reading the name and location for clean code
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
  
    // here businessInfo and headline are seperated for UI/UX purposes like loading preview etc...
    const [businessInfo, setBusinessInfo] = useState({
      rating: null,
      reviews:null
    })

  const [headline, setHeadline] = useState("")
  
  return (
      <BusinessContext.Provider value={{
          name,setName,location,setLocation,businessInfo,setBusinessInfo,headline,setHeadline
    }}>
          {children} 
    </BusinessContext.Provider>
  )
}

export const UseBusiness = () => useContext(BusinessContext)