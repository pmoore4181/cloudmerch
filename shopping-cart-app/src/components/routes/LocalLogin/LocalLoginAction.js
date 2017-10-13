import axios from 'axios';

class LocalLoginAction {

  loginUser(name, password) {
    axios.post('http://localhost:3001/login', {
      name: name,
      password: password
    })
    .then(res => {
    	window.location = '/user-login/' + res.data.stores[0];
      res.json();
    })
    .catch(err => console.log(err))
  }

}

export default LocalLoginAction;