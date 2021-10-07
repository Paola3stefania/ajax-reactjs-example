import React, { Component } from "react";
import Data from "../utils/Data";
import MainPag from "./MainPag";
import Section from "./Section";

export default class MainContainer extends Component {
	render() {
		const { relPath, top, bottom } = this.props;
		return (
			<main>
				<h1>Im the Main Container</h1>
				------- SECTION TOP -------------
				<Section relPath={relPath} {...top} />
				------- SECTION BOTTOM -----------
				<Section relPath={relPath} {...bottom} />
				-------- MAINPAG ----------------
				<MainPag />
				------------------------ PRUEBA -------------
				<Data relPath={relPath} />
			</main>
		);
	}
}
