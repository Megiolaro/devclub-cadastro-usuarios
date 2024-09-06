import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    background-color: #181f36;
    min-height: 100vh;
    padding: 20px;

`

export const Title = styled.h2`

    color: #fff;
    font-size: 38px;
    font-weight: 600;
    font-style: normal;
    align-items: center;
`

export const ContainerUsers = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding: 16px;
    background-color: #252d48;
    border-radius: 32px;
    max-width: 400px;

    h3{
        color: #fff;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }


    p{
        color: #fff;
        font-size: 20px;
    }

`

export const TrashIcon = styled.img`

    cursor: pointer;
    padding-left: 30px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

`

export const Avatar = styled.img`
    height: 80px;
`
