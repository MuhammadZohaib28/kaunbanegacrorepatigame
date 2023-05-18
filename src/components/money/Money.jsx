import React from 'react'
import './money.css'

const Money = () => {
    let num = 2;
  return (
    <div className='moneyContainer'>
        <ul className="moneyListContainer">
            <li className="moneyListItem">PKR {num**14}000</li>
            <li className="moneyListItem">PKR {num**13}000</li>
            <li className="moneyListItem">PKR {num**12}000</li>
            <li className="moneyListItem">PKR {num**11}000</li>
            <li className="moneyListItem">PKR {num**10}000</li>
            <li className="moneyListItem">PKR {num**9}000</li>
            <li className="moneyListItem">PKR {num**8}000</li>
            <li className="moneyListItem">PKR {num**7}000</li>
            <li className="moneyListItem">PKR {num**6}000</li>
            <li className="moneyListItem">PKR {num**5}000</li>
            <li className="moneyListItem">PKR {num**4}000</li>
            <li className="moneyListItem">PKR {num**3}000</li>
            <li className="moneyListItem">PKR {num**2}000</li>
            <li className="moneyListItem">PKR {num**1}000</li>
            <li className="moneyListItem">PKR {num**0}000</li>
        </ul>
    </div>
  )
}

export default Money