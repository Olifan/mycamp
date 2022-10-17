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
          teamMember: {
            fields: ["title", "subtitle"],
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
}
