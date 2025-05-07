import { GraphQLClient } from 'graphql-request';

// Create a GraphQL client instance with GitHub API endpoint
export const githubClient = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    // Use GitHub personal access token from environment variable
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

// GraphQL query to fetch repositories
export const getRepositoriesQuery = `
  query GetUserRepositories($username: String!, $count: Int!) {
    user(login: $username) {
      repositories(
        first: $count, 
        orderBy: {field: UPDATED_AT, direction: DESC}, 
        privacy: PUBLIC,
        ownerAffiliations: [OWNER]
      ) {
        nodes {
          id
          name
          description
          url
          homepageUrl
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          languages(first: 5) {
            nodes {
              name
              color
            }
          }
          repositoryTopics(first: 5) {
            nodes {
              topic {
                name
              }
            }
          }
          openGraphImageUrl
          updatedAt
          isArchived
        }
      }
    }
  }
`;

// Type definitions for repository data
export interface GithubRepository {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  languages: {
    nodes: {
      name: string;
      color: string;
    }[];
  };
  repositoryTopics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
  openGraphImageUrl: string;
  updatedAt: string;
  isArchived: boolean;
}

export interface GithubRepositoriesResponse {
  user: {
    repositories: {
      nodes: GithubRepository[];
    };
  };
}

/**
 * Fetches GitHub repositories for a specified user
 * @param username GitHub username
 * @param count Number of repositories to fetch
 * @returns Array of GitHub repositories
 */
export async function fetchRepositories(username: string, count: number = 10): Promise<GithubRepository[]> {
  try {
    const data = await githubClient.request<GithubRepositoriesResponse>(
      getRepositoriesQuery,
      {
        username,
        count
      }
    );
    
    // Filter out archived repositories
    return data.user.repositories.nodes.filter(repo => !repo.isArchived);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}
