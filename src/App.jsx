import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characterallowed, setCharacterallowed] = useState(false);
  const [password, setpassword] = useState("");
  const selectpass = useRef(null);
  const copypassword = () => {
    window.navigator.clipboard.writeText(password)
    selectpass.current?.select()
  }
  const generatepassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIKJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "0123456789";
    }
    if (characterallowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallowed, characterallowed]);

  useEffect(() => {
    generatepassword()
  }, [length, numberallowed, characterallowed])

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border w-[500px] rounded-xl p-4 shadow-2xl bg-gray-800">
          <h1 className="text-gray-200 mb-5 text-center text-3xl">
            Password Generator
          </h1>
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={password}
              readOnly
              placeholder="password"
              className="rounded-xl p-2 mb-2 w-full text-orange-600"
              ref={selectpass}
            ></input>
            <button onClick={copypassword} className="bg-blue-500 w-[100px] p-2 ml-2 rounded-xl text-white">
              Copy
            </button>
          </div>
          <div className="flex flex-col mb-1 mt-3 p-2">
            <label className="text-white" htmlFor="length">
              Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            ></input>
          </div>
          <div className="mb-2 p-2">
            <input
              type="checkbox"
              className="mr-2"
              defaultChecked={numberallowed}
              onChange={() => {
                setNumberallowed((prev) => !prev);
              }}
            />
            <label className="text-white" htmlFor="number">
              Number
            </label>
          </div>
          <div className="p-2">
            <input
              type="checkbox"
              className="mr-2"
              defaultChecked={characterallowed}
              onChange={() => setCharacterallowed((prev) => !prev)}
            />
            <label className="text-white" htmlFor="symbol">
              Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
