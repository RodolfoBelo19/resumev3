import axios, { AxiosResponse } from "axios";
import { HttpPostClient } from "@/data/protocols/http/httpPostClient";

export class AxiosHttpClient implements HttpPostClient {
  async post(params: HttpPostClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.post(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return axiosResponse;
  }
}