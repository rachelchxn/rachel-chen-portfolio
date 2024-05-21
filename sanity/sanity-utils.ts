import { Project } from "@/types";
import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "q7a7buiu",
    dataset: "production",
    apiVersion: "2024-05-05",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        slug,
        name,
        headline,
        overview,
        timeline,
        roles,
        tags, 
        links,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "q7a7buiu",
    dataset: "production",
    apiVersion: "2024-05-05",
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            slug,
            name,
            headline,
            overview,
            timeline,
            roles,
            tags, 
            links,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  );
}

export async function getMore() {
  const client = createClient({
    projectId: "q7a7buiu",
    dataset: "production",
    apiVersion: "2024-05-05",
  });

  return client.fetch(
    groq`*[_type == "more"]{
        _id,
        _createdAt,
        name,
        headline,
        overview,
        tags, 
        links,
        "image": image.asset->url,
    }`
  );
}
