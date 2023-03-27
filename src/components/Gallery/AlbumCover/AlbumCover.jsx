import { string } from 'prop-types';
import React,{useContext} from 'react';

import './album-cover.scss';
import { UserContext } from '../../../App';
export const AlbumCover = ({ imageSrc, imageAlt, albumName }) => {
  const {setIsModalVisible} = useContext(UserContext)

  const handleModalOpen = () => {
    setIsModalVisible(true);
    document.body.style.overflow = 'hidden';
  }
  return (
    <div className="album-cover">
      <img className="album-cover__image" src={imageSrc} alt={imageAlt} />
      <div className="album-cover__name" onClick={handleModalOpen}>
        <span>{albumName}</span>
      </div>
    </div>
  );
};

AlbumCover.propTypes = {
  imageSrc: string.isRequired,
  imageAlt: string.isRequired,
  albumName: string
};
