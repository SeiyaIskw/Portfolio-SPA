import { createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue"
import pink from "@material-ui/core/colors/pink"

const dark = true

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        type: dark ? "dark" : "light",
    },
    typography: {
        fontFamily: [
            "Roboto"
        ],
        fontSize: 14,
    }
})


export default theme
