import React, { useState } from 'react';
import BackProject from '../modals/BackProject';
import ModalComplete from '../modals/ModalComplete';
import { useComplete } from '../context/Context';

const Card = (props) => {
  // const [modalOpen, setModalOpen] = useState(false);
  const card = props.data;
  // const completed = useComplete();
  return (
    <div className={`card ${card.stock === 0 ? 'disabled' : ''}`}>
      <h2 className="card-name">{card.name}</h2>
      <h2 className="card-pledge">Pledge ${card.pledge} or more</h2>
      <p>{card.desc}</p>
      <div className="card-stock">
        <span>{card.stock}</span> left
      </div>
      <button
        className="cta-reward"
        // onClick={() => {
        //   setModalOpen(true);
        // }}
      >{`${card.stock === 0 ? 'Out of Stock' : 'Select Reward'}`}</button>
      {/* <BackProject
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      {completed && <ModalComplete />} */}
    </div>
  );
};

export default Card;
