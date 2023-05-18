import React, { useMemo, useState } from "react";
// const [earned, setEarned] = useState("$ 0");
import "./money.css";

const Money = () => {
    const [questionNumber, setQuestionNumber] = useState(1)
  let num = 2;

//   useEffect(() => {
//     questionNumber > 1 &&
//       setEarned(moneySection.find((m) => m.id === questionNumber - 1).amount);
//   }, [questionNumber, moneySection]);

  const moneySection = useMemo(
  () =>[
    
    { id: 1, currency: `PKR`, amount: num ** 0 },
    { id: 2, currency: `PKR`, amount: num ** 1 },
    { id: 3, currency: `PKR`, amount: num ** 2 },
    { id: 4, currency: `PKR`, amount: num ** 3 },
    { id: 5, currency: `PKR`, amount: num ** 4 },
    { id: 6, currency: `PKR`, amount: num ** 5 },
    { id: 7, currency: `PKR`, amount: num ** 6 },
    { id: 8, currency: `PKR`, amount: num ** 7 },
    { id: 9, currency: `PKR`, amount: num ** 8 },
    { id: 10, currency: `PKR`, amount: num ** 9 },
    { id: 11, currency: `PKR`, amount: num ** 10 },
    { id: 12, currency: `PKR`, amount: num ** 11 },
    { id: 13, currency: `PKR`, amount: num ** 12 },
    { id: 14, currency: `PKR`, amount: num ** 13 },
    { id: 15, currency: `PKR`, amount: num ** 14 },
  ].reverse(), [] );
  return (
    <div className="moneyContainer">
      <ul className="moneyListContainer">
        {moneySection.map((items) => {
          return (
            <li className={questionNumber == items.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemQuestion">QNO {items.id}</span>
              <span className="moenyListItemMoney">{items.currency} {items.amount}000</span>
            </li>
          );
        })}
       
      </ul>
    </div>
  );
};

export default Money;
