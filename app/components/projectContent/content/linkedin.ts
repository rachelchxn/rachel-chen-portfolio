import { Section } from "../types";

export const linkedin: Section[] = [
  {
    id: "overview",
    title: "Overview",
    content: [
      {
        type: "h2",
        content: "Job searching is draining, tedious, and time-consuming.",
      },
      {
        type: "p",
        content:
          "It's no secret that job searching sucks. Especially in an increasingly competitive market, it can feel impossible to make time for the excruciating process of securing a job. Seeing this challenge in all of my friends, I decided to choose this as my project for my Ivey Product Fellowship capstone.",
      },
      {
        type: "h4",
        content: "Solution",
      },
      {
        type: "h2",
        content:
          "In-Platform Job Tracking: Empowering users with application management and retaining them on LinkedIn",
      },
      {
        type: "image",
        content: "/projects/linkedin/1-linkedin-overview.svg",
      },
      {
        type: "h4",
        content: "Outcomes",
      },
      {
        type: "h2",
        content: "Presenting to product leaders on Demo Day!",
      },
      {
        type: "image",
        content: "/projects/linkedin/2-demo-day.svg",
      },
      {
        type: "divider",
        content: "",
      },
    ],
  },
  {
    id: "initial-findings",
    title: "Initial Findings",
    content: [
      {
        type: "h2",
        content: "LinkedIn can do better for job seekers.",
      },
      {
        type: "p",
        content:
          "Job-hunting is not easy, and with LinkedIn being the largest professional networking platform, there is an opportunity to improve the job-searching experience",
      },
      {
        type: "image",
        content: "/projects/linkedin/3-purpose.svg",
      },
      {
        type: "p",
        content:
          "LinkedIn aims to maximize productivity, success, and economic opportunity for everyone. However, there the platform clearly falls short when we look at the experience of job-seekers, particularly students, new grads, and individuals early in their careers, who are faced with an increasingly difficult market to enter.",
      },
      {
        type: "image",
        content: "/projects/linkedin/4-hmw.svg",
      },
    ],
  },
  {
    id: "problem-space",
    title: "Into the Problem Space",
    content: [
      {
        type: "h2",
        content: "There are many stages in the job-searching journey.",
      },
      {
        type: "p",
        content:
          "I broke down the job-searching journey into 3 key phases and identified barriers and challenges as opportunities.",
      },
      {
        type: "image",
        content: "/projects/linkedin/5-jtbd.svg",
      },
      {
        type: "p",
        content:
          "I found that most of the job tracking solutions on the market are not user-friendly and not integrated with the LinkedIn platform. This makes it difficult for users to manage their applications and stay organized.",
      },

      {
        type: "p",
        content:
          "Next, I evaluated where in the journey lies the opportunity to create the greatest impact, considering both user value and existing constraints.",
      },
      {
        type: "image",
        content: "/projects/linkedin/6-stages.svg",
      },
      {
        type: "p",
        content:
          "I found that most of the job tracking solutions on the market are not user-friendly and not integrated with the LinkedIn platform. This makes it difficult for users to manage their applications and stay organized.",
      },
      {
        type: "quote",
        content:
          "Key Insight: We can have the greatest impact for the least effort and cost by tackling the application tracking stage of the user journey.",
      },
      {
        type: "p",
        content:
          "The highest opportunity for impact is in the application-tracking stage as it is something LinkedIn as a platform has the most control over and is a clear pain point for users. With this insight, I outlined our project's goals:",
      },
      {
        type: "h4",
        content: "Goals",
      },
      {
        type: "bullet-list",
        content: [
          "Minimize redundancy",
          "Minimize redundant and repetitive tasks needed in tracking job applications",
          "Maximize efficiency",
          "Maximize the efficiency of tracking and viewing information on job applications",
          "Improve user experience",
          "Improve user experience and overall feelings toward the job-hunting process",
        ],
      },
    ],
  },
  {
    id: "user-research",
    title: "User Research",
    content: [
      {
        type: "h2",
        content: "People are giving up on tracking job applications!",
      },
      {
        type: "p",
        content:
          "By interviewing users and observing their job-tracking processes, I found that:",
      },
      {
        type: "bullet-list",
        content: [
          "6/7 have used tracking tools",
          "such as Notion, Excel, and dedicated job-tracking products like Simplify to manage the jobs postings they apply to.",
          "5/6 of them have given up",
          "on these tools due to the the repetitive work required and lack of value from tracking, but still hope to better manage their applications.",
        ],
      },
      {
        type: "h4",
        content: "Pain Points",
      },
      {
        type: "bullet-list",
        content: [
          "Lack of time",
          "to manage the amount of applications needed to land a job.",
          "Repetitive Processes",
          "of applying to jobs and keeping track of job applications.",
          "Confusion",
          "the crowded and unintuitive user interface.",
        ],
      },
    ],
  },
  {
    id: "solution",
    title: "Solution",
    content: [
      {
        type: "h2",
        content: "The solution started with a value proposition.",
      },
      {
        type: "image",
        content: "/projects/linkedin/7-value-proposition.svg",
      },
      {
        type: "p",
        content:
          "The current user journey involves going back in forth between job boards like LinkedIn and external tracking tools like Excel, Google Sheets, and Notion. With a new streamlined, centralized journey of job tracking, we can solve user pain points while keeping them on LinkedIn, reducing the time spent away from the platform while job-searching.",
      },
    ],
  },
  {
    id: "reflection",
    title: "Reflection",
    content: [
      {
        type: "h2",
        content: "What I learned",
      },
      {
        type: "bullet-list",
        content: [
          "Don't reinvent the wheel.",
          "Innovation is important, but so is familiarity. I found that the best approach was to bring a familiar experience to a place where it was needed.",
          "Design meets business goals.",
          "As a designer, we speak for the user, but work for the business. In this project, meeting the user's needs was the best way to keep users on the platform and increase engagement.",
        ],
      },
    ],
  },
];
