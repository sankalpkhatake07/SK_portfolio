"use client";

import dynamic from "next/dynamic";

const AssistantChat = dynamic(
  () => import("@/components/assistant/assistant-chat").then((module) => module.AssistantChat),
  { ssr: false }
);

export function AssistantLauncher() {
  return <AssistantChat />;
}
