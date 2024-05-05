import { List } from '@mui/material'
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';



const TaskList = () => {

    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <div className='cursor-pointer max-[520px]:w-3/5'>
            <ul>
                {tasks.map((task) => (
                    <List key={task.id} sx={{ width: 400, maxWidth: '100%',  bgcolor: 'primary.main', borderRadius: '10px', m: 2 }}>
                        <ListItem>
                            <ListItemText  sx={{ color: 'text.primary' , fontSize: 'h2.fontSize' , fontWeight: 'bold ' , color: 'text.primar' }}   >
                            {task.text}
                            </ListItemText>
                            <ListItemAvatar>
                                <Avatar>
                                    < DeleteIcon onClick={() => handleDelete(task.id)} />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItem>
                    </List>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
