import React from 'react';
import { Link } from 'react-router-dom';
import { LogoutButton } from '../components/Authentication/LogoutButton';

const HomePage = () => {
  return (
   <div>
     home
     <Link to="/changepassword">Change Password</Link>
     <div>
     <LogoutButton />
     </div>
   </div>
  )
}

export default HomePage;