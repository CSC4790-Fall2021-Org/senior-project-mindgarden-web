import React from 'react';
import { Navbar  } from './components/Navbar';
import { RegisterBox  } from './Authentication/RegisterBox';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-darkWhite h-screen flex flex-col justify-center items-center w-screen">
            <RegisterBox/>
      </div>
    </div>
  )
}

export default App;
