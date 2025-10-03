export interface IProject {
    id: number;
    name: string;
    description: string | null;
    stars: number;
    forks: number;
    language: string | null;
    topics: string[];
    url: string;
}