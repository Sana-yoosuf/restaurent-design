import React from 'react'
import { images } from '../../constants';
import './Header.css'
import { SubHeading } from '../../components';
function Header() {
  return (
    <div className='app__header app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading  title="Chase the new flavour" />
          <h1 className='app__header-h1'>The Key to Fine Dining</h1>
          <p className='p__opensans' style={{margin:'2rem 0'}}>Put properly charbroiled steaks and fresh seafood from The ge Supper Club on your list of the finer things in life. Our premium offerings will make it clear why we have over 44 years of serving great food in Dayton. </p>
          <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
      </div>
    </div>
  )
}

export default Header