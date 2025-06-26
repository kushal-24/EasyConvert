/**
Basically, this hook:
-->takes a currency parameter from us
-->Fetches latest currency exchange rates for it using a public API(for ex all conversions from inr)
-->provides us the data to use it in components
 */
import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const[data,setData]=useState("")
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]));
        console.log(data);
    },[currency])
    
    console.log(data);
    return data;
}

export default useCurrencyInfo;
