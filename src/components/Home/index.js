import React from 'react';
import {Wrapper} from './Home.styled';
import {FetchMockApi} from '../../core/api/api-service';
import {Grid, Grid_Option} from '../Grid';
import Table from '../Re-Usables/Table';

const StretchDiviceLayout = (props) =>{
    const {children} = props;
    return (
        <Grid item xs={12} sm={12} md={10} lg={8} xl={8} {...props}>
            {children}
        </Grid>
    )
}

class HomeComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <Wrapper>
                <Grid {...Grid_Option.contRowCenterCenter}>

                    <StretchDiviceLayout>
                        <h1>USERS</h1>
                    </StretchDiviceLayout>

                    <StretchDiviceLayout>
                        <Table />
                    </StretchDiviceLayout>
                </Grid>
            </Wrapper>
        )
    }
}


export default HomeComponent