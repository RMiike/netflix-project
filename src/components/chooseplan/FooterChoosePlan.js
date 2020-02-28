import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const FooterChoosePlan = () => {
        return (
            <div className='footer-wrapper'>
                 <FooterContainer>
                <span className='question-link'>Questions? &nbsp;<Link>Contact us</Link></span>
                <div className='footer-columns'>
                    <ul>
                        <li>
                            <Link>Faq</Link>
                        </li>
                     
                    </ul>
                    <ul>
                                        <li>
                            <Link>Help Center</Link>
                        </li>
                                    </ul>
                    <ul>
             
                        <li>
                            <Link>Term of use</Link>
                        </li>
                  
                    </ul>
                    </div>
                 </FooterContainer> 
            </div>
        );
    
}

export default FooterChoosePlan;

const FooterContainer = styled.footer`
    display: grid;
    justify-content: center;
    background: #f3f3f3;
    padding: 1.875rem 0;
    margin-top: 10rem;
    position: relative;
    border-top: 1px solid #e6e6e6;
    z-index: 5;
    
    .footer-wrapper
    {
        margin: 0 auto;
    padding: 1.25rem;
    }

    .question-link
    {
        margin-left: 3rem;
        font-size: 1rem;
        color:#999;
    }
    a{
        color:#999;
        font-size: 0.8125rem;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
    ul {
        list-style: none;
    }
    .footer-columns{
        width: 80%;
        margin: 1rem 3rem 0 3rem;
        color: #999;
        grid-template-columns: repeat(4, 15.625rem);
        display: grid;  
        grid-gap: 0.3rem;
    }
`;