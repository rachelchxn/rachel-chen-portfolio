import { Section } from "../types";

export const pokergpt: Section[] = [
  {
    id: "overview",
    title: "Overview",
    content: [
      {
        type: "h2",
        content:
          "PokerGPT started with the goal of leveraging AI to provide poker players a low-cost, beginner-friendly and way to improve their skills.",
      },
      {
        type: "p",
        content:
          "There is no convenient and low-cost solution to support beginner to intermediate poker players in their learning. This gap in the market for beginner-friendly, intuitive poker agents, was the starting point for PokerGPT.",
      },
      {
        type: "h4",
        content: "Solution",
      },
      {
        type: "h2",
        content:
          "PokerGPT: An AI-powered poker coach providing tailored feedback and analysis.",
      },
      {
        type: "image",
        content: "/projects/pokergpt/1-pokergpt-overview.svg",
      },
      {
        type: "h4",
        content: "Outcomes",
      },
      {
        type: "p",
        content:
          "PokerGPT is live and has been making waves in the Toronto poker community.",
      },
      {
        type: "image",
        content: "/projects/pokergpt/2-outcomes.svg",
      },
      {
        type: "divider",
        content: "",
      },
    ],
  },
  {
    id: "initial-observations",
    title: "Initial Observations",
    content: [
      {
        type: "h2",
        content:
          "There is no convenient and low-cost solution to support beginner to intermediate poker players in their learning.",
      },
      {
        type: "p",
        content:
          "Poker solvers are hard to interpret and usually require pros, like coaches, to extract useful insights. Initial discussions with casual to semi-professional poker players and discovery led us to uncover 2 key pain points:",
      },
      {
        type: "h4",
        content: "Pain Points",
      },
      {
        type: "bullet-list",
        content: [
          "1. Solvers are hard to use",
          "Poker solvers are hard to interpret and usually require pros, like coaches, to extract useful insights.",
          "2. Coaching is not accessible",
          "Poker coaching is expensive and generally not accessible or convenient.",
        ],
      },
      {
        type: "quote",
        content:
          "Key Insight: Some players are prompting ChatGPT in a way to get hand analysis, pot odds, game feedback, and playing strategies!",
      },
      {
        type: "p",
        content:
          "These pain points were not exactly surprising to us since we knew what the market looked like at that moment: crazy complex poker solvers, courses and bootcamps that are time and money-intensive, and coaches that cost an arm and a leg. However, these user insights validated our solution and unique position in the market, as well as validated large language models as a tool for poker learning.",
      },
    ],
  },
  {
    id: "market-research",
    title: "Market Research",
    content: [
      {
        type: "image",
        content: "/projects/pokergpt/3-market-position.svg",
      },
      {
        type: "h4",
        content: "Poker Solvers",
      },
      {
        type: "p",
        content:
          "Platforms like GTO Wizard, Deepsolver, and more recently, Ruse AI provide interfaces to complex mathematical models to calculate hand analysis, pot odds, and Game Theory Optimal (GTO) strategies. These tools are robust but often require a solid understanding of poker theory to interpret and apply effectively, making them less suitable for beginners or intermediate players.",
      },
      {
        type: "h4",
        content: "Courses & Bootcamps",
      },
      {
        type: "p",
        content:
          "Poker bootcamps and online courses provide structured learning for players at various stages of their poker journey. However, they are also costly and require a lot of time commitment, which is often not what beginner/casual players are looking for.",
      },
      {
        type: "h4",
        content: "Personal Coaching",
      },
      {
        type: "p",
        content:
          "One-on-one personalized coaching can be highly effective in improving poker skills. however, it often requires a significant time investment for sessions, homework, and study, and a huge cost investment as coaches generally go for hundreds of dollars per hour of coaching.",
      },
      {
        type: "p",
        content: "",
      },
      {
        type: "p",
        content: "",
      },
      {
        type: "p",
        content:
          "And from there, we had a clear idea of the problem were solving and the market gap we were filling.",
      },
      {
        type: "image",
        content: "/projects/pokergpt/4-hmw.svg",
      },
    ],
  },
  {
    id: "becoming-my-users",
    title: "Becoming My Users",
    content: [
      {
        type: "h2",
        content: "I didn't know how to play poker... so I learned!",
      },
      {
        type: "p",
        content:
          "Starting with Youtube videos, playing online, and I started to learn the basics and eventually threw in (and lost) a few hundred dollars.",
      },
      {
        type: "image",
        content: "/projects/pokergpt/5-learning.svg",
      },
    ],
  },
  {
    id: "competitor-research",
    title: "Competitor Research",
    content: [
      {
        type: "h2",
        content:
          "Competitor interfaces are highly complex and not beginner-friendly",
      },
      {
        type: "image",
        content: "/projects/pokergpt/6-competitors.svg",
      },
      {
        type: "p",
        content:
          "The current poker solvers on the market are highly complex and mathematical - great for the serious poker people, but not for those who want a way to casually learn and improve their performance.",
      },
    ],
  },
  {
    id: "solution",
    title: "Solution",
    content: [
      {
        type: "h2",
        content:
          "What if we moved towards a familiar, chat-like interface for poker analytics and strategies?",
      },
      {
        type: "p",
        content: "And to answer that question, the wireframing began!",
      },
      {
        type: "image",
        content: "/projects/pokergpt/7-mvp.svg",
      },
      {
        type: "p",
        content:
          "The concept of an AI chatbot for poker solving had already been validated by our initial user research, but this also led us to another problem...",
      },
      {
        type: "p",
        content: "",
      },
      {
        type: "p",
        content: "",
      },
      {
        type: "h2",
        content:
          "How might we provide a better poker learning experience than ChatGPT?",
      },
      {
        type: "p",
        content:
          "I started by exploring a design for a more structured and visual interface tailored to poker analysis responses.",
      },
      {
        type: "image",
        content: "/projects/pokergpt/8-chatgpt-interface.svg",
      },
      {
        type: "p",
        content:
          "Next, our team looked into streamlining the flow of prompting with a built-in hand history template that makes it easy to copy over past games and suggested prompts to get the conversations started.",
      },
      {
        type: "image",
        content: "/projects/pokergpt/9-feature-exploration.svg",
      },
    ],
  },
  {
    id: "final-designs",
    title: "Final Designs",
    content: [
      {
        type: "h2",
        content: "We prioritized a simple, familiar, and clean interface.",
      },
      {
        type: "p",
        content:
          "Our main interface is a chat with structured responses and the ability to set game formations. This offers a familiar chat-style experience with poker-tailored features.",
      },
      {
        type: "image",
        content: "/projects/pokergpt/10-mockups.svg",
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
          "Keep cutting it down the to MLP.",
          "We were laser-focused on shipping a Minimum Lovable Product, and that's what allowed us to shi[] fast and quickly gather feedback.",
          "User research is not enough.",
          "Observing user stories and conducting interviews is not enough. Espcecially for a niche market, you need to become your users to truly empathize with their needs.",
        ],
      },
    ],
  },
];
