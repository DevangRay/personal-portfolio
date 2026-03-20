export type ExperienceEntry = {
    role: string
    company: string
    startDate: string
    endDate: string
    bullets: string[]
    tags: string[]
}

export type EducationEntry = {
    degree: string
    institution: string
    startDate: string | null
    endDate: string | null
}

export type ResumeData = {
    name: string
    tagline: string
    contact: {
        email: string | null
        location: string | null
        linkedin: string | null
        github: string | null
        website: string | null
    }
    experience: ExperienceEntry[]
    education: EducationEntry[]
    skills: string[]
    lastUpdated: string
}