import {Box, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from 'react-router-dom';
import AddItems from './components/AddItems';

import MenuBar from './components/MenuBar';
const useStyles = makeStyles({
    root: {
        backgroundColor: 'black',
        height: '100%'
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
    },
    bodyContainer: {
        border: 0,
        padding: '10px 40px'
    }
});
function App() {
    const classes = useStyles();
    return (
    <div className={`${classes.root}`}>
        <Box sx={{ flexGrow: 1 }}> <MenuBar /> </Box>
        <div className={`${classes.bodyContainer}`}>
            <Routes>
                <Route path="/" >home</Route>
                <Route path="/add" element={<AddItems />} />
                <Route path="*" ></Route>
            </Routes>
        </div>
    </div>
    );
}

export default App;
