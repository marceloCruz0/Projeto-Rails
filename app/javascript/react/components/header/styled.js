import styled from "styled-components"

export const Container = styled.header`

    display: flex;
    padding: 50px;
    justify-content: space-between;
    align-items: center;
    min-height: 200px;
    background-color: #4C5578;
    color: #fff;

    img {
        width: 12%;
        cursor: pointer;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li {
            margin: 15px;
            
            a {
                color: #fff;
                font-size: 11px;
                cursor: pointer;
                text-transform: uppercase;
                letter-spacing: 3px;
            }
        }
    }


`;