import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import DrawerTitle from '@/components/Drawer/drawerTitle';
import UserContext from '@/context/UserContext';
import { useContext } from 'react';

const drawerWidth = '17em';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerTitle: {
        height: '8em',
        backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #7FB3D5 100%)',
        position: 'relative',
    },
    drawerAvatar: {
        right: '10px',
        position: 'absolute',
        top: '10px',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function AppDrawer({ open, onClose }) {
    const { user, setUser } = useContext(UserContext);
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor={'left'}
            open={open}
            onClose={onClose}
        >
            <div onClick={onClose} onKeyDown={onClose}>
                <DrawerTitle />
                <List>
                    <ListItem button key={'hola'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'hola'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem
                        button
                        key={'adios'}
                        onClick={() =>
                            setUser({
                                name: 'juan',
                                email: 'pvidalsalvador@gmail.com',
                            })
                        }
                    >
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'adios'} />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}
