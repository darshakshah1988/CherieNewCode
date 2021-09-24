import React, { useState } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import { getFirstCharacter } from '../../../helpers';
// import { IArtData } from '../parts/';
import { format } from 'date-fns';
export interface IArtData {
    _id: string;
    fileUrl: string;
    currency: string;
    category: string;
    subCategory: string;
    name: string;
    price: string;
    registeredDate: string;
    artist: {
      name: string;
      [property: string]: any;
    };
    [property: string]: any;
  }


// export interface CardImage{
//     src:string;
//     alt:string;
// }

// export interface CardData {
//     status?: 'sold' | 'onSale';
//     title?: string; 
//     Holders?: string;
//     SalesRate?:string;
//     ResidualQuality?:string; 
//     PublishDate?:string;
//     image:CardImage; 
// }
// export interface CardProps{
//     cardItems:CardData[];
// }


export const Card = (props:IArtData) => {   
    // const {
    //     _id,
    //     currency,
    //     fileUrl,
    //     category,
    //     subCategory,
    //     name,
    //     price,
    //     artist,
    //     registeredDate,
    //     isDeleted
    //   } = props;
    //   console.log(props, 'props');
      
    return (   
        
        <Card.FullCard>
           {/* {props.cardItems.map(prop=>( */}
              <Card.Wrapper >
              <Card.Media>
                   {/* <Image src={props.fileUrl}  /> */}
                   {props.fileUrl ? ( 
              <img src={props.fileUrl} style={{width:"100%", height: "350px"}}/>
            ) : (""
              /* <ArtworkCard.Dummy>
                <span>{getFirstCharacter(props.name)}</span>
              </ArtworkCard.Dummy> */
            )}
                   
                   
                   {/* {
                    prop.status==="sold" ? <Card.ButtonStatus>Sold</Card.ButtonStatus> : <Card.Button>On Sale</Card.Button>
                   } */}
   
               </Card.Media>
               <Card.Content>
                   <Card.TopContent>
                   <Card.Title>
                       {props.name}
                   </Card.Title>
   
                   <Card.Details>
                       
                   </Card.Details>
   
                   <Card.Details>
                       Sales Rate: {props.investmentInfo.ownershipSales}%
                   </Card.Details>
                   
                   <Card.Details>
                      Residual Qualtity:{props.investmentInfo.qtyOfOurHoldings} Pieces
                   </Card.Details>
                   
                   <Card.Details>
                      Publish Date: {format(new Date(props.registeredDate), 'MM/dd/yyyy')}
                   </Card.Details>
   
                   </Card.TopContent>
                   <Card.ContentBottom>
                       <Card.Action>
                           {props.likeCount} Likes
                       </Card.Action>
   
                       <Card.Action>
                           {props.commentCount} comments
                       </Card.Action>
   
                   </Card.ContentBottom>
   
                   <Card.Seperator/>
                   
                   <Card.ContentBottom>
                       <Card.Action>
                           <Card.BottomButton> <img src="/Like.svg" alt="An SVG of an eye" />  Like</Card.BottomButton>
                       </Card.Action>
   
                       <Card.Action>
                           <Card.BottomButton><img src="/Comment.svg" alt="An SVG of an eye" />  Comment</Card.BottomButton>
                       </Card.Action>
   
                   </Card.ContentBottom>
                   
   
   
                  
               </Card.Content>
          </Card.Wrapper>

           {/* ))} */}
                    
       </Card.FullCard>
        
       
    )
}

Card.Wrapper = styled.div`    
    display: flex;    
    text-align: left;
    margin-top : 20px ;
    margin-bottom: 20px;
    background-color: #F9F9F9;  
   
    flex-direction:column;
    min-height: 500px;
    width: 100%;
    border-radius:10px ;
    align-items: left;
    margin-left: 10px;
  
  
`;

Card.Button=styled.button`
   
    position:absolute;
    margin-top: 5px;
    margin-right: 5px;
    top: 0;
    right: 0;   
    color: #1BB964;
    font-size: 12px;
    border-radius: 15px;
    border: none;

`;

Card.ButtonStatus=styled.button`
   
    position:absolute;
    margin-top: 5px;
    margin-right: 5px;
    top: 0;
    right: 0;   
    color: #FC686F;
    font-size: 12px;
    border-radius: 15px;
    border: none;

`;





Card.Media = styled.div`
    // position: relative;
    // flex: 50%;
    // width: 50%;
    // object-fit: cover;
    // padding:0px;
    // display: contents;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  
`;

Card.Content = styled.div`
    margin-top: 10px;
   margin: 10px 10px 10px 10px;
   
  
`;

Card.Title = styled.div`
    margin-bottom: 10px;
    font-weight: 400px;
  
`;

Card.Details = styled.p`
    font-family: Poppins;
    font-size: 16px;
    margin: 0px;
  
`;

Card.Action=styled.div`
    flex: 50;


`;
Card.Seperator=styled.hr`
    border-top: 8px  #EAEAEA;
    border-radius: 5px;

`;
Card.ContentBottom=styled.div`
    display: flex;
    margin-top: 10px;
   
`;

Card.TopContent=styled.div`
    padding: 10px;


`;

Card.FullCard=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    max-width: 100%;
    flex-wrap: wrap;

`;


Card.BottomButton=styled.button`
    background-color: #F9F9F9;
    border: none;
    text-align: center;
     text-decoration: none;
     padding: 10px ;
     

`;




