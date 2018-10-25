import axios from 'axios'

interface IHeader {
  'Accept': string
  'Content-Type': string
}

export const fetchData = (method: string, headers: IHeader, parameter: any, url: string, callback: (response: any, error: any, status: any, responseHeader: any) => void) => {
  try {
    const instance = axios.create({
      baseURL: 'http://192.168.2.143/prevent-app-api/public/api/',
      timeout: 1000,
      headers
    })

    let config: any = {}
    if (method === 'GET') {
      config = {
        url,
        method,
        params: parameter
      }
    } else if (method === 'POST') {
      config = {
        url,
        method,
        data: parameter
      }
    }

    // console.log('URL :: '+ url)
    // console.log('BODY :: '+ JSON.stringify(parameter))
    // console.log('Header :: '+ JSON.stringify(headers))
    // console.log('apiData :: '+ JSON.stringify(config))

    let status: any
    let resHeaders: any
    let data: any

    instance(config)
    .then((response) => {
      // console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);

      status = response.status
      resHeaders = response.headers
      data = response.data
      if (status === 200) {
        callback(data, null, status, resHeaders)
      } else {
        callback(null, data, status, resHeaders)
      }
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js

        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error

        // console.log('Error', error.message);
      }
      // console.log(error.config);
      callback(null, error, null, null)
    })
  } catch (error) {
    // console.log('API call error');
    callback(null, error, null, null)
  }
}
