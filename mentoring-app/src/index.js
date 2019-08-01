import React, {Component} from "react";
import ReactDOM from "react-dom";
import './index.css';
import SavedList from "./component/SavedList";
import NavBar from './component/NavBar'
import HomeContent from './component/HomeContent';
import Image from './component/Image'
import Box from '@material-ui/core/Box';


function App() {
	return (
		<>
		<NavBar />
		<Box className="space" component="span" m={1}></Box>
		<div className='rowC'>
		<Image />
		<HomeContent />
		</div>
		<div className="container my-2">
		<SavedList />

		</div>
		</>
		);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
