import { AboutService } from "../services/AboutService";

export class GetAboutUseCase {
  private aboutService: AboutService;

  constructor() {
    this.aboutService = new AboutService();
  }

  async execute(id: string) {
    return await this.aboutService.getAbout(id);
  }
}