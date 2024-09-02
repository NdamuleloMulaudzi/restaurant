import "./styles/style.css";
import Home from "./home";
import Menu from "./menu";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const content = document.querySelector("#content");
Menu();

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  Home();
});
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  Menu();
});
