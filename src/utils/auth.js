import axios from "axios";
import Cookies from "js-cookie";
import jwt from 'jsonwebtoken'
import { handleSetDucky } from '../App'

const APP_NAME = 'roboducky'

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API_LOCAL;
} else {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API_HEROKU;
}

const setAuthHeaders = () => {
  const token = Cookies.get(`${APP_NAME}-auth-token`);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

const decodeToken = () => {
  const token = Cookies.get(`${APP_NAME}-auth-token`);
  let decodedToken
  try {
    if (token) {
      decodedToken = jwt.decode(token)
    }
  } catch (error) {
    console.log(error.message)
  }
  //console.log({decodeToken})
  return decodedToken
}

const login = async (credentials) => {
  const { username: userName, password } = credentials
  try {
    const data = await axios.post('/auth/login', {
      userName,
      password
    })
    const token = data.headers['x-authorization-token'];
    if (token) {
    //  console.log(token)
      Cookies.set(`${APP_NAME}-auth-token`, token);
      setAuthHeaders()
    }
  } catch (e) {
    console.log(e.message)
  }
}

const logout = () => {
  Cookies.remove(`${APP_NAME}-auth-token`);
}

const userContext = async () => {
  setAuthHeaders()
  try {
    const data = await axios.get('/auth/me')
    console.log("Within userContext", {data})
    return data
  } catch (error) {
    console.log(error.message)
    return false
  }
}

/* const saveConversation = async ({monolog, currentSolution, currentTags, currentMood}) => {
  console.log();
  setAuthHeaders()
  try {
    const data =  {
      convDescription: monolog,
      convSolution: currentSolution,
      convTags: currentTags,
      convMood: currentMood
    }
    await axios.post('/conversations', data)
    .then(res => {
      const id = res.data._id
      history.push(`conversation-details/${id}`) 
    })
//    return data
  } catch (error) {
    console.log(error.message)
  }
}  */

const signUp = async ({userName, userEmail, duckyName, password}) => {
  try {
    const data = {
      userName,
      userEmail,
      duckyName,
      password
    }
    const newDuckyData = await axios.post('/duckies', data)

    const token = newDuckyData.headers['x-authorization-token'];
    console.log({"newDuckyToken": token});
    if (token) {
    //  console.log(token)
      Cookies.set(`${APP_NAME}-auth-token`, token);
      setAuthHeaders()
    }
  } catch (error) {
    console.log(error.message)
  }
} 

/* const listAllConversations = async () => {
  setAuthHeaders()
  axios.get('/conversations')
  try {
    const data = await axios.get('/conversations')
//  console.log(data.data)
    return data.data
  } catch (error) {
    console.log(error.message)
  } 
}  */

const retrieveConversationById = async (id) => {
  setAuthHeaders()
  try {
    const endpointURL = `/convId/${id}`
    const data = await axios.get(endpointURL)
    console.log(data)
    return data
  } catch (error) {
    console.log(error.message)
  }
} 

export { axios as client,
        setAuthHeaders,
        login,
        signUp,
        logout,
        userContext,
        decodeToken,
//        saveConversation,
        retrieveConversationById }