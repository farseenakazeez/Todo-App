 import axios from 'axios'
 const Backendinstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,

});
export default Backendinstance