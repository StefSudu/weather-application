import '../StyleSheets/SearchBar.css'
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import FetchData from './fetchData';
import { useState } from 'react';

export default function SearchBar({placeholder, onSearch}) {
    const [place, setPlace] = useState('');

    const handleInputChange = (e) => {
        setPlace(e.target.value);
    };

    const handleSearchClick = () => {
        const data = <FetchData place={place} />;
        onSearch(data);
    };

    return ( 
            <div className="searchBarContainerComponent">   
                <SearchIcon fontSize="small" /> 
                <input className="inputSearchBarField"
                    placeholder={placeholder}
                    onChange={handleInputChange}
                />
                <IconButton color='primary' aria-label="delete"  onClick={handleSearchClick}>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>          
            </div>  
    )
};