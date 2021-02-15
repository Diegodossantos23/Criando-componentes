import styled from 'styled-components'

export const CardContainer = styled.div`
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    width: 200px;
    height: 200px;
    background-color:#f1f1f1;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    
    div:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    h3{
        border-bottom: 1px solid #2A292E;
        margin-bottom: 10px;
    }
`