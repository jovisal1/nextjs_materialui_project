import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#57a2c5',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#F2F3F4',
        },
    },
    text: {
        white: '#FDFEFE',
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                color: 'white',
            },
        },
    },
});

export default theme;
