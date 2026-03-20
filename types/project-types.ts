export type ProjectData = {
    id: string,
    title: string,
    tagline: string,
    description: string,
    tags: string[],
    featured: boolean,
    liveUrl: string | null,
    githubUrl: string,
    screenshot: string,
    span: number
}