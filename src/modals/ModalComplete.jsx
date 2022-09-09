import React from 'react';
import { useCompleteUpdate } from '../context/Context';

const ModalComplete = () => {
  //   const completed = useComplete();
  const toggleCompletedUpdate = useCompleteUpdate();
  return (
    <div className="backdrop">
      <div className="modalComplete">
        <img src="assets/svg/icon-check.svg" alt="" />
        <h2>Thanks for your support</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.{' '}
        </p>
        <button className="cta-gotit" onClick={toggleCompletedUpdate}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ModalComplete;
