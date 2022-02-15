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
    let cookieRecord = [{TaskName: '食飯', StartDate: new Date()}]
    // let cookieRecord = document.cookie == ''? [] : JSON.parse(document.cookie)
    
    return (
    <div className={`${classes.root}`}>
        <Box sx={{ flexGrow: 1 }}> <MenuBar /> </Box>
        <div className={`${classes.bodyContainer}`}>
            <Routes>
            <Route path="/" element={<DisplayItems DisplayItems={cookieRecord}/>}/>
                <Route path="/schedule" element={<DisplayItems DisplayItems={cookieRecord}/>}/>
                <Route path="/add" element={<AddItems />} />
            </Routes>
        </div>
    </div>
    );
}

export default App;
