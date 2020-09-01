import React from 'react';
import HomeComponent from './components/Home';
import {Wrapper} from './styled/App.styled';
import {Grid, Grid_Option} from './components/Grid';

function App() {
  return (
    <Wrapper>
      <Grid {...Grid_Option.contRowCenterCenter}>
        <Grid item xs={12}>
          <HomeComponent />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default App;
