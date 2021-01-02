import styled from "styled-components";

export const StyledCardContainer = styled.div`
    height: 12.5rem;
    width: 9.375rem;
    border: 0.0625rem solid rgba(0,0,0,0.2);
    border-radius: 5px;
    margin:5px;
    box-shadow: 0.1875rem;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
        box-shadow:0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1)
    }
`;
