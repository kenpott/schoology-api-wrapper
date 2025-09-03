import axios from "axios";

/**
 * A wrapper for the Schoology API using OAuth 1.0.
 * - Support:
 *   - No auth
 *   - auth through cookies (not best pratice)
 *
 */
export class Schoology {
  consumer_key: string;
  consumer_secret: string;
  domain: string;

  /**
   * Create a new Schoology API client.
   *
   * @param consumer_key - Your Schoology API consumer key.
   * @param consumer_secret - Your Schoology API consumer secret.
   * @param domain - Your Schoology domain (e.g., "lms.lausd.net").
   */
  constructor(consumer_key: string, consumer_secret: string, domain: string) {
    this.consumer_key = consumer_key;
    this.consumer_secret = consumer_secret;
    this.domain = domain;
  }
  _getHeaders(): { [key: string]: string } {
    return {
      Authorization:
        `OAuth realm="Schoology API",` +
        `oauth_consumer_key="${this.consumer_key}",` +
        `oauth_nonce="${Math.random().toString(36).slice(2)}",` +
        `oauth_signature="${this.consumer_secret}%26",` +
        `oauth_signature_method="PLAINTEXT",` +
        `oauth_timestamp="${Math.floor(Date.now() / 1000)}",` +
        `oauth_version="1.0"`,
      "Content-Type": "application/json",
    };
  }
  async makeRequest(
    endpoint: string,
    method: string,
    headers: { [key: string]: string }
  ) {
    const result = await axios.request({
      method: method.toUpperCase(),
      baseURL: "https://api.schoology.com/v1",
      url: endpoint,
      headers: headers,
    });
    return result.data;
  }
  async getCourse(course_id: number): Promise<Object> {
    return this.makeRequest(
      `/endpoint/${course_id}`,
      "GET",
      this._getHeaders()
    );
  }
  async getCourseFolders(course_id: number): Promise<object> {
    return this.makeRequest(
      `/sections/${course_id}/folders`,
      "GET",
      this._getHeaders()
    );
  }
  async getCourseAssignments(course_id: number): Promise<object> {
    return this.makeRequest(
      `/sections/${course_id}/assignments`,
      "GET",
      this._getHeaders()
    );
  }
  async getCourseAssignment(
    course_id: number,
    assignment_id: number
  ): Promise<object> {
    return this.makeRequest(
      `/sections/${course_id}/folders`,
      "GET",
      this._getHeaders()
    );
  }
  async getCourseUpdates(course_id: number): Promise<object> {
    return this.makeRequest(
      `/sections/${course_id}/updates`,
      "GET",
      this._getHeaders()
    );
  }
  async getCourseMembers(course_id: number): Promise<object> {
    return this.makeRequest(
      `/sections/${course_id}/members`,
      "GET",
      this._getHeaders()
    );
  }
  async getCourseMember(course_id: number, user_id: number): Promise<object> {
    return this.makeRequest(
      `/sections/${course_id}/enrollments/${user_id}`,
      "GET",
      this._getHeaders()
    );
  }
  async getGroup(group_id: number) {
    return this.makeRequest(`/groups/${group_id}`, "GET", this._getHeaders());
  }
  async getGroupMembers(group_id: number) {
    return this.makeRequest(
      `/groups/${group_id}/enrollments`,
      "GET",
      this._getHeaders()
    );
  }
  async getGroupMember(group_id: number, user_id: number) {
    return this.makeRequest(
      `/groups/${group_id}/enrollments/${user_id}`,
      "GET",
      this._getHeaders()
    );
  }
  async getGroupUpdates(group_id: number) {
    return this.makeRequest(
      `/groups/${group_id}/updates`,
      "GET",
      this._getHeaders()
    );
  }
  async getGroupResources(group_id: number) {
    return this.makeRequest(
      `/groups/${group_id}/resources`,
      "GET",
      this._getHeaders()
    );
  }
}
