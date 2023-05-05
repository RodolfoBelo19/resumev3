import { DetectedImage } from "@/domain/entities/detectedImage";

export interface SendImage {
  send(params: SendImage.Params): Promise<DetectedImage>;
}

export namespace SendImage {
  export type Params = {
    file: File;
    description: string;
  }
}