import React from 'react';
import { Navbar  } from './components/Navbar';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-10" type="email" placeholder="2jane@example.com"/>
    </div>
  )
}

export default App;
