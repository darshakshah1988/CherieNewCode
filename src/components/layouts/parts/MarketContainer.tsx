
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import Pagination from '../../filters/Pagination';

import FilterApplyButton from '../../filters/FilterApplyButton';
import FilterPriceDropdown from '../../filters/FilterPriceDropdown';
import styled from 'styled-components';
import FilterDateInput from '../../filters/FilterDateInput';
import FilterBasicTextField from '../../filters/FilterBasicTextField';
import { FilterDatePickerStyles } from '../../filters/filter-react-datepicker-styles';

import { IArtData } from'../../../../src/admin/types/artTypes';
import { artService } from '../../../services';
import MarketCardRender from './MarketCardRender';







type Props = {
    username: string | null;
  };
  const artworks = Array();
  
  
  // Pagination settings
  const PAGE_NO = 1;
  const LIMIT_PER_PAGE = 10;

const PAGINATION = {
    page: PAGE_NO,
    limit: LIMIT_PER_PAGE,
    sort: {},
    filter: { isDeleted: false }
    // filter: {}
  };


  type props = {
    artworks: Array<IArtData>;
  };


export const MarketContainer = () => {
    const [artworks,setArtworks]=useState<Array<IArtData>>([]);
    const [tradiartworks, setTradiArtworks] = useState<Array<IArtData>>([]);

    const [nftartworks,setNftartworks]=useState<Array<IArtData>>([]);   
  


    const [pagination, setPagination] = useState(PAGINATION);
    const [loading, setLoading] = useState<boolean>(true); // Loading
    const [total, setTotal] = useState<number>(0);
    const networkReady = useRef(false);


    const [change,setChange]=useState(false);


    
    
  // ✅  Hook: 1 - useEffect to fetch artworks
  useEffect(() => {
    let isCancelled = false;
    

    const getArts = async () => {
      try {
        const response = await artService.getCount(pagination);
        // Check how many records we have in the database
        if (response?.data && response.data?.count > 0) {
          // Make sure isCancelled is false
          if (!isCancelled) {
            setTotal(response.data?.count); // Set the total number of records

            // Now we are ready to getAll all our records and make a network call
            await artService
              .getArts(PAGINATION)
              .then(function(response) {
                if (response?.data && response?.data.arts) {
                 
                  if (!isCancelled) {
                    console.log(response?.data.arts)

                    response.data.arts.map((items:any)=>{
                     
                      if(items.category==="NFT"){
                        
                        nftartworks.push(items)
                        setNftartworks(nftartworks);
                        
                        
                      }else if(items.category==="TA"){
                        tradiartworks.push(items)
                        setTradiArtworks(tradiartworks);
                      }

                    })
                    


                    console.log();
                    

                    setArtworks(response?.data.arts); // Display artists

                    setLoading(false);
                    networkReady.current = true; // Make this persistent to true
                  }
                } else {
                  if (!isCancelled) {
                    setLoading(false);
                  }
                }
              })
              .catch(function(error) {
                if (!isCancelled) {
                  setLoading(false);
                }
              });
          }
        } else {
          if (!isCancelled) {
            setLoading(false);
          }
        }
      } catch (e) {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    getArts();
  }, []);





    
    const [nftPage,setNftpage]=useState(true);


    const [data]=useState(artworks);  
    const [currentPage,setCurrentPage]=useState(1);    
    const [postPerPage]=useState(12);
    const indexOfLastPost=currentPage * postPerPage;
    const indexOfFirstPost=indexOfLastPost- postPerPage;
    const currentData=data.slice(indexOfFirstPost,indexOfLastPost)   
    
    
    const [dataSec]=useState(artworks);      
    const [currentSecondPage,setCurrentSecondPage]=useState(1); 
    const [postPerSecPage]=useState(12);
    const indexOfLastPostSec=currentSecondPage * postPerSecPage;
    const indexOfFirstPostSec=indexOfLastPostSec- postPerPage; 
    const seconPagiData=dataSec.slice(indexOfFirstPostSec,indexOfLastPostSec);


    useEffect(() => {     
    },[nftPage]);

    function handlePageClicked(number:any){
        setCurrentPage(number.selected+1);
        setCurrentSecondPage(number.selected+1);
       
    }
    function onClickNFT(){
        
        // setTradiArtworks([]);
        setChange(true);   
        setNftpage(false); 
        
    }
    function onClickTraditional(){
        // setNftartworks([]);
        setChange(false);
        setNftpage(true); 
        
        
    }

    

    function onClickApply(){


    }

    return (
        <MarketContainer.Wrapper>
            <MarketContainer.Filter>
               <MarketContainer.FilterLeft>
                    <FilterBasicTextField styled={[]} value={ ""} placeholder={"Search By Type or Name" } onChange={onClickApply}></FilterBasicTextField>
                    <MarketContainer.Image>
                        <Image src="/SearchIcon.svg" width="20px" height="20px"/>
                    </MarketContainer.Image>

                    
               </MarketContainer.FilterLeft>
                
                <MarketContainer.FilterRight>
                    <FilterPriceDropdown value={"Price Low"} styled={[]} onDropdownChanger={onClickApply}/>                
                    <FilterDateInput styled={FilterDatePickerStyles} id={"1"} minDate={new Date(2010)} maxDate={new Date(2050)} placeholder={"Filter by sales Date"}   />    
                    <FilterApplyButton  onClickHandler={onClickApply} styled={[]} disabled={false}/>
                </MarketContainer.FilterRight>
                
          
           
            </MarketContainer.Filter>


            <MarketContainer.SwitchViewButtons>
                
                <MarketContainer.Button onClick={onClickTraditional} primary={change}>
                     Traditional Artwork
                </MarketContainer.Button>
                <MarketContainer.Button  onClick={onClickNFT} primary={nftPage}>
                     NFT Artwork
                </MarketContainer.Button>

            </MarketContainer.SwitchViewButtons>

            {
                change ?                 
                <MarketContainer.CardContainer> 
                           
                    <MarketCardRender artworks={nftartworks}></MarketCardRender>  
                  
                </MarketContainer.CardContainer>                     
                :
                <MarketContainer.CardContainer>                
                <MarketCardRender artworks={tradiartworks}></MarketCardRender>
                </MarketContainer.CardContainer>
            }{
                change? 
                
                <Pagination
                        pageCount={Math.ceil(30/ 10)}
                        onPageChange={handlePageClicked}
                />:
                <Pagination
                        pageCount={Math.ceil(30/ 10)}
                        onPageChange={handlePageClicked}
                        />
            }
            
           
        </MarketContainer.Wrapper>
    )
}






MarketContainer.Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;

`;

MarketContainer.SwitchViewButtons=styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;



MarketContainer.CardContainer= styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1140px;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;


`;

interface ButtonProps{
    primary:boolean;
}


MarketContainer.Button=styled.button <ButtonProps>`
    font-family: Poppins;
    width: 200px;
    height: 50px;
    left: 675px;
    top: 231px; 
    color:#FC6076;
    font-size: 12px;
    border-radius: 24px;
    border: none;
    margin-top: 15px;    
    :hover{
        background-color:  #F9F9F9;
    }
    background: ${props => props.primary ? "white" : "#F9F9F9"};
`;


MarketContainer.ActiveButton=styled.button`   
    font-family: Poppins;
    width: 200px;
    height: 50px;
    left: 675px;
    top: 231px; 
    color:#FC6076;
    font-size: 12px;
    border-radius: 24px;
    border: none;
    margin-top: 15px;
    
    :hover{
        background-color:  #F9F9F9;
;
    }
    :active{
        background-color:  #F9F9F9;
    }

`;

MarketContainer.Filter=styled.div`
display: flex;
align-items: center;
max-width: 1140px;
padding-right: 12px;
padding-left: 12px;
width: 100%;


`;
MarketContainer.FilterRight=styled.div`
    display: flex;
    flex: 70%;
    justify-content:end;
   
    


`
MarketContainer.FilterLeft=styled.div`
    display: flex;
    flex: 45%;
    position: relative;
    


`
MarketContainer.Image=styled.div`
        width: 50px;
        font-size: 12px;
        position: absolute;
        top: 0;
       
        right: 0px;
        z-index: 2;
        border: none;
        top: 15px;
        height: 30px;
        cursor: pointer;
        color: white;        
        transform: translateX(2px);

`;

