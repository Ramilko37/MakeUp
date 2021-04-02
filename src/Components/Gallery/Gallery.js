import React from "react";
import images from "../../utils/images";
import { GalleryContainer, GalleryTitle, GalleryGrid } from "./GalleryStyles";
import {Photo} from "../Photo";
;

const Gallery = () => {
    return (
        <GalleryContainer flexDirection='column' margin='0 0 64px 0'>
            <GalleryTitle>Примеры моих работ</GalleryTitle>
            <GalleryGrid>
                <Photo photo={`url(${images.photo_05})`} column='1/6' row='1/4'></Photo>
                <Photo photo={`url(${images.photo_02})`} column='6/9' row='1/4'></Photo>
                <Photo photo={`url(${images.photo_03})`} column='9/-1' row='1/3'></Photo>
                <Photo photo={`url(${images.photo_04})`} column='1/4' row='4/6'></Photo>
                <Photo photo={`url(${images.photo_01})`} column='4/7' row='4/6'></Photo>
                <Photo photo={`url(${images.photo_04})`} column='7/9' row='4/6'></Photo>
                <Photo photo={`url(${images.photo_07})`} column='9/13' row='3/6'></Photo>
            </GalleryGrid>
        </GalleryContainer>
    )
};

export default Gallery;