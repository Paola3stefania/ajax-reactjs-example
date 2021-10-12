import axios from "axios";
import React, { Component } from "react";

function WithData(ComponenteNuevo) {
	class NewComponent extends Component {
		constructor(props) {
			super(props);
			this.state = {
				single: {},
				all: [],
				pages: 0,
				next: null,
			};
		}

		async componentDidMount() {
			try {
				const { baseURL, relpath } = this.props;

				const client = axios.create({
					baseURL: baseURL,
				});

				const response = await client.get(relpath); //obj
				response.data.results
					? this.setState({
							all: response.data.results,
							pages: response.data.info.pages,
							next: response.data.info.next,
					  })
					: this.setState({
							single: response.data,
					  });
			} catch (error) {}
		}

		render() {
			return <ComponenteNuevo {...this.props} {...this.state} />;
		}
	}
	return NewComponent;
}

export default WithData;
