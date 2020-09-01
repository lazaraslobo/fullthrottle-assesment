import React, {useState} from 'react';
import {Grid, Grid_Option} from '../../Grid';
import {DateTimeActivityWrapper} from './User-activities.styled';

// id: "W012A3CDE"
// real_name: "Egon Spengler"
// tz: "America/Los_Angeles"
// activity_periods: Array(3)
// 0: {start_time: "Feb 1 2020  1:33PM", end_time: "Feb 1 2020 1:54PM"}
// 1: {start_time: "Mar 1 2020  11:11AM", end_time: "Mar 1 2020 2:00PM"}
// 2: {start_time: "Mar 16 2020  5:33PM", end_time: "Mar 16 2020 8:02PM"}


const UserActivitiesComponent = (props) =>{
    const [user, setData] = useState(props);

    const getDateFormat = (filterDate = "*") =>{
        if(filterDate == "*"){
            return "*"
        }
    
        let newDate = new Date(filterDate);
        newDate.toLocaleString('en-US', { timeZone: user.tz });
        return newDate.toString().split('T')[0]
    }

    const [filterDate, setFilterDate] = useState(getDateFormat());

    
    const setDateRange = (filterDate) =>{
        setFilterDate(getDateFormat(filterDate));
    }

    const parseUserActivityDate = (actObj, incomingDate) =>{
        let splitDate = incomingDate.split(" ");
        splitDate = splitDate.splice(0, splitDate.length-1).join(" ");
        const newActiDate = new Date(splitDate);
        let dateFormatted = getDateFormat(newActiDate);
        return dateFormatted;
    }

    return (
        <DateTimeActivityWrapper>
            <Grid {...Grid_Option.contRowCenterCenter}>
            <Grid item xs={8}>
                <h4>{user.data.real_name}</h4>
            </Grid>
            <Grid item xs={4}>
                <input type="date" placeholder="Filter Date" onChange={ev => setDateRange(ev.target.value)}/>
            </Grid>
            <>
            <table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.data.activity_periods.map((activity, index)=>{
                            let dateOnly = filterDate.indexOf(":") - 2;
                            dateOnly = filterDate.substr(0, dateOnly);
                            if(filterDate == "*" || parseUserActivityDate(activity, activity.start_time).includes(dateOnly)){
                                return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                        {activity.start_time}
                                    </td>
                                    <td>
                                        {activity.end_time}
                                    </td>
                                </tr> )
                            }
                        })
                    }
                </tbody>
            </table>
            </>
            <Grid item xs={12}>
            </Grid>
        </Grid>
        </DateTimeActivityWrapper>
    )
}

export default UserActivitiesComponent;