import React, { Component } from "react";
import Data from "../utils/Data";
import CardBox from "./CardBox";
import CardList from "./CardList";
import MainPag from "./MainPag";

export default class MainContainer extends Component {
	render() {
		const { hasCardBox, hasCardList, relPath } = this.props;
		return (
			<main>
				<h1>Im the Main Container</h1>
				<Data relPath={relPath} />
				{hasCardBox && <CardBox relPath={relPath} />}
				{hasCardList && <CardList relPath={relPath} />}
				<MainPag />
			</main>
		);
	}
}
