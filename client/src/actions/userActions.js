import axios from 'axios';

const URL = process.env.REACT_APP_URL;

// Create Redux action creators
export const setUser = (payload) => ({ type: "SET_USER", payload });
export const logUserOut = () => ({ type: "LOG_OUT" });

// Create Redux methods
// log in
export const fetchUser = (userInfo) => dispatch => {
  axios.post(`${URL}/auth/login`, userInfo)
  .then((res) =>{
    //console.log(res.data);
    

    localStorage.setItem("token", res.data.token)
    dispatch(setUser(res.data.user))
  })
}

// register
export const signUserUp = (userInfo) => dispatch => {
  axios.post(`${URL}/auth/register`, userInfo)
  .then((res) =>{
    console.log(res.data);

    localStorage.setItem("token", res.data.token)
    dispatch(setUser(res.data.user))
  })
}

// auto login if token exists
// export const autoLogin = () => dispatch => {
//   axios.post(`${URL}/auth/autologin`, { headers: {
//     "x-auth-token": `${localStorage.getItem("token")}`,
//   }})
//   .then((res) =>{
//     console.log(res.data);

//     localStorage.setItem("token", res.data.token)
//     dispatch(setUser(res.data.user))
//   })
// }