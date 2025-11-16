export class RequestData {
  static api_key = "9fea0be2d914488e824173555251904";
  static baseUrl = "http://api.weatherapi.com/v1/current.json";

  static getUrl(city) {
    return `${this.baseUrl}?key=${this.api_key}&q=${city}&aqi=no`;
  }

  static async getWeaterData(city) {
    const url = RequestData.getUrl(city);

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
