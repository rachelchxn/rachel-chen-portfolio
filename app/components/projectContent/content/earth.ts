import { Section } from "../types";

export const earth: Section[] = [
  {
    id: "overview",
    title: "Overview",
    content: [
      {
        type: "h2",
        content:
          "Onova's hackathons are facilitated by 3rd party platforms that are too disconnected, hindering organizer workflows and participant experience.",
      },
      {
        type: "p",
        content:
          "Onova is an innovation consultancy that hosts large-scale, internal hackathons for some of the world's largest companies (like Capgemini, BMO, and McDonald’s!). However, navigating the hackathon logistical ecosystem was painful. For every client hackathon, various 3rd party platforms were pieced together by Onova’s event-organizing team to fulfill all the event requirements.",
      },
      { type: "h4", content: "Solution" },
      {
        type: "h2",
        content:
          "Earth: An all-in-one platform for hosting large-scale hybrid hackathons.",
      },
      {
        type: "p",
        content:
          "Earth is a unified platform that allows Onova to host large-scale hybrid hackathons. From registration and  team-formation, to project submission and judging, Earth supports every step of the hackathon lifecycle.",
      },
      {
        type: "image",
        content: "/projects/earth/1-earth-overview.png",
      },
      { type: "h4", content: "Outcomes" },
      {
        type: "bullet-list",
        content: [
          "8,000+ users",
          "from Fortune 500 companies",
          "7+ events",
          "supported end-to-end",
          "97% of users",
          "would recommend Earth to a friend",
        ],
      },
      {
        type: "h4",
        content: "Serving companies like...",
      },

      {
        type: "image",
        content: "/projects/earth/2-companies.png",
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
        content:
          "The lack of cohesion between platforms used to run events made the experience confusing and frustrating.",
      },
      {
        type: "p",
        content:
          "With my stakeholders and PM, we used past survey data to identify key pain points throughout the event journey, setting a clear direction for our new product and the problems to focus on solving.",
      },
      {
        type: "image",
        content: "/projects/earth/3-painpoints.svg",
      },
    ],
  },
  {
    id: "design-system",
    title: "Design System",
    content: [
      {
        type: "h2",
        content:
          "I built a design system to support our rapid product development.",
      },
      {
        type: "p",
        content:
          "When I came onto this project, the existing system was not built for scale. I started by working with the team to identify brand keywords, which were used to set a moodboard to guide the visual direction. In this brainstorming process, we kept 2 key considerations in mind:",
      },
      {
        type: "image",
        content: "/projects/earth/4-moodboard.svg",
      },
      {
        type: "p",
        content:
          "With the brand vision and considerations, I went on to develop a simple design system to streamline the development of the core product features and allow for consistency across the platform.",
      },
      {
        type: "image",
        content: "/projects/earth/5-design-system.svg",
      },
    ],
  },
  {
    id: "live-dashboard",
    title: "Live Dashboard",
    content: [
      {
        type: "h2",
        content:
          "Participants need a place that acts as the home page for their hackathon experience.",
      },
      {
        type: "p",
        content:
          "To solve the problem of users having difficulty navigating the sites and information during the hackathons, I worked on providing a centralized system for participants to access all things related to the event. I joined the team early on to take over from the previous designer, so this process began with identifying areas of improvement from the previous design.I explored new layouts and presented alternatives to the internal team. These focused on displaying the core features of the page and improving on the problems of the use of space and hierarchy.",
      },
      {
        type: "image",
        content: "/projects/earth/6-layout.svg",
      },

      {
        type: "h4",
        content: "Fixing the scroll challenge!",
      },
      {
        type: "p",
        content:
          "A challenge we encountered was designing the page in a way that would allow for the most important content to be presented at the top without disrupting the flow for users to get the content they are looking for.",
      },
      {
        type: "image",
        content: "/projects/earth/7-scroll-challenge.svg",
      },
      {
        type: "p",
        content:
          "Our solution was a simple collapse and expand toggle to allow users to hide the 'important but not constantly used' header to get to the information they want to see.",
      },
      {
        type: "video",
        content: "/projects/earth/8-final.mov",
      },
    ],
  },
  {
    id: "beta-launch",
    title: "Beta Launch & Testing",
    content: [
      {
        type: "h2",
        content: "We went live with Earth at a real student hackathon.",
      },
      {
        type: "p",
        content:
          "During the hackathon, I conducted user interviews, gathering valuable feedback to inform our next steps in Earth’s development process. We were able to test the platform with real users and get feedback on the platform. We were able to make changes based on the feedback and improve the platform.",
      },
      {
        type: "image",
        content: "/projects/earth/9-beta-launch.svg",
      },
    ],
  },
  {
    id: "iterating",
    title: "Iterating with Insights",
    content: [
      {
        type: "h2",
        content: "Key Finding: Users are not discovering the live dashboard.",
      },
      {
        type: "p",
        content:
          "From user interviews and Google Analytics data, we found that users are not finding their way to the 'Live Now' dashboard page and that the 'Team & Submission' page name could be improved for clarity.",
      },
      {
        type: "image",
        content: "/projects/earth/10-nav-problem.svg",
      },
      {
        type: "p",
        content:
          "I identified that there was a lot of room for improvement in the overall architecture of Earth that would make navigation clearer and more intuitive for users, while also solving the clients' need to have private and public content pages.",
      },
      {
        type: "image",
        content: "/projects/earth/11-info-arch.svg",
      },
      {
        type: "p",
        content:
          "With the new structure, page naming, and visual changes to the navigation bar, we saw a massive improvement in the discovery of the live dashboard page at our next event (the big launch!)",
      },
      {
        type: "image",
        content: "/projects/earth/12-nav-results.svg",
      },
    ],
  },
  {
    id: "big-launch",
    title: "The Big Launch!",
    content: [
      {
        type: "h2",
        content:
          "We launched Earth at the Capgemini x Google Cloud Gen AI Hackathon 2023.",
      },
      {
        type: "p",
        content:
          "Our official launch for Earth served Capgemini and Google Cloud's partnered Gen AI Hackathon event with participation from over 1000 employees from these companies!",
      },
      {
        type: "video",
        content: "/projects/earth/13-launch.mp4",
      },
      {
        type: "p",
        content:
          "With Earth, we were able to facilitate a successful event that met our client's business goals:",
      },
      {
        type: "image",
        content: "/projects/earth/14-goals.svg",
      },
      {
        type: "p",
        content:
          "The success of this hackathon sparked the beginning of a long-term business relationship and recurring events for the future.",
      },
    ],
  },
];
