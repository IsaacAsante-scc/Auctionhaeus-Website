import React, {useState} from 'react';
import { FaqData } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';


const AccordianSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 50vh;
background: #fff;
margin-bottom: 50px;

@media screen and (max-width: 991px) {
    margin-bottom: 85px;
}

@media screen and (max-width: 768px) {
    margin-bottom: 250px;
`;

const Container = styled.div`
position: absolute;
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
background: #DDDDDD;
color: #BB2205;
overflow: scroll;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-bottom: 1px solid #f00946;
border-top: 1px solid #f00946;


p {
    font-size: 1.75rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans serif;
}
`;

const Support = styled.div`

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
                                <p>{item.answer}</p>  
                            </Dropdown>  
                            ) : null}
                            </>
                        );
                    })}
                </Container>
                
            </AccordianSection>
            <Support>
                <h3>Can't find an answer email us</h3>
                <Link to={{ mailto: 'auctionhaeus@outlook.com' }} target="_blank">
                    <Button buttonSize='btn--wide' buttonColor='blue'>Email Us</Button>
                </Link>
            </Support>

        </IconContext.Provider>
    


    )
}

export default Accordian