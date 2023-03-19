import { string } from 'prop-types';
import React from 'react';

import './album-cover.scss';

export const AlbumCover = ({ imageSrc, imageAlt, albumName }) => {
  return (
    <div className="album-cover">
      <img className="album-cover__image" src={imageSrc} alt={imageAlt} />
      <div className="album-cover__name">
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
