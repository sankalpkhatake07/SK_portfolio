import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { portfolioEnv } from "@/lib/env";

const systemPrompt = `You are Sankalp Khatake's AI portfolio assistant.
You answer questions about his background as an AI/ML & Generative AI Engineer.
Keep answers concise, confident, and product-oriented.
Highlight these strengths when relevant: LLMs, RAG, LangChain, AI Agents, Computer Vision, YOLO, MLOps, IoT, AWS, hackathon wins, copyright projects.
If asked to contact Sankalp, point users to the contact section and email address.`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      message?: string;
      history?: Array<{ role: "user" | "assistant"; content: string }>;
    };

    if (!body.message) {
      return Response.json({ error: "Missing message." }, { status: 400 });
    }

    if (!portfolioEnv.openAIKey) {
      return Response.json({
        reply:
          "I can help with Sankalp's AI/ML, GenAI, CV, IoT, and project experience. Configure OPENAI_API_KEY to enable live responses.",
      });
    }

    const model = new ChatOpenAI({
      apiKey: portfolioEnv.openAIKey,
      model: portfolioEnv.openAIModel,
      temperature: 0.3,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", systemPrompt],
      new MessagesPlaceholder("history"),
      ["human", "{input}"],
    ]);

    const conversation = (body.history ?? []).slice(-8).map((entry) =>
      entry.role === "assistant" ? new AIMessage(entry.content) : new HumanMessage(entry.content)
    );

    const chain = prompt.pipe(model);
    const result = await chain.invoke({ history: conversation, input: body.message });

    return Response.json({ reply: result.content.toString() });
  } catch {
    return Response.json({
      reply:
        "The assistant is temporarily unavailable, but Sankalp's portfolio covers AI/ML, GenAI, Computer Vision, IoT, and cloud-native systems.",
    });
  }
}
