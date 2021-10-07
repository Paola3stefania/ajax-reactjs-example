import React, { Component } from "react";
import Data from "../utils/Data";
import CardBox from "./CardBox";
import CardList from "./CardList";
import MainPag from "./MainPag";
import Section from "./Section";

export default class MainContainer extends Component {
	render() {
		const { relPath, top, bottom } = this.props;
		return (
			<main>
				<h1>Im the Main Container</h1>
				--------------------
				<p>TOP</p>
				-------SECTION TOP-------------
				<Section relPath={relPath} {...top} />
				-------SECTION BOTTOM-------------
				<Section relPath={relPath} {...bottom} />
				------------------------
				{top.hasCardList && (
					<CardList modelist={top.modelist} relPath={relPath} />
				)}
				{top.hasCardBox && (
					<CardBox modelist={top.modelist} relPath={relPath} />
				)}
				-----------------------------
				<p>BOTTOM</p>
				{bottom.hasCardList && (
					<CardList modelist={bottom.modelist} relPath={relPath} />
				)}
				{bottom.hasCardBox && (
					<CardBox modelist={bottom.modelist} relPath={relPath} />
				)}
				<MainPag />
				------------------------ PRUEBA ------------------------------------
				<Data relPath={relPath} />
			</main>
		);
	}
}
