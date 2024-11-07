import { Project } from "@/types";
import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "q7a7buiu",
    dataset: "production",
    apiVersion: "2024-05-05",
  });

  return client.fetch(
    groq`*[_type == "project"] | order(_updatedAt desc){
        _id,
        _createdAt,
        slug,
        name,
        headline,
        overview,
        timeline,
        company,
        projecttype,
        roles,
        tags, 
        links,
        "slug": slug.current,
        "image": image.asset->url,
        primarycolour,
        secondarycolour,
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
    groq`*[_type == "project" && slug.current == $slug] | order(_updatedAt desc)[0]{
            _id,
            _createdAt,
            slug,
            name,
            headline,
            overview,
            timeline,
            company,
            projecttype,
            roles,
            tags, 
            links,
            "slug": slug.current,
            "image": image.asset->url,
            primarycolour,
            secondarycolour,
            url,
            content
        }`,
    { slug }
  );
}

export async function getNextProjects(slug: string) {
  const client = createClient({
    projectId: "q7a7buiu",
    dataset: "production",
    apiVersion: "2024-05-05",
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current != $slug && slug.current != "heyhr" ] | order(_updatedAt desc){
            _id,
            _createdAt,
            slug,
            name,
            headline,
            overview,
            timeline,
            company,
            projecttype,
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
    groq`*[_type == "more"] | order(_updatedAt desc){
        _id,
        _createdAt,
        name,
        headline,
        badge,
        tags, 
        links,
        "image": image.asset->url,
    }`
  );
}
