// Default axios config File
import axios from "./config";
import { ISSUE } from "./urls";
import { Result } from "@type/responseType";
import { Issue, IssueResult } from "@type/issue";

const Iss = {
  /**
   * @param {any} params : Search conditions
   * @returns {Array}
   */
  /**get mamber data */
  async getDataList(params?: any): Promise<Result<Issue>> {
    try {
      return await axios.get(ISSUE.GET_LIST, { params });
    } catch (e: any) {
      console.log(e);
      return e.message;
    }
  },
  /**
   * Request Map Data
   * @param {any} params : Search conditions
   * @returns {Array}
   */
  async getData(issueId?: number): Promise<Result<IssueResult>> {
    try {
      return await axios.get(ISSUE.GET_ONE + issueId);
    } catch (e) {
      return Promise.reject({});
    }
  },
  /**
   * update Map Data
   * @param {Issue} params
   * @returns
   */
  async insert(issue: any): Promise<Result<Issue>> {
    try {
      return await axios.post(ISSUE.INSERT, issue);
    } catch (e) {
      return Promise.reject([]);
    }
  },
  /**
   * update Map Data
   * @param {Issue} params
   * @returns
   */
  async update(issue: Issue) {
    try {
      return await axios.put(ISSUE.UPDATE + issue.issueId, issue);
    } catch (e) {
      return Promise.reject([]);
    }
  },

  async getWriteData(params?: any): Promise<Result<Issue>> {
    try {
      return await axios.get(ISSUE.GET_WRITE, { params });
    } catch (e: any) {
      console.log(e);
      return e.message;
    }
  },
};

export default Iss;
