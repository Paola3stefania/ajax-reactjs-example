import React, { Component } from "react";

import CardList from "./CardList";

class Section extends Component {
	render() {
		const {
			baseURL,
			relpath,
			hasCardList,
			image,
			modelist,
			pageKey,
			params,
			name,
		} = this.props;

		return (
			<div>
				{hasCardList && (
					<CardList
						image={image}
						modelist={modelist}
						relpath={relpath}
						pageKey={pageKey}
						params={params}
						name={name}
						baseURL={baseURL}
					/>
				)}
			</div>
		);
	}
}

export default Section;
