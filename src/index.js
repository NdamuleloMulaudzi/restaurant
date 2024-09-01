import "./styles/style.css";
import Home from "./home";

const homebtn = document.querySelector("#home");
Home();

homebtn.addEventListener("click", () => {
  Home();
});
