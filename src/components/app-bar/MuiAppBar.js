import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import MuiToolbar from "../toolbar/MuiToolbar";

export default function MuiAppBar() {

    return (
        <AppBar color={"transparent"}
            position="static">
            <MuiToolbar >

            </MuiToolbar>
        </AppBar>
    );
}