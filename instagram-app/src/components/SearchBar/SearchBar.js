import React from 'react';
import './searchBar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass, faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import {Button} from 'antd';

const SearchBar = props => {


    return(
        <div className="searchBar">
            <img className='logo' src='https://online-harvest.com/en/wp-content/uploads/2018/09/if_38-instagram_1161953-1-e1538728533467.png'/>
            <img className='text-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' />
            <input className='search' placeholder='search' name='search' value={props.searchTerm} onChange={props.inputChange}/>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={props.logOut}>Log Out</Button>
            <div className='icons'>
                <FontAwesomeIcon className='icon' icon={faCompass} />
                <FontAwesomeIcon className='icon' icon={faHeart} />
                <FontAwesomeIcon className='icon' icon={faUser} />
            </div>
            
        </div>
    )
};


export default SearchBar;