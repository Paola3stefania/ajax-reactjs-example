//falta poner cuales parametros quiero desplegar en cada seccion, tanto en top como en bottom.
export const PARAM = [
	{
		id: 0,
		key: "home_config",
		pageKey: "home",
		name: "Home Page",
		description: "Displays Episode List",
		top: {},
		bottom: {
			hasCardList: true,
			modelist: true,
			title: true,
			params: ["air_date", "episode", "linkeable"],
		},
		path: "/",
		apiPartialURI: "/episode",
	},
	{
		id: 1,
		key: "episode_config",
		pageKey: "episode",
		name: "Episode Page",
		description: "Displays Single Episode",
		top: {
			hasCardList: true,
			image: true,
			title: true,
			modelist: false,
			params: ["id", "name"],
		},
		bottom: {
			hasCardList: true,
			modelist: true,
			title: false,
			filter: "character",
			params: ["id", "name"],
		},
		path: "/episode/:id",
		apiPartialURI: "/episode/1",
	},
	{
		id: 2,
		key: "all_locations_config",
		pageKey: "location-list",
		name: "All Locations Page",
		description: "Displays Location List",
		top: {},
		bottom: {
			modelist: true,
			hasCardList: true,
			params: ["created", "dimension", "type", "linkeable"],
			title: true,
		},
		path: "/locations-all",
		apiPartialURI: "/location",
	},
	{
		id: 3,
		key: "location_config",
		pageKey: "location",
		name: "Location Page",
		description: "Displays Single Location",
		top: {
			hasCardList: true,
			image: true,
			modelist: false,
			params: ["id", "name"],
			linkeable: false,
			title: true,
		},
		bottom: {
			hasCardList: true,
			modelist: true,
			title: false,
			params: ["id", "name", "linkeable"],
		},
		path: "/location/:id",
		apiPartialURI: "/location/1",
	},
	{
		id: 4,
		key: "all_characters_config",
		pageKey: "character-list",
		name: "All Characters Page",
		description: "Displays Characters List",
		top: {},
		bottom: {
			modelist: true,
			image: true,
			title: true,
			hasCardList: true,
			params: [
				"name",
				"location",
				"status",
				"type",
				"gender",
				"species",
				"linkeable",
			],
		},
		path: "/characters-all",
		apiPartialURI: "/character",
	},
	{
		id: 5,
		key: "character	_config",
		pageKey: "character",
		name: "Character Page",
		description: "Displays Single Character",
		top: {
			hasCardList: true,
			image: true,
			title: true,
			params: ["id", "name"],
		},
		bottom: {
			hasCardList: true,
			title: false,
			modelist: true,
			params: ["episode"],
		},
		path: "/character/:id",
		apiPartialURI: "/character/1",
	},
];

export const GENERAL = { baseURL: "https://rickandmortyapi.com/api" };
