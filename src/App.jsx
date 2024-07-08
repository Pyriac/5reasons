import { useState } from "react";
import "./App.css";
import Raisons from "./components/Raisons";
import raisons from "./data/5raisons";
import Header from "./components/Header";
function App() {
  const [valide, setValide] = useState(0);
  return (
    <main>
      <div className="header">
        <Header />
      </div>
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
      </div>
      <p>
        {valide < 3
          ? ""
          : ` Vous avez validé ${valide}/5 des mes arguments. On se rencontre ? Je suis disponible du Lundi au Vendredi de 9h à 17h30`}
      </p>
    </main>
  );
}

export default App;
