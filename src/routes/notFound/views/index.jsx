import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getSomething} from 'Actions';
import axiosApiInstance from 'Api/config/axios';

const NotFoundCountainer=()=>{
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getSomething(
      {
        params:{
          name:'mati',
          title:'mati2'
        },
        onComplete:()=>{console.log('completed')},
        onError:()=>{console.log('error')}
      }));
      axiosApiInstance.get('http://webcode.me').then(resp => {
        console.log(resp.data);
      });
    },[]);

  return <h1 className='pageNotFound'>Page Not found  </h1>
}

export default NotFoundCountainer;