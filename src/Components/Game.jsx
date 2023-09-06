import React, { useState } from "react";
import "./Game.css";
const imgArr = [
  "https://i.ibb.co/pQBh98Z/dice-1.png",
  "https://i.ibb.co/0YRLsFY/dice-2.png",
  "https://i.ibb.co/MhkMcdr/dice-3.png",
  "https://i.ibb.co/kGCctjJ/dice-4.png",
  "https://i.ibb.co/7kfHsQX/dice-5.png",
  "https://i.ibb.co/GThz8vM/dice-6.png",
];
const choiceArr = [1, 2, 3, 4, 5, 6];

function random() {
  return Math.floor(Math.random() * 60);
}
function Game() {
  const [image, setImage] = useState(imgArr[1]);
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState(0);
  const [showRules, setShowRules] = useState(false);

  function rollDice() {
    const randomNum = random();
    let num = Math.floor(randomNum / 10);
    if (choice > 0)
      if (choice === num + 1) {
        setScore((prev) => prev + choice);
      } else {
        setScore((prev) => prev - 1);
      }
    setChoice(0);
    console.log(num + 1);

    setImage(imgArr[num]);
  }

  return (
    <div className="">
      <div id="main" className="p-10 min-h-screen">
        <div
          id="head"
          className="flex lg:justify-between sm:justify-between flex-wrap-reverse items-center"
        >
          <div className="text-center">
            <h1 className="text-5xl font-semibold mb-3">{score}</h1>
            <h2 className="text-xl font-medium">Total Score</h2>
          </div>
          <div className="text-right">
            <ul>
              {choiceArr.map((item, i) => (
                <li
                  className={`${item === choice ? "active" : null}`}
                  key={i}
                  onClick={() => {
                    setChoice(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <h1 className="text-lg font-bold mt-4">Select Number</h1>
          </div>
        </div>
        <div id="content" className="m-10">
          <div className="flex flex-col w-60 mx-auto text-center gap-4 mt-10">
            <div className="">
              <img
                className="cursor-pointer active:animate-spin"
                src={image}
                onClick={() => rollDice()}
                alt=""
              />
            </div>
            <h2 className="text-xl font-medium">Click on Dice to roll</h2>
            <button
              onClick={() => setScore(0)}
              className="border border-black text-black  text-sm font-semibold px-14 py-3 rounded mt-5 ml-1"
            >
              Reset Score
            </button>
            <button
              onClick={() => {
                setShowRules((prev) => !prev);
              }}
              className="bg-black text-white  text-sm font-semibold px-14 py-3 rounded mt-5 ml-1"
            >
              {showRules ? "Hide Rules" : "Show Rules"}
            </button>
          </div>
        </div>
        {showRules ? (
          <div
            id="rules"
            className="border w-2/5 font-medium mx-auto flex flex-col gap-4 p-5 bg-zinc-200"
          >
            <h1 className="text-xl">How to play dice game</h1>
            <p>Select any number</p>
            <p> Click on dice image</p>
            <p>
              After click on dice if selected number is equal to dice number you
              will get same point as dice if you get wrong guess then 1 point
              will be dedcuted{" "}
            </p>
            <p>
              Tip: Observing dice number patterns without pre-selecting any
              specific numbers can increase the chances of making accurate
              predictions.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Game;
