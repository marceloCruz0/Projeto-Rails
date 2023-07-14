import styled from "styled-components"

export const Container = styled.div`

    width: 85%;
    margin: 0 auto;

    h1 {
        text-align: center;
        font-size: 44px;
        color: #4C5578;
        margin: 5rem;
        font-weight: 900;
        text-transform: uppercase;
    }    
`;

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
`;