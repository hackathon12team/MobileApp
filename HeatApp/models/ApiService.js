import { ApiClient } from './ApiClient';

/** A wrapper class to construct, send and handle server queries. */
export class ApiService {
  constructor() {
    this.apiClient = new ApiClient();
  }

  register(gender, birthDate, weight, height, physicalActivity, targetWeight) {
    return this.apiClient.post('/registration', {
      gender,
      birthDate,
      weight,
      height,
      physicalActivity,
      targetWeight,
    });
  }
}
