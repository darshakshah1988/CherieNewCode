import styled from "styled-components"



export const MarketDetilCard = () => {
    return (
        <MarketDetilCard.Wrapper>
                
                    
                        <MarketDetilCard.Card>
                            <MarketDetilCard.Body>
                                <MarketDetilCard.Title>
                                    1 Piece: 101.2 Japanese Yen
                                </MarketDetilCard.Title>
                                <MarketDetilCard.Content>
                                    <MarketDetilCard.MediumText>Sale Quantyti: 50 pcs</MarketDetilCard.MediumText>
                                    <MarketDetilCard.MediumText>Total Amount:5592 Japanese Yen</MarketDetilCard.MediumText>
                                    <MarketDetilCard.MediumText>Registration: 2021-07-28</MarketDetilCard.MediumText>
                                </MarketDetilCard.Content>



                                
                                <MarketDetilCard.Button>Buying</MarketDetilCard.Button>
                
                            </MarketDetilCard.Body>
                            </MarketDetilCard.Card>
               

        </MarketDetilCard.Wrapper>
    )
}

MarketDetilCard.Wrapper=styled.div`
    background-color: #F8F8F8;
    min-width: 360px;
    border-radius: 10px;  
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 15px;


`;

MarketDetilCard.Body=styled.div`
    padding: 15px;
    text-align: left;


`;

MarketDetilCard.Card=styled.div`
    position : relative;


`;

MarketDetilCard.Content=styled.div`
    


`;

MarketDetilCard.Button=styled.button`
    width: 80px;
    background-color: #FC6076;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 15px;
    margin-right: 15px;
    border: none;
    color: white;
    font-size: 12px;
    border-radius: 10px;
`

MarketDetilCard.MediumText=styled.p`
    font-family: Poppins,Helvetica Neue;
    font-weight: 400;
    font-style: normal;
    line-height: 10px;


`
MarketDetilCard.Title=styled.p`
    font-family: Poppins,Helvetica Neue;
    font-weight: 600;
    font-style: normal;
    line-height: 10px;
    margin-top: 10px;
`