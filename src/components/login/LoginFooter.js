import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown/';
import { generateMedia } from "styled-media-query";


class Footer extends Component {
    state = {
        langContent: false
    }
    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft: '13%' }}>Questions? <Link>Call  0800-761-4631</Link></span>
                <div className='footer-columns'>
                    <ul>
                        <li>
                            <Link>Gift Card Terms</Link>
                        </li>
                     
                    </ul>
                    <ul>
                                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                                    </ul>
                    <ul>
             
                        <li>
                            <Link>Privacy Statement</Link>
                        </li>
                  
                    </ul>
                    </div>
                    {/* Language Button */}
                    <div className='lang-btn' onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20} />
                        &nbsp; &nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                    </div>
               
                {/* Toggle Lang Content */}
                {this.state.langContent && (
                    <div className='lang-toggle'>
                        <ul>
                            <li>
                                English
                        </li>
                        </ul>
                        <ul>
                            <li>
                                Portuguese
                        </li>
                        </ul>
                    </div>
                )}
                <span style={{ marginLeft: '10%', fontSize: '0.9rem', marginTop: '2rem'}}>Netflix Brasil</span>
            </FooterContainer>
        );
    }
}

export default Footer;

//Media
const customMedia = generateMedia({
    tablet: '740px',

})
//FooterContainer
const FooterContainer = styled.footer`
justify-content: center;

    background: rgba(0,0,0,.8);
    paddin: 3rem 0 6rem 0;
    margin-top: 6rem;
    color: #999;
    position:relative;
    z-index:5;
    
    .footer-columns{
        width: 80%;
        margin: 1rem auto 0;
        color:#999;
        font-size:0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        ${customMedia.lessThan('tablet')`
        grid-template-columns: repeat(2, 1fr);
        `}
        
    }
    ul li{
        list-style: none;
        line-height: 2.5;

    }
    a {
        color: #999;
        font-size: 0.9rem;
    }

    p{

        text-decoration: underline;
        cursor:ponter;
    }

    a:hover{
        text-decoration: underline;
        cursor:pointer;
    }
    //Langu Btn
    .lang-btn{
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 10rem;
        color: #999;
        margin: 2rem 0 2rem 10%;
        cursor: pointer;
        
    }

    //Toggle lang
    .lang-toggle{
        margin-left: 10%;
        position:absolute;
        bottom: -1em;

    }
    .lang-toggle li{
        text-align: justify;

    }
    .lang-toggle ul {
        background: var(--main-deep-dark);
        width: 10rem;
        border: 1px solid #333;
        margin-bottom: -1rem;
        &:hover {
            background: #0085ff;
            color: #FFF;
        }
    }
`;