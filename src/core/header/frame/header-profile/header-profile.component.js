import Image from 'next/image';

import styled from 'styled-components';

export function HeaderProfileComponent(props) {
  return (
    <ImageContainer>
      <Image layout="fill" src={props.imageURL} priority={true} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;
