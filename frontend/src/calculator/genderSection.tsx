import React, { FC } from "react";
import { useState } from "react";

interface Props {
  onMessage: (message: string) => void;
}

const GenderSection: FC<Props> = ({ onMessage }) => {
  const [gender, setGender] = useState<string>("M"); //Gender is man by default

  function onChangeGenderM(event: React.ChangeEvent<HTMLInputElement>): void {
    setGender("M");
  }
  function onChangeGenderF(event: React.ChangeEvent<HTMLInputElement>): void {
    setGender("F");
  }
  function nextQuestion(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    onMessage(gender);
  }

  return (
    <div className="shadow-[0px_0px_30px_10px_#dd6b20] rounded-2xl p-12 flex flex-col align-middle">
      <h3 className="text-2xl mb-8">Choose your in born gender</h3>
      <div className="flex flex-row items-center justify-center">
        <label
          className={`flex items-center space-x-2 p-2 border-2 rounded-full mr-6 ${
            gender === "M" ? "border-orange-600" : "border-gray-400"
          }`}
        >
          <img src="/assets/310276.svg" className="h-12 w-12" />
          <input
            type="checkbox"
            onChange={onChangeGenderM}
            className="rounded-full border-gray-400 appearance-none w-6 h-6 leading-6 absolute"
          />
        </label>

        <label
          className={`flex items-center space-x-2 p-2 border-2 rounded-full ${
            gender === "F" ? "border-orange-600" : "border-gray-400"
          }`}
        >
          <img src="assets\girl-woman.svg" className="h-12 w-12" />
          <input
            type="checkbox"
            onChange={onChangeGenderF}
            className="rounded-full border-gray-400 appearance-none w-6 h-6 leading-6 absolute"
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button
          onClick={nextQuestion}
          className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white
                 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 "
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
            Go to next question
          </span>
        </button>
      </div>
    </div>
  );
};
export default React.memo(GenderSection);
