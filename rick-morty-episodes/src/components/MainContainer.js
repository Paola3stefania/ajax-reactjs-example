import React, { Component } from "react";

import MainPag from "./MainPag";
import Section from "./Section";

class MainContainer extends Component {
	render() {
		const { baseURL, relpath, top, bottom, name, match } = this.props;
		return (
			<main>
				<h1 className="text-center">{name}</h1>

				{top && (
					<Section baseURL={baseURL} relpath={relpath} {...top} match={match} />
				)}

				{bottom && (
					<Section
						baseURL={baseURL}
						relpath={relpath}
						{...bottom}
						match={match}
					/>
				)}

				<MainPag />
			</main>
		);
	}
}

export default MainContainer;
