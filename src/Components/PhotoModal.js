import React from 'react';
import styled, {css} from 'styled-components';

const StyledPhotoModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: fit-content;
  height: fit-content;
  border: 1px solid red;
  visibility: hidden;
`;

const StyledPhotoModalVisible =  styled(StyledPhotoModal)`
    visibility: visible;
  `;

const PhotoModal = (isButtonClicked) => {
    console.log(isButtonClicked)
    if (!isButtonClicked)
    {
        return  <StyledPhotoModal></StyledPhotoModal>
    } else {
        return <StyledPhotoModalVisible></StyledPhotoModalVisible>
    }
}

export default PhotoModal;

