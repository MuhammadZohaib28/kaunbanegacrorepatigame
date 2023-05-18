import React from "react";
import "./money.css";

const Money = () => {
  let num = 2;
  const moneySection = [
    
    { id: 15, currency: `PKR`, amount: num ** 14 },
    { id: 14, currency: `PKR`, amount: num ** 13},
    { id: 13, currency: `PKR`, amount: num ** 12 },
    { id: 12, currency: `PKR`, amount: num ** 11 },
    { id: 11, currency: `PKR`, amount: num ** 10 },
    { id: 10, currency: `PKR`, amount: num ** 9 },
    { id: 9, currency: `PKR`, amount: num ** 8 },
    { id: 8, currency: `PKR`, amount: num ** 7 },
    { id: 7, currency: `PKR`, amount: num ** 6 },
    { id: 6, currency: `PKR`, amount: num ** 5 },
    { id: 5, currency: `PKR`, amount: num ** 4 },
    { id: 4, currency: `PKR`, amount: num ** 3 },
    { id: 3, currency: `PKR`, amount: num ** 2 },
    { id: 2, currency: `PKR`, amount: num ** 1 },
    { id: 1, currency: `PKR`, amount: num ** 0 },
  ];
  return (
    <div className="moneyContainer">
      <ul className="moneyListContainer">
        {moneySection.map((items) => {
          return (
            <li className="moneyListItem">
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
