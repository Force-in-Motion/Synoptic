import { handlerUtils } from "./utils.js";

const addBtn = document.getElementById("add-btn");
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");


addBtn.addEventListener("click", () => handlerUtils.onAddcityClick());
clearBtn.addEventListener("click", () => handlerUtils.clearDocument());
loadBtn.addEventListener("click", () => handlerUtils.addCard());
document.body.addEventListener("click", (e) => handlerUtils.missClickInput(e));
document.addEventListener("click", (e) => handlerUtils.deleteCityFromList(e));



