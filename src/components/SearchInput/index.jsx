import React,{useEffect, useRef, useState} from 'react';
import IconSearch from 'Assets/img/icon_search.svg'
import IconClose from 'Assets/img/icon_close.svg'
import axiosApiInstance from 'Api/config/axios';
import { generateHome , generateMember} from 'Helpers'
const SearchInput = ()=>{
  const inputRef = useRef();
  const [hidden, setHidden] = useState('none');
  const [inputText, setInputText]= useState('');
  const [homes, setHomes] = useState(['test', 'test']);
  const [members , setMembers] = useState(['test', 'test']);

  useEffect(()=>{
    axiosApiInstance.get('https://candidates.blo.ng/interview/homes').then(resp => {
      setHomes(data.map(elm=>generateHome(resp.data.adress)));
    });
    axiosApiInstance.get('https://candidates.blo.ng/interview/members').then(resp => {
      setMembers(data.map(elm=>generateMember(resp.data.adress)));
    });
  },[inputText])
  

  const handleInputClick=()=>{
    setHidden(null);
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return ()=> document.removeEventListener('mousedown', handleClickOutside);
  },[])

  const handleClickOutside= (event)=> {
    if (inputRef && !inputRef.current.contains(event.target)) {
        setHidden('none')
    }
  }
  console.log(inputText)
  return(<>
      <form>
      <input 
        ref={inputRef}
        className='search-input' 
        type="text" 
        placeholder="Search"
        onChange={(event) => setInputText(event.target.value) } 
        onClick={handleInputClick}/>
         </form>
      <div className='search-input-box' style={{display:hidden}}>
        <div className='search-input-box-title'>Homes</div>
        <ul className='input-box-list-item'>
          {homes}
        </ul>
        <div className='search-input-box-title'>Members</div>
        <ul>
          {members}
        </ul>
      </div>
      </>
  )
}
export default SearchInput;