import React, {useState} from 'react';
import { FaqData } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



const AccordianSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 50vh;
background: #fff;
margin-bottom: 155px;

@media screen and (max-width: 991px) {
    margin-bottom: 155px;
}

@media screen and (max-width: 768px) {
    margin-bottom: 250px;
`;

const Container = styled.div`
position: absolute;
max-width: 1000px;
top: 30%;
box-shadow: 5px 10px 45px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
background: #393E46;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;

h1 {
    padding: 2rem;
    font-size: 2rem;
}

span {
    margin-right: 1.5rem;
}
`;

const Dropdown = styled.div`
background: #fff;
max-width: 1250px;
height: 100%;
display: block;
justify-content: center;
align-items: center;
border-bottom: 2px solid #f00946;
border-top: 2px solid #f00946;
align: center;



p {
    font-size: 1.5rem;
}
`;

const Support = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    text-align: center;
    font-size: 1.5rem;

    margin-bottom: 75px;
    margin-top: 75px;

    @media screen and (max-width: 1216px) {
        margin-top: 300px;
    }
    
    @media screen and (max-width: 768px) {
        margin-top: 500px;
    }

`;




const Accordian = () => {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }


    return (
        
        <IconContext.Provider value={{ color: '#f00946', size: '25px' }}>
            <AccordianSection>
                <Container>
                    {FaqData.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h1>{item.question}</h1>
                                <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                            </Wrap>
                            {clicked === index ? (

                            
                            <Dropdown>
                                <div>
                                    <p>{item.answer}</p>  
                                </div>
                            </Dropdown>  
                            ) : null}
                            </>
                        );
                    })}
                </Container>
                
            </AccordianSection>
            <Support>
                <h3>Can't find your answer email us!</h3>
                <a href="mailto:auctionhaeus@outlook.com" rel="noopener noreferrer">auctionhaeus@outlook.com</a>
            </Support>

        </IconContext.Provider>
    


    )
}

export default Accordian