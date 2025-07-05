import { useMutation,useQuery } from "@tanstack/react-query";
import axios from "axios"

// Here I have used react-Query to make fast and clear interations with the backend
// Unlike the traditions fetching this is simpler as It will takecare of the status of data
// PostBusinessDetails used to send the name and location to the backend
// GenerateHeadline used to get random headline from the backend the name and location are sent through html queries
// here I have used the axios for fetching data

const PostBusinessDetails = () => {
    return useMutation({
        // this function runs the promise that runs post method
        mutationFn: async (name, location) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const body = {
                name,
                location
            }
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/business-data`, body)

            if (response.data.error) {
                throw new Error(response.data.error)
            }
            
            return response.data
        },
        // When error occures it sends the error message when accessed 
        onError: (error) => {
            return error
        }
    })
}

const GenerateHeadline = (name,location) => {
    return useQuery({
        // In react query caches the fetched data and when ever it reloads the pages it does not always fetches the data
        queryKey: ["headline",name,location],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/regenerate-headline?name=${name}&location=${location}`)
            
            return response.data
        },
        // I used enable and retry as false to not to run immediately when i called
        enabled: false,
        retry:false,
    })
}


export {PostBusinessDetails,GenerateHeadline}