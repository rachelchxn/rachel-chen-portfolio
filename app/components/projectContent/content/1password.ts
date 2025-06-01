import { Section } from "../types";

export const onePassword: Section[] = [
  {
    id: "overview",
    title: "Overview",
    content: [
      {
        type: "h2",
        content:
          "1Password is the leading enterprise password manager, now building an end-to-end security ecosystem.",
      },
      {
        type: "p",
        content:
          "During my internship, I had the chance to lead design on projects that contribute to this new direction for the company.",
      },
      {
        type: "image",
        content: "/projects/1password/1-1password-overview.svg",
      },
      {
        type: "h4",
        content: "Outcomes",
      },
      {
        type: "bullet-list",
        content: [
          "Shipped macOS native compatibility for the core autofill product",
          "With dev hand-off and adoption considerations.",
          "Enhanced the onboarding experience for B2B end-users",
          "Since the product is shifting to B2B security solutions from B2C password management.",
          "Introduced in-app issue-reporting and feedback collection",
          "Working closely with engineering for technical constraints.",
        ],
      },
      {
        type: "quote",
        content:
          "Note: This case study will focus on my work on macOS native compatibility for the core autofill product!",
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
          "Users are asking for macOS support, and competitors are offering it...",
      },
      {
        type: "p",
        content:
          "We knew that this was something 1Password needed to stay competitive. That meant that my job was to painstakingly download and try all these other password managers to understand the features and experiences they offer.",
      },
      {
        type: "image",
        content: "/projects/1password/2-competitor-research.svg",
      },
      {
        type: "h4",
        content: "Insights",
      },
      {
        type: "bullet-list",
        content: [
          "Safari acts as a desktop app and will show native autofill features",
          "1Password for Safari may clash with native macOS support--we need to work around this.",
          "The appearance of the dropdown is inconsistent",
          "Desktop apps don't consistently trigger autofilling. This is a risk as users may think it is 1Password's fault.",
          "Apple's Passwords app is a threat to our B2C password manager",
          "This makes native autofilling for macOS an urgent feature.",
        ],
      },
      {
        type: "p",
        content:
          "With these research insights, we realized the need to further think through the interactions and complexities of native autofilling, 1Password for Safari, and Apple's Passwords app.",
      },
    ],
  },
  {
    id: "managing-the-clash",
    title: "Managing the Clash",
    content: [
      {
        type: "h2",
        content:
          "Native autofill, 1Password for Safari, and Apple's Passwords app are all competing for the same space.",
      },
      {
        type: "image",
        content: "/projects/1password/3-clash.svg",
      },
      {
        type: "quote",
        content:
          "Key Insight! We can encourage native macOS autofilling for non-1Password-for-Safari users, and address visual clashes in the UI.",
      },
      {
        type: "p",
        content:
          "After landing on a solution from discussions with the team, I got to outlining the flows.",
      },
    ],
  },
  {
    id: "designing-the-flows",
    title: "Designing the Flows",
    content: [
      {
        type: "h2",
        content: "User experience is 1Password's unique value proposition.",
      },
      {
        type: "p",
        content:
          "I wanted to make sure that the design decisions I made were consistent, and that the user experience was seamless. Using the existing autofill flows as a reference, I was able to design the flows for the new native autofill experience.",
      },
      {
        type: "image",
        content: "/projects/1password/4-flows.svg",
      },
      {
        type: "p",
        content:
          "And after talking through these flows with the engineers, I got to the design specs:",
      },
      {
        type: "image",
        content: "/projects/1password/5-specs.svg",
      },
    ],
  },
  {
    id: "dealing-with-adoption",
    title: "Dealing with Adoption",
    content: [
      {
        type: "h2",
        content: "How will users discover this new macOS autofill feature?",
      },
      {
        type: "p",
        content:
          "This feature was something we expected power users to adopt, and knew that it wouldn’t be needed for all users. I explored how we might introduce this feature to new and existing users:",
      },
      {
        type: "image",
        content: "/projects/1password/6-discoverability.svg",
      },
      {
        type: "p",
        content:
          "We decided that the sweet spot would be to make it an optional onboarding step that lives permanently in settings.",
      },
      {
        type: "quote",
        content:
          "Key Insight! We can use optional onboarding steps for other tasks, too!",
      },
      {
        type: "p",
        content:
          "Actions like “Add your family to 1Password” are of similar importance and urgency, making it the perfect opportunity to roll out suggested/optional steps in the “Guided Setup” flow.",
      },
      {
        type: "image",
        content: "/projects/1password/7-exploration.svg",
      },
      {
        type: "p",
        content:
          "Sharing my work with the team and design mentors, we decided that the media cards would be the best approach to create a clear visual distinction from the default, mandatory onboarding steps. These cards would also work well for the profile page in the app, where the suggestions would persist until the user dismisses them or turns them off.",
      },
      {
        type: "p",
        content:
          "Next, I explored how we would create intuitive settings for this feature:",
      },
      {
        type: "image",
        content: "/projects/1password/8-settings.svg",
      },
      {
        type: "p",
        content:
          "By grouping settings together, we can create a more scannable and intuitive screen for users.",
      },
    ],
  },
  {
    id: "final-design",
    title: "Final Design",
    content: [
      {
        type: "h2",
        content:
          "From onboarding, to settings, to profile page, and to the autofill experience!",
      },
      {
        type: "video",
        content: "/projects/1password/9-final-flow.mp4",
      },
      {
        type: "h4",
        content: "Autofill Flows",
      },
      {
        type: "demo",
        content: "/projects/1password/autofill.mp4",
        caption: "Autofilling login credentials on macOS",
      },
      {
        type: "demo",
        content: "/projects/1password/save-passkey.mp4",
        caption: "Saving a new passkey on macOS",
      },
      {
        type: "demo",
        content: "/projects/1password/sign-in-passkey.mp4",
        caption: "Signing in with a passkey on macOS",
      },
    ],
  },
];
