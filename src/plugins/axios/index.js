import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params:{
    apikey: process.env.REACT_APP_API_KEY,
    plot: "full"  //полная информация о фильме
  }
})

export default instance