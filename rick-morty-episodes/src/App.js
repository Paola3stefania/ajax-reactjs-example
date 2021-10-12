import "./App.css";

import { PARAM as config, GENERAL as basis } from "./utils/appConfig";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

export default class App extends Component {
	render() {
		return (
			<div key="appContainer" className="app-container">
				<Router {...config}>
					<Header />
					{config.map((obj) => (
						<Route
							key={obj.key}
							exact
							path={obj.path}
							name={obj.name}
							render={(routeProps) => (
								<>
									<MainContainer
										baseURL={basis.baseURL}
										relpath={obj.apiPartialURI}
										key={obj.pageKey}
										{...obj}
										{...routeProps}
									/>
								</>
							)}
						/>
					))}
				</Router>
				<Footer />
			</div>
		);
	}
}
