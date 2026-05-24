declare const process: {
  env: Record<string, string | undefined>;
};

declare module "sanity" {
  export function defineConfig(config: unknown): unknown;
}

declare module "@langchain/core/messages" {
  export class AIMessage {
    constructor(content: string);
    content: string;
  }
  export class HumanMessage {
    constructor(content: string);
    content: string;
  }
  export class SystemMessage {
    constructor(content: string);
    content: string;
  }
}

declare module "@langchain/core/prompts" {
  export class MessagesPlaceholder {
    constructor(variableName: string);
  }
  export class ChatPromptTemplate {
    static fromMessages(messages: unknown[]): ChatPromptTemplate;
    pipe(model: unknown): { invoke(input: Record<string, unknown>): Promise<{ content: { toString(): string } }> };
  }
}

declare module "@langchain/openai" {
  export class ChatOpenAI {
    constructor(options: { apiKey?: string; model?: string; temperature?: number });
  }
}
