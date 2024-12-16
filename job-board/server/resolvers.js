import { getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";

export const resolvers = {
	Query: {
		jobs: async () => getJobs(),
		// return [
		// 	{
		// 		id: "test-id",
		// 		title: "JobX",
		// 		extraProp: "something",
		// 		// description: "desc",
		// 	},
		// 	{
		// 		id: "some-other-id",
		// 		title: "JobY",
		// 	},
		// ];
	},

	Job: {
		date: (job) => toIsoDate(job.createdAt),
		company: (job) => getCompany(job.companyId),
	},
};

function toIsoDate(job) {
	return job.slice(0, "yyyy-mm-dd".length);
}
