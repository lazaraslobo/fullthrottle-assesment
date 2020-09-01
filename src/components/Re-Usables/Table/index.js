import React from 'react';
import {TableWrapper, TableButton} from './Table.styled';

// {
//     "id": "W012A3CDE",
//     "real_name": "Egon Spengler",
//     "tz": "America/Los_Angeles",
//     "activity_periods": [{
//             "start_time": "Feb 1 2020  1:33PM",
//             "end_time": "Feb 1 2020 1:54PM"
//         },
//         {
//             "start_time": "Mar 1 2020  11:11AM",
//             "end_time": "Mar 1 2020 2:00PM"
//         },
//         {
//             "start_time": "Mar 16 2020  5:33PM",
//             "end_time": "Mar 16 2020 8:02PM"
//         }
//     ]
// },




const Table = (props) =>{
    const {data, onClickRow} = props || [];
    return (
        <TableWrapper>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Time Zone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((eachRow, index) =>
                            <tr key={index} onClick={()=>onClickRow(eachRow)}>
                                <td>{index+1}</td>
                                <td>{eachRow.real_name}</td>
                                <td>{eachRow.tz}</td>
                                <td>
                                    <TableButton>
                                        Show
                                    </TableButton>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </TableWrapper>
    )
}



export default Table;