export const projects = [
  {
    title: "ASL Translator",
    description:
      "Bridging Communication Gaps With Machine Learning and Computer Vision",
    paragraph:
      "I have always admired the beauty of human connection in bringing people together. In an effort to increase inclusivity and sprout more meaningful connections, I have set out to make learning sign language more accessible to all. \n\nThis project is a real-time ASL translator that detects hand landmarks using Mediapipe to predict the letter being signed by the user through a Convoluted Neural Network.",
    tags: ["AI", "Computer Vision", "Python"],
    imageURL: "/asl-translator.svg",
    colour: "#E2EDF6",
    disabled: false,
    links: [
      {
        site: "Github",
        url: "https://github.com/rachelchxn/asl-translator-deployed",
      },
    ],
  },
  {
    title: "RachelAI",
    description:
      "Turning Myself into a Talking AI Avatar Upon a Fortune 500 Client’s Request",
    paragraph:
      "As an innovation consulting agency, Onova doesn't just run hackathons, we compete in them too. When retail and generative AI unite, you get RachelAI: a personalized online shopping assistant. \n\nBuilt with Stable Diffusion, Google Cloud Vertex AI, and speech-to-text and text-to-speech APIs, RachelAI can guide users through everything from shipping policies to individualized product recommendations.",
    tags: ["AI", "NLP", "Stable Diffusion", "Google Cloud"],
    imageURL: "/rachelai.svg",
    colour: "#D9F0E2",
    disabled: false,
    links: [
      { site: "Github", url: "https://github.com/onova-dev/rachel-ai" },
      {
        site: "Video Demo",
        url: "https://youtu.be/YBKno8cYSoE?si=15OlMI5h0FSkHlWo",
      },
    ],
  },
  {
    title: "TL;DW",
    description: "Making Learning Easier with a Video -> Notes Web App",
    paragraph:
      "TL;DW - Too Long; Didn't Watch is a simple and convenient web application that turns Youtube and user-uploaded videos into condensed notes categorized by definition, core concept, example and points. It saves you time by turning long-form educational content into organized and digestible text so you can learn smarter, not harder.\n\nHow it works: \nYoutube Video Link -> MP3 File -> Transcribed Text -> Cohere's Generate API to summarize -> Cohere's Classify API to organize by type of point (main concept, point, example, definition) -> Cohere's Generate API to extract key words -> Notes coded into a downloadable PDF",
    tags: ["AI", "NLP", "Python", "JS", "Cohere"],
    imageURL: "/tldw.svg",
    colour: "#E0E7E6",
    disabled: false,
    links: [
      {
        site: "Devpost",
        url: "https://devpost.com/software/tldw-too-long-didn-t-watch",
      },
      {
        site: "Github",
        url: "https://github.com/rachelchxn/uofthacksx",
      },
    ],
  },
  {
    title: "Preventing Booking Cancellations",
    description:
      "Merging Data Science and Business Strategy to Retain Hotel Customers",
    paragraph:
      "Faced with the challenge of lowering the rates of hotel booking cancellations, we developed a predicive machine learning model optimized with feature engineering and hyperparameter tuning using Scikit-Learn. With our data analysis and visualization using Pandas, NumPy, Seaborn, and Matplotlib, we found correlations and generated insights to inform our business recommendations.",
    tags: ["AI", "Data Science", "Data Visualization"],
    imageURL: "/dataquest.svg",
    colour: "#EAEAF2",
    disabled: false,
    links: [
      {
        site: "Devpost",
        url: "https://devpost.com/software/the-best-solution",
      },
      {
        site: "Github",
        url: "https://github.com/rachelchxn/dataquest",
      },
      {
        site: "Pitch Deck",
        url: "https://pitch.com/public/43beb03c-aa89-4983-81ab-6c08b79769d9",
      },
    ],
  },
  {
    title: "Zensphere",
    description:
      "Relieving Triggers for those with Eating Disorders and Body Dysmorphia",
    paragraph:
      "Starving, loathing oneself, and constantly facing traumatic reminders was my daily reality for years. Many, especially those with body dysmorphia and eating disorders, grapple with these triggers daily. ZenSphere aims to offer a safer web experience, allowing users to block personal triggers and navigate online spaces with ease. We believe in a tailored approach, understanding that everyone's triggers are unique. \n\nZenSphere steps into the freshly opened webpage, takes a breath, and starts working: \n  1. It scrapes through every image and sentence on the page, checking if it is a potential trigger for the user (using co.classify) \n  2. It blurs all flagged images automatically, but with one click of a button, the user may reveal the image \n  3. All flagged text either gets blocked or described in neutral words (co.generate), depending on user's settings \n  4. ZenSphere takes a breather before the user moves on to another page, always ready to pounce on threats to the user's mental health!",
    tags: ["AI", "NLP", "Chrome Extension", "Cohere"],
    imageURL: "/zensphere.svg",
    colour: "#ECDEF2",
    disabled: false,
    links: [
      {
        site: "Devpost",
        url: "https://devpost.com/software/zensphere",
      },
      {
        site: "Github",
        url: "https://github.com/rachelchxn/methacks23",
      },
    ],
  },
  {
    title: "Project Greensort",
    description: "Fighting Waste Contamination on Campus",
    paragraph: "",
    tags: ["AI", "Computer Vision", "App Dev"],
    imageURL: "/coming-soon.svg",
    colour: "#E5E4E4",
    disabled: true,
    links: [],
  },
];
