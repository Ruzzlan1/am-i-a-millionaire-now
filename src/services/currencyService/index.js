class CurrencyService {
  #data;
  async loadCurrency() {
    try {
      const response = await fetch(
        "https://api.exchangerate.host/latest/?base=USD"
      );
      this.#data = await response.json();
      return this.#data.rates;
    } catch (error) {
      console.error(error);
    }
  }
  async loadCountryData() {
    try {
    } catch (error) {
      console.error(error);
    }
  }
}
export default new CurrencyService();
