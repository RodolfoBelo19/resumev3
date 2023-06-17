import { IAbout } from "./IAbout";
import { BaseRepository } from "../../infra/repositories/BaseRepository";

export class AboutRepository extends BaseRepository<IAbout> {
  async save(about: IAbout): Promise<void> {
    if (about._id) {
      const res = await this.httpClient.patch({
        url: `${process.env.NEXT_PUBLIC_API_URL}/about/${about._id}`,
        body: about,
      });

      if (res.status === 200) {
        return Promise.resolve();
      }

      return Promise.reject();
    }

    const res = await this.httpClient.post({
      url: `${process.env.NEXT_PUBLIC_API_URL}/about`,
      body: about,
    });

    if (res.status === 201) {
      return Promise.resolve();
    }

    return Promise.reject();
  }
}