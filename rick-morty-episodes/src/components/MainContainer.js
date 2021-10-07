import React, { Component } from "react";

import MainPag from "./MainPag";
import Section from "./Section";

//	<Data relpath={relpath} />
export default class MainContainer extends Component {
	render() {
		const { relpath, top, bottom, pageKey } = this.props;
		return (
			<main>
				<h1>Im the Main Container</h1>
				------- SECTION TOP -------------
				<Section relpath={relpath} pageKey={pageKey} {...top} />
				------- SECTION BOTTOM -----------
				<Section relpath={relpath} pageKey={pageKey} {...bottom} />
				-------- MAINPAG ----------------
				<MainPag />
			</main>
		);
	}
}
