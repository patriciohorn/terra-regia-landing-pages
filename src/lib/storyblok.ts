// src/lib/storyblok.ts
import { useStoryblokApi } from "@storyblok/astro";

export const sbVersion = import.meta.env.DEV ? "draft" : "published";

export async function getStory(slug: string) {
  const sbApi = useStoryblokApi();

  try {
    const { data } = await sbApi.get(`cdn/stories/${slug}`, {
      version: sbVersion,
    });
    return data.story;
  } catch (err: any) {
    if (err?.status === 404) {
      throw new Error(
        `Storyblok story "${slug}" not found (version: ${sbVersion}). ` +
          `Check the folder slug and that the story is published.`,
      );
    }
    throw err;
  }
}
