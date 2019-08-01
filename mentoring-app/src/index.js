import React, {Component} from "react";
import ReactDOM from "react-dom";
import './index.css';
import SavedList from "./component/SavedList";
import NavBar from './component/NavBar'
import HomeContent from './component/HomeContent';
import Image from './component/Image'


function App() {
	return (
		<>
		<NavBar />
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
