import React from 'react';
import {Grid, Grid_Option} from '../../Grid';

const UserActivitiesComponent = (props) =>{
    return (
        <Grid {...Grid_Option.contRowCenterCenter}>
            <Grid item xs={10}>
                <h4>Test</h4>
            </Grid>
        </Grid>
    )
}

export default UserActivitiesComponent;