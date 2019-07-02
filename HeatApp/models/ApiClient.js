/** A base class to send queries to the backend. */
export class ApiClient {

  HOST = 'https://heat-backend.herokuapp.com';

	get(url) {
		return fetch(this.HOST + url)
      .then(response => response.json());
	}

	post(url, body) {
		return fetch(this.HOST + url, {
  			method: 'POST',
  			headers: {
  				Accept: 'application/json',
  				'Content-Type': 'application/json',
  			},
  			body: JSON.stringify(body),
  		})
      .then(response => response.json());
	}
}
