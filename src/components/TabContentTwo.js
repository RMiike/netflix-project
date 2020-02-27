import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgMac from '../images/tab-macbook.png';

function TabContentTwo() {
    return (
        <TabContainer>
            <div className='tab-content'>
                <div className='tab-top-content'>
                    <span>
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </span>
                 <Button className='btn'>try it now</Button>
                </div>
                {/* Tab Button Content */}
                <div className='tab-bottom-content'>
                 {/* tv img container */}
                    <div>
                        <img src={ImgTv} style={{width: '18.75rem'}} />
                        <h3>
                            Watch on your TV
                        </h3>
                        <p>
                            Smart Tvs, PlayStation, XBox, Chromecast, Apple TV, Bly-ray players
                            and more. 
                        </p>
                    </div>
                      {/* tablet img container */}
                      <div>
                        <img src={ImgTablet} style={{width: '18.75rem', paddingTop: '0.625rem'}}/>
                        <h3>
                            Watch instantly or download for later
                        </h3>
                        <p>
                           Available on phone and tablet, wherever you go. 
                        </p>
                    </div>
                      {/* Macbook img container */}
                      <div>
                        <img src={ImgMac} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}} />
                        
                        <h3>
                            Use any computer
                        </h3>
                        <p>
                            Watch right on Netflix.com. 
                        </p>
                    </div>
                </div>
            </div>
        </TabContainer>
    );
}

export default TabContentTwo;


// Main Tab Content Container

const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content{
        margin: 0 15%;
    }

    // Tab top content

    .tab-top-content{
        display: grid;
        grid-template-columns: repeat(12,1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;

    }

    span {
         grid-column: 1 / 8;
         font-size: 1.5rem;
    }

    .btn{
        margin: 0 1.25rem 1.25rem;
        grid-column: 10 / 13;
    }
    //Tab Botton Content 
    .tab-bottom-content{
        display:grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
    }

    h3{
        margin: 0.5rem 0;
    }
    p{
        color: var(--main-grey);
    }
`;