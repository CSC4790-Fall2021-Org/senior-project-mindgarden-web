import React from 'react'
import { useHistory } from 'react-router'
import { auth } from '../../config/firebase';
import logging from '../../config/logging';

export const LogoutButton: React.FunctionComponent = props => {
  const history = useHistory(); 

  const Logout = () => {
    auth.signOut()
    .then(() => history.push('/login'))
    .catch(error => logging.error(error));
  }

  return (
    <div className="text-center">
        <button onClick={()=>Logout()}>
          Logout
        </button>
    </div>
  )
}
