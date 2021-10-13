import React, { Component } from "react";

import CardList from "./CardList";

class Section extends Component {
	render() {
		const {
			baseURL,
			relpath,
			hasCardList,
			title,
			image,
			modelist,
			match,
			params,
		} = this.props;

		return (
			<div className="d-flex justify-content-center">
				{hasCardList && (
					<CardList
						image={image}
						title={title}
						modelist={modelist}
						relpath={relpath}
						params={params}
						baseURL={baseURL}
						match={match}
					/>
				)}
			</div>
		);
	}
}

export default Section;
