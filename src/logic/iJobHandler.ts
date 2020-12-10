import { JobModel } from "../models/iJobModel";

export interface iJobCreator {
    jobGenerator(t: JobModel[]): void;
    postData(): void;
    nameGenerator(t: string, s: string): string;
}