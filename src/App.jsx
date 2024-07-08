import { useState } from "react";
import "./App.css";
import CVimg from "./assets/CVimg.png";
import Raisons from "./components/Raisons";
import raisons from "./data/5raisons";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [valide, setValide] = useState(0);
  return (
    <main>
      <div className="header">
        <Header />
      </div>
      <div className="cvphoto">
        <img className="cyriac" src={CVimg} alt="" />
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
      <div className="circle6"></div>
      <div className="circle7"></div>

      <div className="reasons">
        {raisons.map((raison) => (
          <Raisons
            key={raison.id}
            nombre={raison.id}
            titre={raison.titre}
            texte={raison.texte}
            valide={valide}
            setValide={setValide}
          />
        ))}

        {valide < 3 ? (
          ""
        ) : (
          <p className="raison">
            Vous avez validé {valide}/5 des mes arguments. On se rencontre ? Je
            suis disponible du Lundi au Vendredi de 9h à 17h30
          </p>
        )}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}

export default App;
