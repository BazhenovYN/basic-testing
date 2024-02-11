import axios from 'axios';
import { BASE_URL, THROTTLE_TIME, throttledGetDataFromApi } from './index';

// const mockedGet = jest.fn();
// jest.mock('axios', () => {
//   const originalModule = jest.requireActual<typeof import('axios')>('axios');
//   return {
//     ...originalModule,
//     create: () => mockedGet(),
//   };
// });

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const spy = jest.spyOn(axios, 'create');
    const relativePath = '/users';

    await throttledGetDataFromApi(relativePath);

    jest.advanceTimersByTime(THROTTLE_TIME);

    expect(spy).toBeCalledWith({ baseURL: BASE_URL });
  });

  test('should perform request to correct provided url', async () => {});

  test('should return response data', async () => {
    // Write your test here
  });
});
