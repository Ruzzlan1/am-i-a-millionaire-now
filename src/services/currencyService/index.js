class CurrencyService  {

 async getAllCurrencies() {
     
 }

 async loadCurrency() {
     try {
     const response = await fetch('https://api.exchangerate.host/latest/?base=USD')
     const data = await response.json()
     console.log(data)    
     } catch (error) {
      console.error(error)
     }
     
 }
}
export default new CurrencyService()
