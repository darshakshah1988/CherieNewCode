import { Fragment } from 'react';
import styled from 'styled-components';

import { IArtData } from '../../../types';
import {Card} from '../../../../components/layouts/parts/StoreCard';


// Types
type props = {
  artworks: Array<IArtData>;
};

// Component
export default function ArtworkRenderer(props: props) {
  const { artworks } = props;

  if (Array.isArray(artworks) && artworks.length > 0) {
    return (
      <Fragment>
        <ArtworkRenderer.Wrapper>
        {artworks.map(artwork => {
          return (

            <ArtworkRenderer.content key={artwork._id}>
              <Card {...artwork} />
            </ArtworkRenderer.content>
          );
        })}
        </ArtworkRenderer.Wrapper>
      </Fragment>
    );
  } else {
    return null;
  }
}

ArtworkRenderer.content = styled.div`
width: 30%;
margin:0 5px;
`;

ArtworkRenderer.Wrapper = styled.div`
// display: flex;  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
`;
   