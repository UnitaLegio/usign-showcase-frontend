import React from 'react';
import './App.css';
import MuiAppBar from "./components/app-bar/MuiAppBar";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import './index.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fff',
            contrastText: '#970748',
        },
        secondary: {
            main: '#970748',
            contrastText: '#fff',
            light: '#cc4773',
            dark: '#630021'
        }
    },
    typography: {
        h2: {
            fontFamily: 'Akaya Kanadaka',
            fontStyle: 'cursive',
        }
    }

})

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <MuiAppBar/>
                </React.Fragment>
            </ThemeProvider>
        </div>
    );
}

export default App;
