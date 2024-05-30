import { PodcastModel } from "../models/PodcasrModel";

export interface IDatabaseContract {
  getAllPodcast(): Promise<PodcastModel[]>;
  subscribeToPodcast(podcast: PodcastModel): Promise<void>;
  isReady: boolean
}