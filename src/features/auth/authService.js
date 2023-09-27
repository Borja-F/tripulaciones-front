import axios from 'axios';

const API_URL = 'http://localhost:3000';

const register = async userData => {
  console.log('service', userData);
  const res = await axios.post(API_URL + '/users/registeruser', userData);
  return res.data;
};

const login = async userData => {
  const res = await axios.post(API_URL + '/users/loginuser', userData);
  if (res.data) {
    localStorage.setItem('token', JSON.stringify(res.data.token));
    localStorage.setItem('userConnected', JSON.stringify(res.data.user));
  }
  return res.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.delete(API_URL + '/users/logout', {
    headers: {
      authorization: token,
    },
  });

  if (res.data) {
    localStorage.clear();
  }
  return res.data;
};

const getUserConnected = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.get(API_URL + '/users/getuserconnected/', {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

// const getUserById = async (_id) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const res = await axios.get(API_URL + "/users/getuserbyid/" + _id, {
//     headers: {
//       Authorization: token,
//     },
//   });

//   return res.data;
// };

const updateUser = async userData => {
  console.log(userData);
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.put(API_URL + '/users/updateuser/', userData, {
    headers: {
      authorization: token,
    },
  });
  console.log('service', res);
  return res.data;
};

const turnstileKey = async () => {
  const res = await axios.get(API_URL + '/users/turnstile');
  return res.data;
};

const imageSafePost = async image => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.post(
    'https://datapi-9xvl-dev.fl0.io/img_det',
    image,
    {
      headers: {
        authorization: token,
      },
    }
  );
  console.log('imageSafePost', res);
  return res.data;
};

const imageSafeRes = async () => {
  const res = await axios.get('https://datapi-9xvl-dev.fl0.io/img_det', {
    headers: {
      authorization: token,
    },
  });
  return res.data;
  // devolerá {
  //   "unsafe": false  //(o true)
  // }
};

const authService = {
  turnstileKey,
  register,
  login,
  logout,
  getUserConnected,
  //   getUserById,
  updateUser,
};

export default authService;
