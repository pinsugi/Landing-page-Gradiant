import "../index.css";

function Home() {
  return (
    <>
      <div className="bgc my-0 pt-10 ">
        <ul className=" navbar  flex  justify-between ">
          <li className="">
            <div className=" justify-start items-start mx-10 ml-16 font-semibold font-serif text-3xl cursor-pointer">
              {" "}
              <span className="font-light mr-3">🎧</span>
              hume{" "}
            </div>
          </li>

          <div className="   flex gap-16 text-purple-400   text-lg font-medium">
            <li className="hover:shadow-amber-800 cursor-pointer  hover:text-purple-300">
              PRODUCTS
            </li>
            <li className="cursor-pointer hover:text-purple-300 text-gray-800">
              RESEARCH
            </li>
            <li className="cursor-pointer hover:text-purple-300">COMPANY </li>
            <li className="hover:shadow-white cursor-pointer ">DOCS</li>
          </div>

          <li className=" mr-5  ">
            <button className="  hover:text-white hover:bg-purple-800     hover:ring-offset-blue-700 hover:ring-offset-2  hover:ring-0 hover:translate-x-2 shadow-2xl[0 0 10px-red]  ring ring-black ring-opacity-20  px-10 py-2  font-serif rounded-full">
              {" "}
              SIGN UP{" "}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
