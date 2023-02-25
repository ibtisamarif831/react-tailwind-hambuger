import { useState } from "react";
import "./App.css";
import classNames from "classnames";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div
        className={classNames([
          "cursor-pointer h-20 w-20 border border-white relative flex items-center justify-center",
        ])}
        onClick={() => setOpen(!open)}
      >
        <div
          className={classNames([
            "h-0.5 w-10 bg-white flex transition-all duration-500 ease-in-out",
            "before:h-0.5 before:w-10 before:bg-red-500 before:content-[''] before:-translate-y-4 before:absolute before:transition-all before:duration-1000 before:ease-in-out",
            "after:h-0.5 after:w-10 after:bg-blue-500 after:content-[''] after:translate-y-4 after:absolute after:transition-all after:duration-1000 after:ease-in-out",
            {
              "translate-x-10 bg-transparent": open,
            },

            {
              "before:rotate-45 before:-translate-x-10 before:translate-y-0":
                open,
            },
            {
              "after:-rotate-45 after:-translate-x-10 after:translate-y-0":
                open,
            },
          ])}
        ></div>
      </div>
    </div>
  );
}

export default App;
