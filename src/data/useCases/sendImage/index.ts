import { HttpPostClient } from "@/data/protocols/http/httpPostClient";
import { DetectedImage } from "@/domain/entities/detectedImage";
import { SendImage } from "@/domain/useCases/sendImage";

export class RemoteSendImage implements SendImage {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async send({ file, description }: SendImage.Params): Promise<DetectedImage> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);

    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })

    const { label, timestamp } = httpResponse.body;

    return {
      description,
      label,
      timestamp
    }
  }
}