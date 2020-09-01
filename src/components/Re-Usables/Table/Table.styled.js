import Styled from 'styled-components';

export const TableWrapper = Styled.div`
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
`;

export const TableButton = Styled.button`
    padding: 7px;
    /* width: 5em; */
    border: none;
    background: #6eb06e;
    color: white;
    border-radius: 5px;
    outline:none;
    cursor : pointer;

    :hover{
        background : grey;
    }
`;