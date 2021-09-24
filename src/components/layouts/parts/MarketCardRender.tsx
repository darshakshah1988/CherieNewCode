import { Fragment } from 'react';
import styled from 'styled-components';
import { MarketCard } from './MarketCard';
import { IArtData } from '../../../admin/types/artTypes';


// Types
type props = {
    artworks: Array<IArtData>;
  };

export default function ArtworkRenderer(props: props) {
    const { artworks } = props;
  
    if (Array.isArray(artworks) && artworks.length > 0) {
      return (
        <Fragment>
          <ArtworkRenderer.Wrapper>
          {artworks.map(artwork => {
            return (
  
              <ArtworkRenderer.content key={artwork._id}>
                 
                  <MarketCard {...artwork} />
               
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
  width: 32%;
  margin: 10px 8px 0px 0px;
  
  
`;
ArtworkRenderer.CardCenter=styled.div`
  display:flex;

`;


ArtworkRenderer.Wrapper = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align:center;
    justify-content:space-between;
   
}
`;