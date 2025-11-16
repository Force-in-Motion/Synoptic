import { RequestData } from "./api.js";

export class CardCreator {
  static cards = document.getElementById("cards");

  static makeRow(label, value) {
    const row = document.createElement("div");
    row.classList.add("row");

    const span = document.createElement("span");
    span.textContent = label;

    const strong = document.createElement("strong");
    strong.textContent = value;

    row.appendChild(span);
    row.appendChild(strong);

    return row;
  }

  static async createWeatherCard(city) {
    
    const api = await RequestData.getWeaterData(city);

    const data = api.current;

    const card = document.createElement("div");
    card.classList.add("weather-card");

    if (!data.is_day) card.classList.add("night");

    // HEADER
    const header = document.createElement("div");
    header.classList.add("weather-header");

    const icon = document.createElement("img");
    icon.classList.add("weather-icon");
    icon.src = "https:" + data.condition.icon;
    icon.alt = "weather icon";

    const tempBox = document.createElement("div");

    const temp = document.createElement("h2");
    temp.textContent = `${data.temp_c}°C`;

    const condition = document.createElement("p");
    condition.textContent = data.condition.text;

    tempBox.appendChild(temp);
    tempBox.appendChild(condition);

    header.appendChild(icon);
    header.appendChild(tempBox);

    // INFO
    const info = document.createElement("div");
    info.classList.add("weather-info");

    info.appendChild(this.makeRow("Ощущается как:", `${data.feelslike_c}°C`));
    info.appendChild(this.makeRow("Влажность:", `${data.humidity}%`));
    info.appendChild(this.makeRow("Облачность:", `${data.cloud}%`));
    info.appendChild(this.makeRow("Осадки:", `${data.precip_mm} мм`));
    info.appendChild(
      this.makeRow("Ветер:", `${data.wind_kph} км/ч ${data.wind_dir}`)
    );
    info.appendChild(this.makeRow("Порывы:", `${data.gust_kph} км/ч`));
    info.appendChild(this.makeRow("Видимость:", `${data.vis_km} км`));
    info.appendChild(this.makeRow("Давление:", `${data.pressure_mb} mb`));

    const updated = document.createElement("p");
    updated.classList.add("updated");
    updated.textContent = `Обновлено: ${data.last_updated}`;

    card.appendChild(header);
    card.appendChild(info);
    card.appendChild(updated);

    this.cards.appendChild(card);
  }
}
