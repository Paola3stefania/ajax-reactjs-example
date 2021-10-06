import "./App.css";
import Data from "./utils/Data";
import { PARAM as config } from "./utils/appConfig";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import CardBox from "./components/CardBox";
import CardList from "./components/CardList";

export default class App extends Component {
	render() {
		return (
			<div key={"appContainer"} className="app-container">
				<Header />
				<Router {...config}>
					{config.map((obj) => (
						<Route
							key={obj.key}
							exact
							path={obj.path}
							name={obj.name}
							render={(routeProps) => (
								<>
									<MainContainer
										{...routeProps}
										relPath={obj.apiPartialURI}
										pageDesc={obj.description}
									/>
								</>
							)}
						/>
					))}
					<Route>
						<Data {...{ relPath: "/episode" }} />
					</Route>
				</Router>
				<Footer />
			</div>
		);
	}
}
