import React from 'react';
import {Wrapper} from './Home.styled';
import {FetchMockApi} from '../../core/api/api-service';
import {Grid, Grid_Option} from '../Grid';
import Table from '../Re-Usables/Table';
import {SimpleDialog} from '../Re-Usables/Modal';
import UserActivitiesComponent from '../Re-Usables/User-Activities';

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
        this.state = {
            isApiData   :   false,
            data        :   [],
            modal       :   {
                isModalOpen         : false,
                selectedUserData    :  {}
            }
        }
    }

    componentDidMount(){
        let MockUsers = FetchMockApi();
        this.setState({...this.state, ...MockUsers});
    }

    setModalClose = () =>{
        this.setState({...this.state, modal : {isModalOpen : false}})
    }

    openModalWithData = (UData) =>{
        let extendState = {...this.state, modal : {isModalOpen : true, selectedUserData : UData}}
        this.setState(extendState)
    }
    
    render(){
        return (
            <Wrapper>
                <Grid {...Grid_Option.contRowCenterCenter}>

                    <StretchDiviceLayout>
                    <h1>User Activities..</h1>
                    </StretchDiviceLayout>

                    <StretchDiviceLayout>
                        <Table data={this.state.data} onClickRow={this.openModalWithData}/>
                    </StretchDiviceLayout>

                    <StretchDiviceLayout>
                        <SimpleDialog isOpen={this.state.modal.isModalOpen} onClose={this.setModalClose}>
                            <UserActivitiesComponent data={this.state.modal.selectedUserData}/>
                        </SimpleDialog>
                    </StretchDiviceLayout>
                </Grid>
            </Wrapper>
        )
    }
}


export default HomeComponent