import { saveOrUpdateResource } from '../index';
import { AxiosHttpClient } from '../../../infra/http/axiosHttpClient';

jest.mock('../../../infra/http/axiosHttpClient');

const httpClient = new AxiosHttpClient();

describe('saveOrUpdateResource', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new resource', async () => {
    const values = { _id: '1231233' };
    const url = 'http://localhost:3010/resources';
    const mockPost = jest.fn();
    httpClient.post = mockPost;
    const mockResponse = {};
    mockPost.mockResolvedValueOnce(mockResponse);
    const res = await saveOrUpdateResource('resources', values);
    expect(mockPost).toHaveBeenCalledWith({ url, body: values });
  });
});
