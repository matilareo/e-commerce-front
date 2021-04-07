
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

const Layout = ({children})=>{
  return(<>
        <div className={'container'}>
          <div className={'title-item'}>
          </div>
          <div className={'body-item'}>
            {children}
          </div>
          <footer className='footer'/>
        </div>
      </>)
};

export default withRouter(Layout);