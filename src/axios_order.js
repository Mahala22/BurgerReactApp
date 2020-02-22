import axios from 'axios'


const instance = axios.create({
    baseURL:'https://reactburgerapp-d3705.firebaseio.com/',
    //headers: {'Access-Control-Allow-Origin': '*'}
})

export default instance