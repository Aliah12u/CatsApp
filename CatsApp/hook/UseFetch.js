import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UseFetch = () => {
    
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const fetchData = async () => {

        setIsLoading(true)
        try{
            const response = await axios.get('http://192.168.100.244:3000/api/products/')
            setData(response.data)
            setIsLoading(false)
            console.log("success")
        }
        catch (error) {
            setError(error)
            console.log(error)
        }
    }
    useEffect( ()=>{
        fetchData();
        console.log("run")
    },[])

    const refetch= ()=>{
        setIsLoading(true);
        fetchData();
    }
    
  //return{data,isLoading,error,refetch}
  return{data,isLoading,error}
}

export default UseFetch
