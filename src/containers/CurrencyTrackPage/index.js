import { React, useState, useEffect } from "react";
import { CurrencyTrack } from "../../components/CurrencyTrack";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import currencyService from "../../services/currencyService";
import { nanoid } from "nanoid";
import {round} from 'reliable-round'
import { CurrencyContext } from "../../helpers/context";
import { useQuery } from "react-query";

export const CurrencyTrackPage = () => {
  //* amount of money(take in input)
  const [amount, setAmount] = useState(0);

  //* calc currency difference with exchange rates
   function calcCurrencyRate(rates) {
    const arrRates = Object.entries(rates);
    return arrRates.flatMap((rate) => {
      return rate.reduce((c, r) => {
        //* returning sorted data to display
        return {
          currency: c,
          budget: r * amount,
        };
      });
    });
  }
  //* For context api
  const value = {
    amount,
    setAmount,
  };

  // * Get Country name from rest-countries api

  
  //* Get currency data from api 
  async function loadCurrency() {
    const res = await fetch(
      "https://api.exchangerate.host/latest/?base=USD"
    );
    return res.json()
  }
  //* Get country names from currency name
  // async function loadCountry(currency) {
  //   const res = await fetch(`https://restcountries.com/v2/currency/${currency}`)
  //   const data = await res.json()
  //   console.log(data[0]?.name)
  //   if(!data) return
  //   return data[0]?.name
  // }
  
  // useEffect(() => {
  //    loadCountry("AZN")
  // }, [])
  
  const { data, isLoading,isError } = useQuery("exchanges", loadCurrency);
    

  const getCurrencyRate = event => {
    event.preventDefault()
  }
  //* Sort exchange rates ascending order
  if(isLoading) {
    return (
      <h3>Loading ...</h3>
    )
  }
  if(isError) {
    return (
      <h2 className="text-red">Error...</h2>
    )
  }
  
  //* Create a component for every currencyinfo
  const curComponent = calcCurrencyRate(data.rates).map((v) => {
    if(v.budget < 1000000) return
    return (
      <CurrencyTrack
        key={nanoid()}
        currency={v.currency}
        budget={round(v.budget)}
      />
    );
  });

  return (
    <div className="hero container-my">
      <CurrencyContext.Provider value={value}>
        <Header />
        <Input getCurrencyRate={getCurrencyRate}/>
        {curComponent}
        <Footer />
      </CurrencyContext.Provider>
    </div>
  );
};
