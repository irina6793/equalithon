import React, {Component} from "react";
import ReactDOM from "react-dom";
import './index.css';
import SavedList from "./component/SavedList";
import NavBar from './component/NavBar'
import HomeContent from './component/HomeContent';
import Image from './component/Image'
import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/blue';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
  	 palette: {
    primary: blue,
    secondary: green,
  },
    type: 'light',
  },
});

function App() {
	return (
		<div >
 <MuiThemeProvider theme={theme}>
		<NavBar />
				<div className="space" >

		<Box component="span" m={1}></Box>
		<div className='rowC'>
		<Image />
		<HomeContent />
		</div>
		<div className="container my-2">
		<SavedList />
				</div>


		</div>
		
				 </MuiThemeProvider>
		</div>
		);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
