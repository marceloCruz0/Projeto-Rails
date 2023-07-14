import styled from "styled-components"

export const Container = styled.div`
    margin: 4rem 1rem;
    -webkit-box-shadow: 0px 0px 40px -25px rgba(76,85,120,0.7);
    -moz-box-shadow: 0px 0px 40px -25px rgba(76,85,120,0.7);
    box-shadow: 0px 0px 40px -25px rgba(76,85,120,0.7);
    border-radius: 10px;
    height: 50rem;
    width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 26px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 2rem;
    color: #4C5578;
    text-align: center;
    font-weight: 700;
  }

    svg {
        color: #4C5578;
        font-size: 2.5rem;
        cursor: pointer;
    }

    h1 {
        font-size: 20px;
    }
`;

export const Vectors = styled.div`

    display: flex;
    gap: 10px;
    margin: 0;
`

export const InlineButton = styled.div`

a {
    display: block;
    font-size: 1.4rem;
    letter-spacing: .5px;
    color: #4C5578;
    margin: 1.5rem;
    text-transform: lowercase;
    font-weight: 600;
}
`;