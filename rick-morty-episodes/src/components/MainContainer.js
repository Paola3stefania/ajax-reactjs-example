import React, { Component } from "react";

import MainPag from "./MainPag";
import Section from "./Section";

//	<Data relpath={relpath} />
class MainContainer extends Component {
	render() {
		const { baseURL, relpath, top, bottom, name, match } = this.props;
		return (
			<main>
				<h1>{name}</h1>

				<Section baseURL={baseURL} relpath={relpath} {...top} match={match} />

				<Section
					baseURL={baseURL}
					relpath={relpath}
					{...bottom}
					match={match}
				/>

				<MainPag />
			</main>
		);
	}
}

export default MainContainer;
