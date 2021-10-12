import React, { Component } from "react";
import WithData from "../utils/WithData";

import MainPag from "./MainPag";
import Section from "./Section";

//	<Data relpath={relpath} />
class MainContainer extends Component {
	render() {
		const { relpath, top, bottom, pageKey, name } = this.props;
		return (
			<main>
				<h1>{name}</h1>

				<Section relpath={relpath} pageKey={pageKey} name={name} {...top} />

				<Section relpath={relpath} pageKey={pageKey} name={name} {...bottom} />

				<MainPag />
			</main>
		);
	}
}

export default new WithData(MainContainer);
