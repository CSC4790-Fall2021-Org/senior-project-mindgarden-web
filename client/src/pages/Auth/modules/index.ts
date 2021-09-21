import { resolve } from "dns";
import firebase from "firebase";
import { auth } from "../../../config/firebase";

export const SignInWithSocialMedia = (provider: firebase.auth.OAuthProvider) => 
  new Promise<firebase.auth.UserCredential>((resolve, reject) => {
    auth.signInWithPopup(provider)
    .then(result =>{ 
      console.log(result.additionalUserInfo?.isNewUser)
      resolve(result)
    })
    .catch(error => reject(error));
  })

  var provider = new firebase.auth.OAuthProvider('apple.com');
  provider.addScope('email');
  provider.addScope('name');
  