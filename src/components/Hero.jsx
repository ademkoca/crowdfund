import React, { useEffect, useState } from 'react';
import BackProject from '../modals/BackProject';
import ModalComplete from '../modals/ModalComplete';
import { CompletedProvider } from '../context/Context';
import { useComplete, useCompleteUpdate } from '../context/Context';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const handleClose = () => setModalOpen(false);
  const handleShow = () => setModalOpen(true);

  const handleBookmark = () => {
    setBookmark((prev) => !prev);
  };
  const completed = useComplete();
  // console.log(completed);
  // useEffect(() => {
  //   if (modalOpen) {
  //     document.body.style.overflow = 'hidden';
  //   }
  // }, [modalOpen]);
  return (
    <>
      <div className="hero">
        {/* <div className="heroImage">
          <img src="assets/img/image-hero-mobile.jpg" alt="" />
        </div> */}
        <div className="heroBox">
          <div className="logo">
            <img src="assets/svg/logo-mastercraft.svg" alt="" />
          </div>
          <div className="title">Mastercraft Bamboo Monitor Riser</div>
          <div className="description">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain
          </div>
          <div className="CTAs">
            <button
              className="cta-main"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Back this project
            </button>
            <button
              className={`cta-bookmark ${bookmark ? 'bookmarked' : ''}`}
              onClick={handleBookmark}
            >
              <img
                className="iconBookmark"
                src={`assets/svg/icon-bookmark${bookmark ? 'ed' : ''}.svg`}
                alt="bookmark"
              />
              <span>Bookmark{bookmark ? 'ed' : ''}</span>
            </button>
          </div>
        </div>
      </div>

      <BackProject
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        // completed={completed}
      />
      {completed && <ModalComplete />}
    </>
  );
};

export default Hero;
