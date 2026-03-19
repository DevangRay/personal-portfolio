type ClaudeContent = {
    type: string,
    text: string
}

type ClaudeCache = {
    ephemeral_5m_input_tokens: number,
    ephemeral_1h_input_tokens: number
}

type ClaudeUsage = {
    input_tokens: number,
    cache_creation_input_tokens: number,
    cache_read_input_tokens: number,
    cache_creation: ClaudeCache,
    output_tokens: number,
    service_tier: string,
    inference_geo: string
}

export type ClaudeOutput = {
    model: string,
    id: string,
    type: string,
    role: string,
    content: ClaudeContent[],
    stop_reason: string,
    stop_sequence: string | null,
    usage: ClaudeUsage
}

export type ExtractText = {
    totalPages: number,
    text: string
}