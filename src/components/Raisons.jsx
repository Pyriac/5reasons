import { useState } from "react";
import PropTypes from "prop-types";

function Raisons({ nombre, titre, texte, valide, setValide }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [className, setClassName] = useState("pouce");
  const handlePositiveClick = () => {
    setValide(valide + 1);
    setIsDisabled(true);
    setClassName("pouceBleu");
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
        className={className}
        type="button"
        onClick={handleNegativeClick}
        disabled={isDisabled}
      >
        👎
      </button>
      <button
        className={className}
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
