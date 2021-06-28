import {Toolbar, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import logo from '../../resources/logo/logo.png';
const useStyles = makeStyles({
    logo: {
        maxWidth: 80,
        margin: 10
    },
    textLogo: {
        marginLeft: 10,
        color: 'primary'
    }
});

export default function MuiToolbar() {
    const classes = useStyles();

    return (
        <Toolbar>
            <img src={logo} alt="uSign logo" className={classes.logo} />
            <Typography
                variant={"h2"}
                className={classes.textLogo}
                color={'secondary'}
            >uSign Showcase</Typography>
        </Toolbar>
    )
}