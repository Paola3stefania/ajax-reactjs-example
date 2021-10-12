import React, { Component } from "react";

import MainPag from "./MainPag";
import Section from "./Section";

//	<Data relpath={relpath} />
class MainContainer extends Component {
	render() {
		const { baseURL, relpath, top, bottom, name } = this.props;
		return (
			<main>
				<h1>{name}</h1>

				<Section baseURL={baseURL} relpath={relpath} {...top} />

				<Section baseURL={baseURL} relpath={relpath} {...bottom} />

				<MainPag />
			</main>
		);
	}
}

export default MainContainer;
