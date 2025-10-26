import "./Main.css";

import mainImage from "../../assets/main.png";

function Main() {
  return(
    <main>
      <img src={mainImage} alt="Main image" />
      <p>React app for real-time USD exchange rates</p>
    </main>
  )
}

export default Main;