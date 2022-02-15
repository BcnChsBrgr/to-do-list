import {Box, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from 'react-router-dom';
import AddItems from './components/AddItems';
import DisplayItems from './components/DisplayItems';

import MenuBar from './components/MenuBar';
const useStyles = makeStyles({
    root: {
        backgroundColor: '#E1F5FE',
        height: '100%'
    },
    bodyContainer: {
        border: 0,
        padding: '10px 40px'
    }
});
function App() {
    const classes = useStyles();
    let nowDate = new Date()
    let endDate = new Date(nowDate.getDate() +1)
    let llss = [
        {
            taskID: 1,
            TaskName: 'Task ABC',
            StartDate: nowDate,
            EndDate: endDate
        },
        {
            taskID: 2,
            TaskName: 'Task BCD',
            StartDate: nowDate,
            EndDate: endDate
        }
    ];
    return (
    <div className={`${classes.root}`}>
        <Box sx={{ flexGrow: 1 }}> <MenuBar /> </Box>
        <div className={`${classes.bodyContainer}`}>
            <Routes>
                <Route path="/schedule" element={<DisplayItems DisplayItems={llss}/>}/>
                <Route path="/add" element={<AddItems />} />
            </Routes>
        </div>
    </div>
    );
}

export default App;
