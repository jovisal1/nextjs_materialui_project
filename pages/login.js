import { useState, useContext } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
    Button,
} from '@material-ui/core';
import UserContext from '@/context/UserContext';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dialogTitle: {
        backgroundColor: 'transparent',
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
    },
    logo: {
        width: '60px',
        height: '60px',
    },
    loginForm: {
        '& > *': {
            margin: theme.spacing(1),
            width: '95%',
            fontSize: '12px',
        },
    },
    loginActions: {
        justifyContent: 'center',
    },
}));

export default function Login() {
    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userEmailError, setUserEmailError] = useState(false);
    const [loginOpen, setLoginOpen] = useState(true);
    const { user, setUser } = useContext(UserContext);
    const router = useRouter();
    const classes = useStyles();

    const handleClose = () => {
        setLoginOpen(!loginOpen);
    };

    const handleLogin = () => {
        let userNameEmpty = _.isEmpty(userName);
        let userEmailEmpty = _.isEmpty(userEmail);
        setUserNameError(userNameEmpty);
        setUserEmailError(userEmailEmpty);
        if (userNameEmpty || userEmailEmpty) {
            return;
        } else {
            setUser({
                name: userName,
                email: userEmail,
            });
            handleClose();
            router.push('/');
        }
    };

    return (
        <React.Fragment>
            <Dialog
                open={loginOpen}
                onClose={handleClose}
                disableEscapeKeyDown
                disableBackdropClick
                aria-labelledby="form-dialog-title"
            >
                <div className={classes.logoContainer}>
                    <img className={classes.logo} src="user.png" alt="" />
                </div>
                <DialogContent>
                    <form
                        className={classes.loginForm}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="standard-basic"
                            error={userNameError}
                            size={'small'}
                            label="Login"
                            fullWidth
                            onChange={(ev) => setUserName(ev.target.value)}
                        />
                        <TextField
                            id="standard-basic"
                            error={userEmailError}
                            size={'small'}
                            label="Password"
                            fullWidth
                            onChange={(ev) => setUserEmail(ev.target.value)}
                        />
                    </form>
                </DialogContent>
                <DialogActions className={classes.loginActions}>
                    <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
