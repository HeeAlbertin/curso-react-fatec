import axios from 'axios'

export default axios.create(
  {
    baseURL: 'http://www.recipepuppy.com/api',
    timeout: 15000
  }
)
