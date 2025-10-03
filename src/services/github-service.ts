import { IProject } from "@/types/project-type";

interface GithubRepoApiResponse {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
    html_url: string;
}

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchSelectedProjects = async (
    username: string,
    repoNames: string[]
): Promise<IProject[]> => {
    const promises = repoNames.map((repoName) =>
        fetch(`https://api.github.com/repos/${username}/${repoName}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (!response.ok) throw new Error(`Falha ao buscar ${repoName}`);
            return response.json() as Promise<GithubRepoApiResponse>;
        })
    );

    const results = await Promise.allSettled(promises);
    const successfulProjects: IProject[] = results
        .filter(
            (result): result is PromiseFulfilledResult<GithubRepoApiResponse> =>
                result.status === "fulfilled"
        )
        .map(({ value: repo }) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            topics: repo.topics,
            url: repo.html_url,
        }));

    return successfulProjects;
};