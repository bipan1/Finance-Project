import React from "react";

interface Props {
    companyName : string;
    ticker : string;
    price : number;
}

const Card : React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row'>
        <img alt="Movie" src='fsdfsd'/>
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum deleniti minus nisi laborum ullam in dignissimos facere, 
            voluptatum illum cumque voluptates obcaecati qui ad, omnis amet? Dolorem ad iure ea?</p>
    </div>
  )
}

export default Card