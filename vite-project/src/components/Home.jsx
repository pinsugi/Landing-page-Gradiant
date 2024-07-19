import "../index.css";

function Home() {
  return (
    <>
      <div className="bgc my-0 pt-10 ">
        <ul className=" navbar  flex  justify-between ">
          <li className="">
            <div className=" justify-start items-start mx-10 font-semibold font-serif text-3xl">
              {" "}
              hume{" "}
            </div>
          </li>

          <div className="   flex gap-16 text-gray-800 ">
            <li>PRODUCTS</li>
            <li>RESEARCH</li>
            <li>COMPANY </li>
            <li>DOCS</li>
          </div>

          <li className=" mr-5  ">
            <button className="  hover:text-white hover:bg-purple-900 hover:ring-0 hover:translate-x-2 shadow-2xl[0 0 10px-red]  ring ring-black ring-opacity-20  px-10 py-2  font-serif rounded-full">
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
