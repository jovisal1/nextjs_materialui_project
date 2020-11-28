import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import UserContext from '@/context/UserContext';

const useStyles = makeStyles((theme) => ({
    drawerTitle: {
        height: '8em',
        backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #7FB3D5 100%)',
        position: 'relative',
    },
    drawerAvatar: {
        right: '10px',
        position: 'absolute',
        top: '20px',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    userName: {
        top: '65px',
        position: 'absolute',
        left: '10px',
        color: 'white',
        fontSize: '3vw',
    },
    userEmail: {
        fontSize: '3vw',
        position: 'absolute',
        top: '79px',
        left: '10px',
        fontStyle: 'italic',
        color: 'white',
    },
}));

export default function DrawerTitle() {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext);

    return (
        <div className={classes.drawerTitle}>
            <Avatar alt="" className={classes.drawerAvatar} src="/1.jpg" />
            <div className={classes.userName}>{user.name}</div>
            <div className={classes.userEmail}>{user.email}</div>
        </div>
    );
}
