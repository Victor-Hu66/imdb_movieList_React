import React from 'react';
import {useRef, useContext} from "react";  
import { MovieContext } from '../../Movie';
import {StyledSearchButton, StyledSearchInput, StyledSearchBox} from "./SearchBox.style";


const SearchBox = () => {
    const inputRef = useRef();
    const {setSearchKeyword} = useContext(MovieContext);

    return (
        <StyledSearchBox>
            <StyledSearchInput ref={inputRef} isColored={false}/>
            <StyledSearchButton onClick={() => setSearchKeyword(inputRef?.current?.value)}>Search</StyledSearchButton>
        </StyledSearchBox>
    )
}

export default SearchBox;
