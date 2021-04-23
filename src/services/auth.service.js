import axios from 'axios';



class AuthService {
 login(user) {

  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials:'include'
    })
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error.response.data.errors)
      })
  })


 
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
   
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
