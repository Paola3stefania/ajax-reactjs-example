import React, { Component } from "react";

import MainPag from "./MainPag";
import Section from "./Section";

//	<Data relpath={relpath} />
class MainContainer extends Component {
	render() {
		const { baseURL, relpath, top, bottom, pageKey, name } = this.props;
		return (
			<main>
				<h1>{name}</h1>

				<Section
					baseURL={baseURL}
					relpath={relpath}
					pageKey={pageKey}
					name={name}
					{...top}
				/>

				<Section
					baseURL={baseURL}
					relpath={relpath}
					pageKey={pageKey}
					name={name}
					{...bottom}
				/>

				<MainPag />
			</main>
		);
	}
}

export default MainContainer;
