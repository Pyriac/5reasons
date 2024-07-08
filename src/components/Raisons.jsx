import { useState } from "react";
import PropTypes from "prop-types";

function Raisons({ nombre, titre, texte, valide, setValide }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [classNameBad, setClassName] = useState("pouce");
  const [classNameGood, setClassNameGood] = useState("pouce");
  const handlePositiveClick = () => {
    setValide(valide + 1);
    setIsDisabled(true);
    setClassNameGood("pouceBleu");
  };
  const handleNegativeClick = () => {
    setIsDisabled(true);
    setClassName("pouceBleu");
  };
  return (
    <div className="raison">
      <h2>
        {nombre}.{titre}
      </h2>
      <p>{texte}</p>

      <p className="argument">Argument valide ?</p>
      <button
        className={classNameBad}
        type="button"
        onClick={handleNegativeClick}
        disabled={isDisabled}
      >
        👎
      </button>
      <button
        className={classNameGood}
        type="button"
        onClick={handlePositiveClick}
        disabled={isDisabled}
      >
        👍
      </button>
    </div>
  );
}

Raisons.propTypes = {
  nombre: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
  valide: PropTypes.number.isRequired,
  setValide: PropTypes.func.isRequired,
};

export default Raisons;
