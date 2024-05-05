import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const Hero = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    // console.log(task);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim() !== '') {
            dispatch(addTask(task))
            setTask('');
            console.log(addTask);
        }
    };

    return (
        <div className='cursor-pointer max-[520px]:w-3/4' >
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        border:2
                    }}
                    className='flex'
                >
                    <TextField fullWidth label=" Task " id="fullWidth"  variant="filled" size="large"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <Button  variant="contained" variant="filled" size="large" sx={{ bgcolor: 'error.main' }} onClick={handleSubmit}>Add</Button>
                </Box>
        </div>
    )
}

export default Hero
