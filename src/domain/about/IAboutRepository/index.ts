import { IAbout } from "@/domain/about/IAbout";

export interface IAboutRepository {
  save(about: IAbout): Promise<void>;
}