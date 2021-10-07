import React, { Component } from "react";
import CardList from "./CardList";

export default class Section extends Component {
	render() {
		const { relpath, hasCardList, image, modelist, pageKey, params } =
			this.props;
		return (
			<div>
				{hasCardList && (
					<CardList
						image={image}
						modelist={modelist}
						relpath={relpath}
						pageKey={pageKey}
						params={params}
					/>
				)}
			</div>
		);
	}
}
