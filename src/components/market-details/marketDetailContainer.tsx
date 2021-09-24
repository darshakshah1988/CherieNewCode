import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { MarketDetilCard } from './MarketDetailCard'
import Pagination from '../filters/Pagination'
const MarketDetailContainer = () => {
    function handelOnClick(){

    }


    return (
        <MarketDetailContainer.FullPageWrapper>
        
            <MarketDetailContainer.Wrapper>
                
                <MarketDetailContainer.Image>
                    <Image src="/Product3.png" layout="fill" ></Image>
                </MarketDetailContainer.Image>
               
                <MarketDetailContainer.DetailWrapper>
                    <MarketDetailContainer.Title> Yaoi kusama,2014</MarketDetailContainer.Title>
                    <MarketDetailContainer.MediumText> Total Split Ownerships:</MarketDetailContainer.MediumText>
                    <MarketDetailContainer.SmallText> 87,000 individuals</MarketDetailContainer.SmallText>
                    <MarketDetailContainer.MediumText> Public offering price:</MarketDetailContainer.MediumText>
                    <MarketDetailContainer.SmallText> 96.19 Japanese Yen</MarketDetailContainer.SmallText>
                    
                </MarketDetailContainer.DetailWrapper>
            </MarketDetailContainer.Wrapper>

           
            <MarketDetailContainer.CardWrapper>
            <MarketDetailContainer.FullCardWrapper>
                <MarketDetailContainer.Tabs>
                    <div>
                        <MarketDetailContainer.TradeButton primary={true}>Full Trading</MarketDetailContainer.TradeButton>
                    </div>
                    <div>
                        <MarketDetailContainer.TradeButton primary={false}>My Trading</MarketDetailContainer.TradeButton>
                    </div>
                </MarketDetailContainer.Tabs>
                <MarketDetailContainer.OnlyCard>
                    <MarketDetilCard></MarketDetilCard>
                    <MarketDetilCard></MarketDetilCard>
                    <MarketDetilCard></MarketDetilCard>
                    <MarketDetilCard></MarketDetilCard>
                    <MarketDetilCard></MarketDetilCard>
                    <MarketDetilCard></MarketDetilCard>
                </MarketDetailContainer.OnlyCard>
                



            </MarketDetailContainer.FullCardWrapper>

            <div>
                <Pagination
                        pageCount={Math.ceil(30/10)}
                        onPageChange={handelOnClick}
                />
            </div>
            </MarketDetailContainer.CardWrapper>
            
        </MarketDetailContainer.FullPageWrapper>
    )
}

export default MarketDetailContainer



interface Props{
    primary:boolean;
}


MarketDetailContainer.FullPageWrapper=styled.div`
    flex-direction: column;
    display: flex;    
    flex-wrap: wrap;
    max-width: 1140px;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    
`;

MarketDetailContainer.Wrapper=styled.div`   
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    text-align: left;
    max-height: 100%;
`;
MarketDetailContainer.Tabs=styled.div`   
    background-color: #f8f8f8;
    margin-top: 10px;
    display: flex;
    min-height: 60px;
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


MarketDetailContainer.TradeButton=styled.button  <Props>`
    width: 150px;
    height: 50px;
    border-radius: 25px;    
    border: none;
    color: #272B2F;
    background: ${props => props.primary ? "white" : "#F9F9F9"};
    
`;

MarketDetailContainer.CardWrapper=styled.div`
`

MarketDetailContainer.DetailWrapper=styled.div`
    margin-left: 50px;
    min-width: 60%;
    padding: 20PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
`
MarketDetailContainer.Image=styled.div`
    position: relative;
    border-radius: 15px;    
    width: 300px;
    object-fit: cover;
    padding: 0px;
 
`

MarketDetailContainer.Title=styled.p`
    color: #FC6076;
    font-weight: 500;
`;

MarketDetailContainer.MediumText=styled.div`
    font-weight: 400;
    font-size: 16px;
`;

MarketDetailContainer.SmallText=styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
`;

MarketDetailContainer.FullCardWrapper=styled.div`
    border: 1px solid #EEEEEE;
    display: flex;
    flex-direction: column;
     
`;

MarketDetailContainer.OnlyCard=styled.div`
        display: flex;
        flex-wrap:wrap;
        align-items: center;
        justify-content: center;
`;