import { useState } from "react";
export interface INavbarProps {
  isLoggedIn: Boolean;
}
export const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log(props.isLoggedIn);
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-darkWhite p-3 ">
        <a href="/">
          <div className="inline-flex items-center p-2 mr-4  lg:ml-32">
            <img
              src={"/images/mgLogo.svg"}
              alt="rich"
              className="w-8 mr-2 mb-2"
            />
            <span className="text-2xl text-gray-700  font-mada font-bold uppercase tracking-wide padding">
              MindGarden
            </span>
          </div>
        </a>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto mr-32">
            <a href="/">
              <div className="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded text-gray-700 font-mada font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                🏠 Home
              </div>
            </a>
            <a href="/">
              <div className="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded text-gray-700 font-bold font-sans items-center justify-center hover:bg-green-600 hover:text-white">
                {props.isLoggedIn ? "🪴 Garden" : "About"}
              </div>
            </a>
            <a href={props.isLoggedIn ? "/store" : "/"}>
              <div className="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded text-gray-700 items-center justify-center hover:bg-green-600 hover:text-white font-mada font-bold">
                {props.isLoggedIn ? "🌻Store " : "🖊 Blog"}
              </div>
            </a>
            <a href={props.isLoggedIn ? "/profile" : "/"}>
              <div className="lg:inline-flex lg:w-auto w-full px-6 py-2 rounded text-gray-700 font-mada font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                {props.isLoggedIn ? "🙆‍♂️ Profile" : "Login/Register"}
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
