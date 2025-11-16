import { CardCreator } from "./card.js";

export class handlerUtils {
  static cards = document.getElementById("cards");
  static input = document.getElementById("input");
  static cityList = document.getElementById("city-list");
  static addBtn = document.getElementById("add-btn");

    static incorrectInput() {
    this.input.style.border = "1px solid red";
    this.input.placeholder = "Введите город...";
  }

  static resetInputBorderAndValue() {
    this.input.style.border = "none";
    this.input.placeholder = "Введите город...";
    this.input.value = "";
  }

  static onAddcityClick() {
    if (this.input.value.trim() === "") {
      this.incorrectInput();
    } else {
      this.addCity();
      this.resetInputBorderAndValue();
    }
  }

  static missClickInput(e) {
    if (e.target !== this.input && e.target !== this.addBtn) {
      this.resetInputBorderAndValue();
    }
  }

  static deleteCityFromList(e) {
    if (e.target.classList.contains("city")) {
      e.target.remove();
    }
  }

  static clearDocument() {
    const cardList = this.cards.querySelectorAll(".weather-card");
    cardList.forEach((card) => {
      card.remove();
    });
  }

  static clearCityList() {
    const citys = this.cityList.querySelectorAll(".city");
    citys.forEach((city) => {
      city.remove();
    });
  }

  static addCity() {
    const paragraph = document.createElement("p");
    paragraph.classList.add("city");
    paragraph.textContent = this.input.value;
    this.cityList.appendChild(paragraph);
  }

  static addCard() {
    const cities = this.cityList.querySelectorAll(".city");
    cities.forEach((citie) => {
      CardCreator.createWeatherCard(citie.textContent);
    });
    this.clearCityList();
  }
}
