import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor.js';
import TabDevices from './tabs_nav/TabDevices.js';
import TabPrice from './tabs_nav/TabPrice.js';
// Tabs Conttent

import TabContentOne from './TabContentOne.js';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';
import '../css/TabsNav.css'

class TabComponent extends Component {
    state={
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className='tabs' selectedIndex={this.state.tabIndex} 
                    onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className='tab-nav-container'>
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabDoor/>
                            <p className='lgScreen'><strong>No commitments <br/>
                            Cancel online at anytime</strong></p>
                            <br/>
                            <br/>
                            <span className='mdScreen' style={{marginTop: '0.6rem'}}>Cancel</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices/>
                            <p className='lgScreen' style={{marginTop: '-5.4125rem'}}><strong>Watch anywhere</strong></p>
                            <br/>
                            <span className='mdScreen' style={{marginTop: '-5.3125rem'}}>Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                           <TabPrice/> 
                           <p className='lgScreen'><strong>Pick your price</strong></p><br/>
                           <span className='mdScreen' style={{marginTop: '0.4rem'}}>Price</span>
                        </Tab>
                        
                    </TabList>
                    {/* Tabs Content */}

                    <TabPanel>
                        <TabContentOne/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree/>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default TabComponent;