import React from "react";

function Button() {
  const Value = [
    {
      text: "AC",
      id: "clear",
    },
    {
      text: "/",
      id: "divide",
    },
    {
      text: "*",
      id: "multiply",
    },
    {
      text: "7",
      id: "seven",
    },
    {
      text: "8",
      id: "eight",
    },
    {
      text: "9",
      id: "nine",
    },
    {
      text: "-",
      id: "subtract",
    },
    {
      text: "4",
      id: "four",
    },
    {
      text: "5",
      id: "five",
    },
    {
      text: "6",
      id: "six",
    },
    {
      text: "+",
      id: "addition",
    },
    {
      text: "1",
      id: "one",
    },
    {
      text: "2",
      id: "two",
    },
    {
      text: "3",
      id: "three",
    },
    {
      text: "=",
      id: "equal",
    },
    {
      text: "0",
      id: "zero",
    },
    {
      text: ".",
      id: "decimal",
    },
  ];
  return (
    <div className="panel">
      {Value.map((value) => {
        return (
          <button key={value.id} id={value.id}>
            {value.text}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
