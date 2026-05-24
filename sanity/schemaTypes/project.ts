export const projectType = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "stack", title: "Stack", type: "array", of: [{ type: "string" }] },
    { name: "features", title: "Features", type: "array", of: [{ type: "string" }] },
    { name: "github", title: "GitHub URL", type: "url" },
    { name: "demo", title: "Live Demo URL", type: "url" },
    { name: "imageUrl", title: "Image URL", type: "url" },
    { name: "orderRank", title: "Order Rank", type: "number" },
  ],
};
