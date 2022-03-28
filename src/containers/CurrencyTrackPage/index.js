import {React,useState,createContext} from 'react'
import { CurrencyTrack } from '../../components/CurrencyTrack'
import { Footer } from '../../components/Footer'
import {Header} from "../../components/Header"
import { Input } from '../../components/Input'
import currencyService from '../../services/currencyService'
import { nanoid } from 'nanoid'

export const CurrencyTrackPage = () => {
    const [amount,setAmount] = useState(0)
    const [value, setvalue] = useState([])
    // const [currencyCom,setCurrencyComp] = useState([])
//   const CurrencyContext = createContext(null)

//   const CurrencyContextContainer = ({children}) => {
//     <CurrencyContext.Provider value={useState(0)}>
//         {children}
//     </CurrencyContext.Provider>      
//   }

//* calc currency difference with exchange rates
function calcCurrencyRate(rates) {
    const arrRates = Object.entries(rates)
    const a = arrRates.flatMap((rate) => {
        const b = rate.reduce((c,r) => { 
            // const checkIfMillionaire = 
            return {
                currency : c,
                budget : r * amount
            } 
        }) 
        return b
    })
    return a
  }
  //* Get currency data from api
  async function getCurrencyRate(e) {
      e.preventDefault()      
      if (amount == 0 || amount < 0) return 
      exchangeRates = await currencyService.loadCurrency()
      console.log(calcCurrencyRate(exchangeRates))
      setvalue(calcCurrencyRate(exchangeRates))
}
 
    //* Create a component for every currencyinfo
    const curComponent = value.map(v => {
        return ( 
            <CurrencyTrack 
             key={nanoid()}
             currency={v.currency}
             budget={Math.floor(v.budget)}
            />
        )
    })

  return (
    <div className='hero container-my'>
        <Header />
        <Input getCurrencyRate={getCurrencyRate} amount={amount} setAmount={setAmount}/> 
        {curComponent}
        <Footer />
    </div>
  )
}
