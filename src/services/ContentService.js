import { stringify } from "qs";
import StrapiApiService from "./StrapiApiService";

export default class ContentService {
	api = new StrapiApiService();

	getHomePage() {
		const query = stringify(
			{
				populate: {
					polaroidPhotoHeaderLeft: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					polaroidPhotoHeaderRight: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					registration: {
						fields: ["registrationDate", "registrationSeason", "registrationOpen"],
					},
					// Row 1
					campProgram: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					palaroidFirstRow: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					about: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					// Row 2
					palaroidSecondRowLeft: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					whatToTake: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					palaroidSecondRowRight: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					// Row 3
					location: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					palaroidThirdRow: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					team: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					//Row 4
					palaroidFourthRowLeft: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					foto: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					palaroidFourthRowRight: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					//Row 5
					contacts: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					palaroidFifthRow: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					forParents: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true, // prettify URL
			}
		);

		return this.api.get(`home-page?${query}`);
	}

	getOurTeam() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					team_members: {
						fields: ["name", "title", "description"],
						populate: {
							photo: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);

		return this.api.get(`our-team?${query}`);
	}

	getShift() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					shifts: {
						fields: ["title", "description", "startDate", "endDate"],
						populate: {
							mainImage: "*",
							shiftTab: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);
		return this.api.get(`registration-page?${query}`);
	}

	getProgramPage() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					camp_programs: {
						fields: ["programTime", "programTitle", "programDescription"],
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);
		return this.api.get(`program-page?${query}`);
	}

	getAboutPage() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					OurMission: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					OurMissionPhoto: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					AboutCamp: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					AboutCampPhoto: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					MedicalCare: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					MedicalCarePhoto: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					RestWithUs: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					RestWithUsPhoto: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					Questions: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);

		return this.api.get(`about-page?${query}`);
	}

	getThingsPage() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					thing_to_takes: {
						fields: ["title"],
					},
					thing_not_takes: {
						fields: ["title"],
					},
					importantNote: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					leftNotePhoto: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
					rightNotePhoto: {
						fields: ["title"],
						populate: {
							photo: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);
		return this.api.get(`things-page?${query}`);
	}

	getContactsPage() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					commonQuestions: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
					contacts: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);
		return this.api.get(`contacts-page?${query}`);
	}

	getPhotoPage() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					photo_albums: {
						fields: ["title"],
						populate: {
							photos: "*",
							prewThumb: "*",
							coverPhoto: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);
		return this.api.get(`photo-page?${query}`);
	}

	getLocationPage() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					locations: {
						fields: ["headTitle"],
						populate: {
							territory: {
								fields: ["title", "description"],
								populate: {
									icon: "*",
								},
							},
							rooms: {
								fields: ["title", "description"],
								populate: {
									icon: "*",
								},
							},
							food: {
								fields: ["title", "description"],
								populate: {
									icon: "*",
								},
							},
							territoryPalaroid: {
								fields: ["title"],
								populate: {
									photo: "*",
								},
							},
							roomsPalaroid: {
								fields: ["title"],
								populate: {
									photo: "*",
								},
							},
							foodPalaroid: {
								fields: ["title"],
								populate: {
									photo: "*",
								},
							},

							territoryPhoto: "*",
							foodPhoto: "*",

							roomsPhoto: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);
		return this.api.get(`location-page?${query}`);
	}

	getParentsPage() {
		const query = stringify(
			{
				populate: {
					pageTitle: {
						fields: ["title", "subtitle"],
					},
					for_parents: {
						fields: ["title", "description"],
						populate: {
							icon: "*",
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		);
		return this.api.get(`parents-page?${query}`);
	}

	postRequest(data) {
		return this.api.post(`requests?`, data);
	}
}
