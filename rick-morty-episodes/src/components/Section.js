import React, { Component } from "react";
import CardList from "./CardList";
import CardBox from "./CardBox";

export default class Section extends Component {
	render() {
		const { relPath, hasCardList, hasCardBox, modelist } = this.props;
		return (
			<div>
				{hasCardList && <CardList modelist={modelist} relPath={relPath} />}
				{hasCardBox && <CardBox modelist={modelist} relPath={relPath} />}
			</div>
		);
	}
}
