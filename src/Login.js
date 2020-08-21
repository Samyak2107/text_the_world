import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css'
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer.js'

function Login() {
	const [{}, dispatch] = useStateValue();
	const signIn = () => {
       auth
       .signInWithPopup(provider)
       .then((result) => {
       	dispatch({
       		type: actionTypes.SET_USER,
       		user: result.user,
       	});
       })
       .catch((error) => alert(error.message));
	}
	return (
		<div className='login'>
			<div className='login__container'>
              <img src="https://img.icons8.com/fluent/96/000000/world-map--v2.png"
              alt="" />

            <div className="login__text">
              <h1>Sign in to Text the World</h1>
            </div> 

            <Button onClick={signIn}>
              Sign in with Google
            </Button>
			</div>
		</div>
	)
}

export default Login;