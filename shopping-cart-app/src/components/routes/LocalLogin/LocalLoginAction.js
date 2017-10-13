import axios from 'axios';

class LocalLoginAction {

  loginUser(name, password) {
    axios.post('http://localhost:3001/login', {
      name: name,
      password: password
    })
    .then(res => {
    	// console.log(res);
    	window.location = '/shop/' + res.data.stores[0];
      // console.log('res.data');
    })
    .catch(err => console.log(err))
  }

}

export default LocalLoginAction;