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

const getDateFormat = (filterDate = "") =>{
    let newDate = filterDate ? new Date(filterDate) : new Date();
    return newDate.toISOString().split('T')[0]
}

const UserActivitiesComponent = (props) =>{
    const [user, setData] = useState(props);
    const [filterDate, setFilterDate] = useState(getDateFormat());
    
    const setDateRange = (filterDate) =>{
        setFilterDate(getDateFormat(filterDate));
    }

    const parseUserActivityDate = (actDate) =>{
        let meredian = actDate.includes("AM") ? "AM" : "PM";
        actDate = actDate.replace(meredian, "")
        const newActiDate = new Date(actDate.substr(0, actDate.length - 2));
        console.log("Parsing Date ", actDate);
        return getDateFormat(newActiDate);
    }

    return (
        <Grid {...Grid_Option.contRowCenterCenter}>
            <Grid item xs={8}>
                <h4>{user.data.real_name}</h4>
            </Grid>
            <Grid item xs={4}>
                <input type="date" placeholder="Filter Date" onChange={ev => setDateRange(ev.target.value)}/>
            </Grid>
            <>
            {
                user.data.activity_periods.map(activity =>
                    parseUserActivityDate(activity.start_time) === filterDate && <h4>{activity.start_time} - {activity.end_time}</h4>
                )
            }
            </>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    )
}

export default UserActivitiesComponent;