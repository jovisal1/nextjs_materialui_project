import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

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

export default function ApplicationDrawer({ open, onClose }) {
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
                <div className={classes.drawerTitle}>
                    <Avatar
                        alt=""
                        className={classes.drawerAvatar}
                        src="/1.jpg"
                    />
                </div>
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
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
}
