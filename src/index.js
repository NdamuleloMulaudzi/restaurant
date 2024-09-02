import "./styles/style.css";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const content = document.querySelector("#content");
Home();

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  Home();
});
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  Menu();
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = ``;
  Contact();
});
