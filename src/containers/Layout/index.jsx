
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import Navbar from 'Components/Navbar'
const Layout = ({children})=>{
  return(<>
        <div className={'container'}>
          <Navbar/> 
          <div className={'body'}>
            {children}
          </div>
        </div>
      </>)
};

export default withRouter(Layout);