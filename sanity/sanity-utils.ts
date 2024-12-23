import { Project } from "@/types";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "q7a7buiu",
  dataset: "production",
  apiVersion: "2024-05-05",
});

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(featured desc){
        _id,
        _createdAt,
        slug,
        order,
        name,
        headline,
        overview,
        timeline,
        company,
        projecttype,
        roles,
        team,
        tags, 
        links,
        "slug": slug.current,
        "image": image.asset->url,
        primarycolour,
        secondarycolour,
        url,
        intro,
        content
    }`
  );
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug] | order(featured desc)[0]{
            _id,
            _createdAt,
            slug,
            order,
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
  return client.fetch(
    groq`*[_type == "project" && slug.current != $slug ] | order(featured desc){
            _id,
            _createdAt,
            slug,
            order,
            name,
            headline,
            overview,
            timeline,
            company,
            projecttype,
            secondarycolour,
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
