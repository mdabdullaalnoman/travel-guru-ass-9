import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import {useHistory,useLocation} from 'react-router-dom'
import '../../App.css';
import { Button,Image } from 'react-bootstrap';
import google from '../../Image/Icon/google.png';
import fb from '../../Image/Icon/fb.png';
import {Link} from 'react-router-dom'

const LogIn = () => {
    let [loggedInUser , setLoggedInUser] = useContext(UserContext);
    
   const history = useHistory();
   const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };

if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
}
 
    const handelGoogleSingIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
       

        firebase.auth().signInWithPopup(provider).then(function(result) {
           const {displayName,email}= result.user;
         
          
           const signInUser = {
             isSignIn:true,
             name:displayName,
             email:email,
            
           
            };
          
            setLoggedInUser(signInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    const handelFacebookSignIn = () =>{
        var fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbprovider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }

    const handelEmailSingIn = ()=> {
      
    }

    const handelSubmit = (e) => {
     
      if(loggedInUser.email && e.target.name==='password'){
        
      }
    }
    const handleChange = (e) =>{
      let isFormValid = true;

      if(e.target.name === 'email'){
       isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        
      }
      if(e.target.name === 'password'){
        const isPassWordVaild =e.target.value.length >4;
        const passwordHasNumber = /\d{1}/.test(e.target.value)
         isFormValid = (isPassWordVaild && passwordHasNumber);
      }
      if(isFormValid){
        let newUserInfo = {...loggedInUser};
        newUserInfo [e.target.value]= [e.target.value];
        setLoggedInUser(newUserInfo);
      }
    }
    return (
        <div className="App">
            <h4>Create a account</h4>
        

            <from onSubmit={handelSubmit}>
            <input type="text" onBlur={handleChange} name="first" placeholder="first name" id=""/><br/>
            <input type="text" onBlur={handleChange}  name="last" placeholder="last name" id=""/><br/>
            <input type="text" onBlur={handleChange} name="email" required placeholder="email"/>
            <br/>
            <input type="password" onBlur={handleChange}  name="password" required placeholder="password"/>
            <br/>
            <input  size="sm" type="submit" value="Create account"/><br/><br/>
            <input type="submit" value="Already have an account"/>
            <Link to='/logi'><a href="">LogIn</a></Link>
            

          </from>
          <br/><br/><br/>
          <br/><br/><br/><br/><br/>
            <div>
            <Button onClick={handelGoogleSingIn} variant="outline-danger"> <Image style={{height:"25px" ,width:"25px",marginTop:"10px"  }} src={google} roundedCircle />  Continue with google</Button>
             <br/><br/>
             <Button onClick={handelFacebookSignIn} variant="success"><Image style={{height:"25px" ,width:"25px" ,marginTop:"10px" }} src={fb} roundedCircle /> Continue with facebook</Button>
             <br/><br/>
             <Button onClick={handelEmailSingIn} variant="primary">Continue with email</Button>
            </div>
        </div>
    );
};

export default LogIn;