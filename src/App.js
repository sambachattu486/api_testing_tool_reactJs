import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import CreateNoteComponent from "./components/CreateNoteComponent";
// import DeleteNoteComponent from "./components/DeleteNoteComponent";
import ListNotesComponent from "./components/ListNotesComponent";
import EditNoteComponent from "./components/EditNoteComponent";
import FetchData from "./components/fetch";
import SelectComponent from "./components/SelectComponent"
import "./App.css";

class App extends Component {
	render() {
		return (
			// <Router>
			// 	<div className="App">
			// 		<nav className="App-header">
			// 			<li>
			// 				<Link to="/">Create Notes</Link>
			// 			</li>
			// 			<li>
			// 				<Link to="/edit">
			// 					Edit Notes
			// 				</Link>
			// 			</li>
			// 			{/* <li>
			// 				<Link to="/delete">
			// 					Delete Notes
			// 				</Link>
			// 			</li> */}
            // 			<li>
			// 				<Link to="/list">
			// 					List Notes
			// 				</Link>
			// 			</li>
			// 		</nav>
			// 		<Routes>
			// 			<Route exact path="/" element={< CreateNoteComponent/>}></Route>
			// 			<Route exact path="/edit" element={<EditNoteComponent />}></Route>
			// 			{/* <Route exact path="/delete" element={<DeleteNoteComponent />}></Route> */}
            // <Route exact path="/list" element={<ListNotesComponent />}></Route>
			// 		</Routes>
			// 	</div>
			// </Router>
			// <FetchData/>
			<SelectComponent/>
		);
	}
}

export default App;

