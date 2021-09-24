import React from "react";
import styled from "styled-components";
import FooterMarketPlace from "../layouts/parts/FooterFront";
import NavbarShop from "../layouts/parts/NavbarFront";
import MarketDetailContainer from "./marketDetailContainer";




export default function MarketDetailsList() {
    return (
      <MarketDetailsList.Wrapper>
        <NavbarShop></NavbarShop>   
             <MarketDetailContainer></MarketDetailContainer>     
             <FooterMarketPlace></FooterMarketPlace>
      </MarketDetailsList.Wrapper>
    );
  }

  MarketDetailsList.Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  
`;