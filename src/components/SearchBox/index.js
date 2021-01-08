import React from 'react';
import {StyledSearchButton, StyledSearchInput, StyledSearchBox} from "./SearchBox.style";


const SearchBox = () => {

    return (
        <StyledSearchBox>
            <StyledSearchInput></StyledSearchInput>
            <StyledSearchButton>Search</StyledSearchButton>
        </StyledSearchBox>
    )
}

export default SearchBox;
