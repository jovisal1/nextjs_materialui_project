import { useState } from 'react';
import {
    AppBar,
    CssBaseline,
    IconButton,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ApplicationDrawer from '@/components/Drawer/appDrawer';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.text.white,
    },
    typography: {
        color: theme.text.white,
        fontWeight: 300,
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function ApplicationBar({ props, userInfo }) {
    const [showDrawer, setShowDrawer] = useState(false);
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            aria-label="menu"
                            onClick={() => setShowDrawer(!showDrawer)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.typography}>
                            Huracains
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <ApplicationDrawer
                userInfo
                open={showDrawer}
                onClose={() => setShowDrawer(!showDrawer)}
            />
        </React.Fragment>
    );
}
