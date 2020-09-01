import React from 'react';
import {Grid as GridLayout} from '@material-ui/core';

export const Grid = (props) =>{
    let {children} = props;
    return(
        <GridLayout {...props}>
            {children}
        </GridLayout>
)}