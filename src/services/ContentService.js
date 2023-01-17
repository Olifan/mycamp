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
          shifts: {
            fields: ["title", "description", "startDate", "endDate"],
            populate: {
              mainImage: "*",
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

  postRequest(data) {
    // const query = stringify(
    //   {
    //     populate: {
    //       requests: {
    //         fields: ["name", "email", "telephone", "shift"]
    //       },
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );
    return this.api.post(`requests?`, data);
  }
}
