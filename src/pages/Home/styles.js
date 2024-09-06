import styled from "styled-components";

export const Container = styled.div`

    background-color: #181f36;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;

`

export const Form = styled.form`


    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    gap: 20px;
`

export const Title = styled.h2`

    color: #fff;
    font-size: 38px;
    font-weight: 600;
    font-style: normal;
    align-items: center;

`

export const ContainerInputs = styled.div`

    display: flex;
    gap: 50px;


`

export const Input = styled.input`

    border-radius: 10px;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
    
`

export const InputLabel = styled.label`

    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span{
        font-weight: bold;
        color: #ef4f45
    }

`

