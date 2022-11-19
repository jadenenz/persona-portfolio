import Header from "./components/header/Header"
import Card from "./components/card/Card"
import "./app.css"
import battleshipImg from "./images/battleship.png"
import waldoImg from "./images/waldo.png"
import mapleImg from "./images/maplestory.png"
import shopImg from "./images/shop.png"
import twitterImg from "./images/twitter.png"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="card__wrapper">
        <div className="card-container-title">My work</div>
        <div className="card-container">
          <Card
            projectName="Where's Waldo"
            img={waldoImg}
            projectDescription={
              "Where's Waldo project made using React and Firebase"
            }
          />
          <Card
            projectName="Battleship"
            img={battleshipImg}
            projectDescription={"Battleship game webapp made using React"}
          />
          <Card
            projectName="Maplestory Memory"
            img={mapleImg}
            projectDescription={
              "Maplestory themed memory game made using React"
            }
          />
          <Card
            projectName="Twitter"
            img={twitterImg}
            projectDescription={"Twitter clone made using firebase and React"}
          />
          <Card
            projectName="Magic Angels Shop"
            img={shopImg}
            projectDescription={"Digital shopfront made using React"}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
