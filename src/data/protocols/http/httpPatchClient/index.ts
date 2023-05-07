export interface HttpPatchClient {
  patch(params: HttpPatchClient.Params): Promise<any>;
}

export namespace HttpPatchClient {
  export type Params = {
    url: string;
    body?: any;
    headers?: {
      [key: string]: string
    }
  }
}