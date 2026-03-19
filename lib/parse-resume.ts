import Anthropic from "@anthropic-ai/sdk";
import "dotenv/config";
import { readFile } from "node:fs/promises";
import * as fs from "fs";
import * as path from "path"
import { extractText, getDocumentProxy } from 'unpdf';
import { fileURLToPath } from "node:url";
import { ExtractText, ClaudeOutput } from "../types/claude-types";

const output_file_name = "resume_highlights.json"
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RESUME_PATH = path.join(ROOT, "public/resources", "Resume.pdf");
const OUTPUT_PATH = path.join(ROOT, "public/resources", output_file_name);

async function extractPDFText(): Promise<ExtractText> {
    const pdf_buffer = await readFile(RESUME_PATH);
    const pdf_object = await getDocumentProxy(new Uint8Array(pdf_buffer));
    const { totalPages, text } = await extractText(pdf_object, { mergePages: true });

    return { totalPages, text };
}

async function extractDetailsFromPDF(pdf_text: string): Promise<ClaudeOutput> {
    const llm_prompt = `You are a resume parser. Extract structured JSON data from the resume text below.

Return ONLY a valid JSON object with this exact shape — no markdown, no explanation, no backticks:

{
  "name": "string",
  "tagline": "string (a short 1-sentence professional summary, written in third person)",
  "contact": {
    "email": "string or null",
    "location": "string or null",
    "linkedin": "string or null",
    "github": "string or null",
    "website": "string or null"
  },
  "experience": [
    {
      "role": "string",
      "company": "string",
      "startDate": "string (e.g. Jan 2022)",
      "endDate": "string (e.g. Dec 2024) or 'Present'",
      "bullets": ["string", "string"],
      "tags": ["string"] (3-5 short skill/topic tags extracted from the bullets)
    }
  ],
  "education": [
    {
      "degree": "string",
      "institution": "string",
      "startDate": "string or null",
      "endDate": "string or null"
    }
  ],
  "skills": ["string"],
  "lastUpdated": "string (today's date as YYYY-MM-DD)"
}

Rules:
- experience and education should be in reverse-chronological order (most recent first)
- tags should be concise keywords (e.g. "React", "team leadership", "API design")
- If a field is not present in the resume, use null for strings or [] for arrays
- Do not invent information that isn't in the resume

Resume text: [${pdf_text}]`
    const client = new Anthropic();

    // const claude_message = await client.messages.create({
    //     model: "claude-sonnet-4-20250514",
    //     max_tokens: 2048,
    //     messages: [
    //         {
    //             role: "user",
    //             content: llm_prompt
    //         }
    //     ]
    // });
    // return claude_message;
    const test_claude_message = {
        model: 'claude-sonnet-4-20250514',
        id: 'msg_019C5LyRdGqGRrNqPCGyJX1u',
        type: 'message',
        role: 'assistant',
        content: [
            {
                type: 'text',
                text: '{\n' +
                    '  "name": "Devang Ray",\n' +
                    '  "tagline": "Software engineer specializing in full-stack development, microservices architecture, and customer-facing applications with experience at Swift and CargoLabs.",\n' +
                    '  "contact": {\n' +
                    '    "email": "devangray624@gmail.com",\n' +
                    '    "location": "Centreville, VA",\n' +
                    '    "linkedin": "linkedin.com/in/DevangRay",\n' +
                    '    "github": "github.com/DevangRay",\n' +
                    '    "website": "devangray.dev"\n' +
                    '  },\n' +
                    '  "experience": [\n' +
                    '    {\n' +
                    '      "role": "Software Engineer",\n' +
                    '      "company": "Swift",\n' +
                    '      "startDate": "Jul 2025",\n' +
                    '      "endDate": "Present",\n' +
                    '      "bullets": [\n' +
                    '        "Spearheaded the development and deployment of a customer-facing help website, reducing customer support calls by 14%.",\n' +
                    '        "Designed a component-based architecture that facilitated modular code and reduced maintenance time by 34%.",\n' +
                    '        "Developed a secure backend service as a RESTful API to provide business logic and content to the website."\n' +
                    '      ],\n' +
                    '      "tags": ["React", "RESTful API", "component architecture", "customer support", "backend development"]\n' +
                    '    },\n' +
                    '    {\n' +
                    '      "role": "Software Engineer",\n' +
                    '      "company": "CargoLabs",\n' +
                    '      "startDate": "Jan 2025",\n' +
                    '      "endDate": "Jun 2025",\n' +
                    '      "bullets": [\n' +
                    '        "Led the release of an entirely new customer portal that centralized business-critical functions to enhance client efficiency and operations transparency, benefitting over 1200 active users.",\n' +
                    `        "Developed and deployed over 12 new services within a fully microservices-based architecture, expanding the company's marketplace functionality and increasing growth by 7%.",\n` +
                    `        "Upgraded the company's back-end code to securely handle high-risk credentials, eliminating potential vulnerabilities and streamlining the company's key-rotation procedures."\n` +
                    '      ],\n' +
                    '      "tags": ["microservices", "customer portal", "security", "marketplace", "backend"]\n' +
                    '    },\n' +
                    '    {\n' +
                    '      "role": "Software Engineering Intern",\n' +
                    '      "company": "Swift",\n' +
                    '      "startDate": "Jun 2024",\n' +
                    '      "endDate": "Aug 2024",\n' +
                    '      "bullets": [\n' +
                    '        "Transformed a 13-year-old legacy knowledge portal into a modern and responsive web application with improved UX and navigation, reducing customer support requests by 12.3%.",\n' +
                    '        "Designed and implemented a keyword search feature for improved document navigation, improving user search times from 10 minutes to 1.5 minutes on average."\n' +
                    '      ],\n' +
                    '      "tags": ["legacy modernization", "UX design", "search functionality", "web application", "responsive design"]\n' +
                    '    },\n' +
                    '    {\n' +
                    '      "role": "Software Engineering Intern",\n' +
                    '      "company": "Swift",\n' +
                    '      "startDate": "Jun 2023",\n' +
                    '      "endDate": "Aug 2023",\n' +
                    '      "bullets": [\n' +
                    `        "Provided data analysis and visualization of the performance of the company's most critical product, to proactively identify potential system errors, reducing propagated failures by 2.6%."\n` +
                    '      ],\n' +
                    '      "tags": ["data analysis", "visualization", "system monitoring", "error prevention"]\n' +
                    '    },\n' +
                    '    {\n' +
                    '      "role": "Senior Teaching Assistant",\n' +
                    '      "company": "University of Virginia Computer Science Department",\n' +
                    '      "startDate": "Aug 2022",\n' +
                    '      "endDate": "Dec 2024",\n' +
                    '      "bullets": [\n' +
                    '        "Tutored 30+ undergraduate students, teaching best practices with Git, navigating Linux/UNIX systems, and debugging Assembly, C, and full-stack Java coding projects.",\n' +
                    '        "Graded over 800 assignments and assisted in writing comprehensive exam questions covering Computer Architecture, x86-64 Assembly, both C and Java coding languages, and Software Design Patterns."\n' +
                    '      ],\n' +
                    '      "tags": ["teaching", "Git", "Linux", "Assembly", "Java"]\n' +
                    '    },\n' +
                    '    {\n' +
                    '      "role": "Software Engineering Intern",\n' +
                    '      "company": "EMS LINQ, Inc.",\n' +
                    '      "startDate": "Jun 2022",\n' +
                    '      "endDate": "Aug 2022",\n' +
                    '      "bullets": [\n' +
                    `        "Upgraded 10% of backend endpoints used by the company's primary product, strengthening the protection of their customers' confidential educational data.",\n` +
                    '        "Contributed to a 12.5% increase in average weekly productivity for the team."\n' +
                    '      ],\n' +
                    '      "tags": ["backend endpoints", "data security", "productivity", "educational data"]\n' +
                    '    }\n' +
                    '  ],\n' +
                    '  "education": [\n' +
                    '    {\n' +
                    '      "degree": "Bachelor of Science in Computer Science",\n' +
                    '      "institution": "University of Virginia School of Engineering & Applied Science",\n' +
                    '      "startDate": "Aug 2021",\n' +
                    '      "endDate": "Dec 2024"\n' +
                    '    }\n' +
                    '  ],\n' +
                    '  "skills": ["Java", "Python", "JavaScript", "TypeScript", "Dart", "C", "C#", "AWS ECS", "AWS Lambda", "AWS Cognito", "AWS Secrets Manager", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firebase", "Django", "Flask", "Next.js", "React", "Docker", "Spring", "Spring Boot"],\n' +
                    '  "lastUpdated": "2024-12-28"\n' +
                    '}'
            }
        ],
        stop_reason: 'end_turn',
        stop_sequence: null,
        usage: {
            input_tokens: 1492,
            cache_creation_input_tokens: 0,
            cache_read_input_tokens: 0,
            cache_creation: { ephemeral_5m_input_tokens: 0, ephemeral_1h_input_tokens: 0 },
            output_tokens: 1247,
            service_tier: 'standard',
            inference_geo: 'not_available'
        }
    };
    return test_claude_message;
}

function parseClaudeOutput(claude_output: ClaudeOutput): void {
    const resume_highlights = claude_output.content[0].text;
    fs.writeFileSync(OUTPUT_PATH, resume_highlights);
}

async function main(): Promise<void> {
    console.log(process.env.ANTHROPIC_API_KEY)
    const { totalPages, text } = await extractPDFText();
    console.log(`Extracted PDF Text. totalPages: ${totalPages}, text: ${text}`)

    const claude_output = await extractDetailsFromPDF(text);
    console.log(`Got Claude output.`)

    parseClaudeOutput(claude_output);
    console.log("Wrote JSON object to file")
}

main().catch((error) => {
    console.error("Encountered error in file: " + error)
})