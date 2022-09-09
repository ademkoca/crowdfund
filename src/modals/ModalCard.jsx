import React, { useState } from 'react';
import { useCompleteUpdate } from '../context/Context';

const ModalCard = ({ open, onClose, ...props }) => {
  const toggleCompletedUpdate = useCompleteUpdate();
  const card = props.data;
  const [pledgeInput, setPledgeInput] = useState(null);
  const [selected, setSelected] = useState(false);

  const handleInput = (e) => {
    e.stopPropagation();
  };
  const handleSubmit = (e) => {
    e.stopPropagation();
    if (pledgeInput !== null) {
      if (pledgeInput < card.pledge)
        alert('You must pledge $' + card.pledge + ' or more!');
      else {
        toggleCompletedUpdate();
        onClose();
      }
    } else alert('You must enter a value');
  };
  return (
    <>
      <div
        onClick={() => setSelected((current) => !current)}
        className={`modal-card ${card.stock === 0 ? 'disabled' : ''} ${
          selected && card.stock !== 0 ? 'selected' : ''
        }`}
      >
        <div className='card-header-stock'>
          <div className='card-header'>
            <div className="topPart">
              {selected && card.stock !== 0 && (
                <input type="radio" defaultChecked />
              )}
              <div className="titles">
                <h2 className="modal-card-name">{card.name}</h2>
                <h2 className="card-pledge">Pledge ${card.pledge} or more</h2>
              </div>
            </div>
            <p>{card.desc}</p>
          </div>
          <div className="card-stock">
            <span>{card.stock}</span> left
          </div>
        </div>
        <div
          className={`hiddenPart ${selected && card.stock !== 0 ? 'show' : ''}`}
        >
          <h4>Enter your pledge</h4>
          <div className="bottomPart">
            <div
              className="input"
              onChange={(e) => setPledgeInput(e.target.value)}
              onClick={(e) => {
                handleInput(e);
              }}
            >
              $ <input type="" placeholder={card.pledge} />
            </div>
            <button className="cta-reward" onClick={handleSubmit}>
              {`${card.stock === 0 ? 'Out of Stock' : 'Continue'}`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
