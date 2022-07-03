import styled from "styled-components";

export const Span = styled.span`
background-color: blue;
color: white;
border-radius: 10px;
padding: 2px 10px
`

export const Div = styled.div`
margin-top: 25px;
// background-color: red;
font-size: 20px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: space-around;
`

export const Desc = styled.span`
background-color: ${({fruit})=> fruit ? 'green' : 'red'};
color: white;
border-radius: 10px;
padding: 2px 7px;
margin: 0
`

export const LI = styled.li`
list-style-type: none;

`

export const BTN = styled.button`
background-color: #3558e6;
border: none;
:hover{
    background-color: red;
}
:active{
    transform: scale(0.97)
}
border-radius: 7px;
margin-left: 7px;
`

export const SPN = styled.span`
border-bottom: 1px solid black;
margin-left: 20px;
` 