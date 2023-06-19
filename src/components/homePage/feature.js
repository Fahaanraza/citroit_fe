import React from 'react';
import { Button } from 'antd';
import '../homePage/imageCarousel.css';

export default function Features() {
  return (
    <div style={{backgroundColor:'#f3f1f0'}}>
     <div class="flex-container " style={{justifyContent:'center', padding:'70px', }}>
          <div className='flex-item-left'>
            <h2 style={{color:'#574741', fontSize:'28px'}}>Features of Fire-Connect</h2>
          <p style={{color:'#574741'}}>Reducing downtime, Maintenance costs and Production waste has never been easier, Installing the Fire-connect sensor only takes 3 minutes and in no time at all</p>
          </div>
          <div className='flex-item-right' >
          <a class="cta-btn " href="https://citriot.com" target="_blank" rel="noopener noreferrer">Request a quote</a>

            {/* <Button className='btn-get-started'>Default Button</Button> */}
          </div>
        </div>   
    </div>
  );
}
