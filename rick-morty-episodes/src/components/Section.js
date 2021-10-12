import React, { Component } from "react";

import CardList from "./CardList";

class Section extends Component {
	render() {
		const { baseURL, relpath, hasCardList, title, image, modelist, params } =
			this.props;

		return (
			<div>
				{hasCardList && (
					<CardList
						image={image}
						title={title}
						modelist={modelist}
						relpath={relpath}
						params={params}
						baseURL={baseURL}
					/>
				)}
			</div>
		);
	}
}

export default Section;
