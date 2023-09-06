import React from "react";

function Home({ playClick }) {
  return (
    <div className="min-h-screen ">
      <main className="lg:px-32 lg:py-24 md:px-24 md:py-16 px-14 py-10">
        <div className="flex items-center flex-col lg:flex-row ">
          <div className=" lg:w-1/2 md:2/3 w-full">
            <img src="https://i.ibb.co/yPnR4KK/dices.png" alt="dices" />
          </div>
          <div className="lg:w-1/2 md:2/3 w-full ml-5">
            <h1 className="font-bold text-8xl">DICE GAME</h1>

            <button
              onClick={() => playClick()}
              className="bg-black text-white  text-sm font-semibold px-14 py-3 rounded mt-5 ml-1"
            >
              Play Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
