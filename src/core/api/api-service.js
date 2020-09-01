import MockUsersData from './mock-api';

const ApiCustomize = {
    isApiData   :   MockUsersData.members.length ? true : false,
    data        :   MockUsersData.members
}

export const FetchMockApi = () =>{
    return ApiCustomize;
}