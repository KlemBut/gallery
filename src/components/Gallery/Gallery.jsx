import React from 'react';

import AlbumCover from './AlbumCover';
import './gallery.scss';
export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery--top">
        <AlbumCover
          imageSrc="https://i.chzbgr.com/full/9057314560/hAC85E77B/gun-gettyimages-danbrandenburg-116436740"
          imageAlt="portait"
          albumName="Verslo portretai"
        />
        <div className="gallery--top__side">
          <AlbumCover
            imageSrc="https://i.chzbgr.com/full/9057306624/hF3563E8B/skin-dapost-ohotos-pastiphotos-depositphotos-depositphotos-depositphotos-decositphotos"
            imageAlt="portait"
            albumName="Vestuvės"
          />
          <AlbumCover
            imageSrc="https://i.chzbgr.com/full/9057310208/hF1C372FF/comp-image-is-for-previewing-purposes-only-dreamstimes-id-19982914-mathew-hayward-dreamstimecom"
            imageAlt="portait"
            albumName="Krikštynos"
          />
        </div>
      </div>
      <div className="gallery--bottom">
        <AlbumCover
          imageSrc="https://img.wattpad.com/8414cac2b87a340b4cc596b994c90af9ac6597e1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4536583348686674397a716176673d3d2d3730383635343933362e313538646438366462636434666530383632313132393039323337372e6a7067?s=fit&w=720&h=720"
          imageAlt="portait"
          albumName="Šeimos fotosesijos"
        />
        <div className="gallery--bottom__side">
          <AlbumCover
            imageSrc="https://img.wattpad.com/c034a8354684fd216b6beb9e9093c78e785af704/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f556436764c65794b6c6d615f31513d3d2d3730383635343933362e313538646438383262666330303936373535383230323531313630322e6a7067?s=fit&w=720&h=720"
            imageAlt="portait"
            albumName="Naujagimo fotosesijos"
          />
          <AlbumCover
            imageSrc="https://img.wattpad.com/6c177229654bc6db81b2c46b04fa6dfa1697d58f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4455464763796f6e4270736368673d3d2d3730383635343933362e313538646438383061386132303966623436323632383530333532302e6a7067?s=fit&w=720&h=720"
            imageAlt="portait"
            albumName="Produkto fotografija"
          />
        </div>
      </div>
    </div>
  );
};
