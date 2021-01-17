import { JobModel } from "../models/iJobModel";

export interface iJobCreator {
    jobGenerator(t: JobModel[]): void;
    postData(): void;
}