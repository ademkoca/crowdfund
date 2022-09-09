import React, { useState } from 'react';
import Card from '../components/Card';
import ModalCard from './ModalCard';
import { cards } from '../data';
import ReactDOM from 'react-dom';

const BackProject = ({ open, onClose }) => {
  //   let selectedBox = new Array(cards.length + 1).fill(false);
  //   let selectedBox = [false, false, false, false];
  //   console.log(selectedBox);
  //   console.log(selectedBox);
  //   if (!open) return null;
  //   let selected = false;
  return open
    ? ReactDOM.createPortal(
        <div className="backdrop">
          <div className="modalBackProject">
            <div className="topLine">
              <h2>Back this project</h2>
              <div onClick={onClose}>
                {/* <object
            className="iconClose"
            data="assets/svg/icon-close-modal.svg"
            type="image/svg+xml"
            alt="home"
            aria-label="iconClose"
        /> */}
                <img src="assets/svg/icon-close-modal.svg" alt="" />
              </div>
            </div>
            <p>
              {' '}
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            {cards.map((card) => (
              <ModalCard
                //   onClick={() => console.log('you clicked on ' + card.id + ' box')}
                data={card}
                key={card.id}
                open={open}
                onClose={onClose}
              />
            ))}
          </div>
        </div>,
        document.getElementById('portal')
      )
    : null;
};

export default BackProject;
