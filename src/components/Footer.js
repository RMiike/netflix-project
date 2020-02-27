import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown/';


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
                <span style={{ marginLeft: '15%', fontSize: '1.125rem' }}>Questions? <Link>Call  0800-761-4631</Link></span>
                <div className='footer-columns'>
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Corporate Informmation</Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Redeem Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
                    </ul>
                    {/* Language Button */}
                    <div className='lang-btn' onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20} />
                        &nbsp; &nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                    </div>
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
                <span style={{ marginLeft: '15%', fontSize: '0.9rem'}}>Netflix Brasil</span>
            </FooterContainer>
        );
    }
}

export default Footer;


//FooterContainer
const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    paddin: 10rem 0 3rem 0;
    color: #999;
    
    .footer-columns{
        width: 75%;
        margin: 1rem auto 2rem;
        font-size:0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    ul li{
        list-style: none;
        line-height: 2.5;

    }
    a {
        color: #999;
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
        margin: 2rem 0 2rem;
        cursor: pointer;
        
    }

    //Toggle lang
    .lang-toggle{
        margin-left: 12.4%;
        position:absolute;
        bottom: -57.7em;

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