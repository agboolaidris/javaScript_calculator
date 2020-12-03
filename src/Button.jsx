import React, { useState } from "react";

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
      text: 7,
      id: "seven",
    },
    {
      text: 8,
      id: "eight",
    },
    {
      text: 9,
      id: "nine",
    },
    {
      text: "-",
      id: "subtract",
    },
    {
      text: 4,
      id: "four",
    },
    {
      text: 5,
      id: "five",
    },
    {
      text: 6,
      id: "six",
    },
    {
      text: "+",
      id: "addition",
    },
    {
      text: 1,
      id: "one",
    },
    {
      text: 2,
      id: "two",
    },
    {
      text: 3,
      id: "three",
    },
    {
      text: "=",
      id: "equal",
    },
    {
      text: 0,
      id: "zero",
    },
    {
      text: ".",
      id: "decimal",
    },
  ];
  const [previous, setprevious] = useState(null);
  const [current, setcurrent] = useState("");
  const [operator, setoperator] = useState(null);
  const [result, setresult] = useState(null);

  const handleClick = (e) => {
    const { value } = e.target;

    const num = current;

    if (current === 0 || "") {
      if (value === "+") {
        setcurrent("+");
      } else if (value === "-") {
        setcurrent("-");
      } else if (value === "*") {
        setcurrent("");
      } else if (value === "/") {
        setcurrent("");
      } else if (value === "AC") {
        setprevious("");
        setresult(0);
        setoperator("");
        setcurrent(0);
      } else {
        setcurrent(num + value);
      }
    } else {
      if (value === "AC") {
        setresult(0);
        setprevious("");
        setcurrent(0);
        setoperator("");
      }
      //operator formular for +
      else if (value === "+") {
        if (operator !== null) {
          if (operator === "+") {
            setprevious(previous + Number(current));
          } else if (operator === "-") {
            setprevious(previous - Number(-current));
          } else if (operator === "/") {
            if (current === "" || 0) {
              setprevious(previous / 1);
            } else {
              setprevious(previous / Number(current));
            }
          } else if (operator === "*") {
            if (current === "" || 0) {
              setprevious(previous * 1);
            } else {
              setprevious(previous * Number(current));
            }
          } else {
            setprevious(parseFloat(current));
          }
        } else {
          setprevious(parseFloat(current));
        }
        setcurrent("");
        setoperator("+");
      }

      //operator formular -
      else if (value === "-") {
        if (operator !== null) {
          if (operator === "+") {
            setprevious(previous + Number(current));
            setcurrent("");
          } else if (operator === "-") {
            setprevious(previous - Number(current));
            setcurrent("");
          } else if (operator === "/") {
            if (current === "" || 0) {
              setprevious(previous / 1);
            } else {
              setprevious(previous / Number(current));
            }
            setcurrent("");
          } else if (operator === "*") {
            if (current === "" || 0) {
              setprevious(previous * 1);
            } else {
              setprevious(previous * Number(current));
            }
            setcurrent(num + value);
          } else {
            setprevious(parseFloat(current));
            setcurrent("");
          }
        } else {
          setprevious(parseFloat(current));
          setcurrent("");
        }
        setoperator("-");
        setcurrent("");
      }

      //operator formular -
      else if (value === "*") {
        if (operator !== null) {
          if (operator === "+") {
            setprevious(previous + Number(current));
          } else if (operator === "-") {
            setprevious(previous - Number(current));
          } else if (operator === "/") {
            setprevious(previous / Number(current));
          } else if (operator === "*") {
            setprevious(previous * Number(current));
          } else {
            setprevious(parseFloat(current));
          }
        } else {
          setprevious(parseFloat(current));
        }
        setoperator("*");
        setcurrent("");
      }
      //operator formular -
      else if (value === "/") {
        if (operator !== null) {
          if (operator === "+") {
            setprevious(previous + Number(current));
          } else if (operator === "-") {
            setprevious(previous - Number(current));
          } else if (operator === "/") {
            setprevious(previous / Number(current));
          } else if (operator === "*") {
            setprevious(previous * Number(current));
          } else {
            setprevious(parseFloat(current));
          }
        } else {
          setprevious(parseFloat(current));
        }
        setoperator("/");
        setcurrent("");
      }

      //equal formular
      else if (value === "=") {
        if (operator === "+") {
          setresult((previous + Number(current)).toString());
        } else if (operator === "-") {
          setresult((previous - Number(current)).toString());
        } else if (operator === "/") {
          setresult((previous / Number(current)).toString());
        } else if (operator === "*") {
          setresult((previous * Number(current)).toString());
        } else {
          setresult(current.toString());
        }
      } else {
        setcurrent(num + value);
      }
    }
  };

  return (
    <>
      <div id="display">
        <div className="value">
          <span>{previous} </span>
          <span>{operator}</span>
          <span> {current}</span>
        </div>
        <div className="result">{result}</div>
      </div>
      <div className="panel">
        {Value.map((value) => {
          return (
            <button
              key={value.id}
              id={value.id}
              value={value.text}
              onClick={handleClick}
            >
              {value.text}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Button;
