import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL:'http://123.207.32.32:8000',
    // baseURL:'http://adi-v3.dev',
    timeout:5000
  });

  instance.interceptors.request.use(config => {
    return config;
  }, error => {})

  instance.interceptors.response.use(res => {
    return res.data
  }, error => {})

  return instance(config)
}
