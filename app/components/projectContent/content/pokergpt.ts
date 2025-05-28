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
  // Add more sections as needed
];
