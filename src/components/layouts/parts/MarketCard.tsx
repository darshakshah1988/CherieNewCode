import React from 'react'
import styled from 'styled-components'
import { IArtData } from'../../../../src/admin/types/artTypes';

export interface CardImage{
    src:string;
    alt:string;
}

export interface CardData {
    status?: 'sold' | 'onSale';
    title?: string; 
    Holders?: string;
    SalesRate?:string;
    ResidualQuality?:string; 
    PublishDate?:string;
    image:CardImage; 
}
export interface CardProps{
    cardItems:CardData[];
}
type props = {
    artworks: Array<IArtData>;
  };


export const MarketCard = (props:IArtData) => {
    const { artworks } = props;
    return (
        <MarketCard.Wrapper>
             <MarketCard.Card>
                            <MarketCard.Media>
                                <MarketCard.Image src={props.fileUrl}height="300px" width="100%" />
                            </MarketCard.Media>
                            <MarketCard.Body>
                                <MarketCard.Content>
                                    {props.name}
                                </MarketCard.Content>

                                <MarketCard.ContentRed>
                                    {props.artist.name}
                                </MarketCard.ContentRed>
                            </MarketCard.Body>
                </MarketCard.Card>
                
                

        </MarketCard.Wrapper>
    )
}
MarketCard.Image=styled.img`
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`;

MarketCard.Card=styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
    background-color:#F9F9F9;
    border-radius:10px;
    
    
`;

MarketCard.Wrapper=styled.div`
   margin-top: 50px;
`;


MarketCard.Media=styled.div`     
   

`;


MarketCard.Body=styled.div`
    
    padding: 10px;
`;
MarketCard.Content=styled.p`
    margin-bottom: 1px !important;
    font-weight: bold;

`;
MarketCard.ContentRed=styled.p`
    color:#fc6076;
`;


