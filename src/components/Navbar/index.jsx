import React from 'react';
import BelongLogo from 'Assets/img/belong_logo_web.svg'
import SearchInput from 'Components/SearchInput';
const Navbar = ()=>{
  return(<>
    <div className='navbar-container'>
        <div className='logo'>
          <img src={BelongLogo} alt="Belong Logo" />
        </div>
        <div className='navbar-right'>
          <SearchInput/>
        </div>
    </div>
    </>
  )
}
export default Navbar;