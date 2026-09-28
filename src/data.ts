import { Project, Paper, BlogPost, Skill } from "./types";

export const personalInfo = {
  name: "Zeina Merchad",
  title: "Software Engineer & Researcher",
  tagline:
    "Building thoughtful systems at the intersection of engineering and ideas.",
  bio: `I'm a computer science graduate from the Lebanese American University, Beirut.
I work across full-stack web development, mobile apps, and theoretical CS research.
My published work focuses on graph algorithms and parameterized complexity — finding elegant solutions to hard combinatorial problems.
Outside of research, I build with React, .NET MAUI, WinForms, and C#, and I write about the things I learn along the way.`,
  email: "ZeinaMerchad@outlook.com",
  github: "https://github.com/zeina-merchad",
  linkedin: "https://www.linkedin.com/in/zeina-merchad-b51720262/",
  twitter: "https://x.com/zeinamerch",
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Khadamati",
    description:
      "A services marketplace mobile app where users can browse and subscribe to services, providers can register their offerings, and admins moderate the platform.",
    tags: ["Java", "Mobile Development", "Android"],
    year: 2025,
    featured: true,
    github: "https://github.com/zeina-merchad/Khadamati",
    image: "/khadamati.jpeg"
  },
  {
    id: "p2",
    title: "Optimizing GCNs with CUDA Acceleration",
    description:
      "Accelerated Graph Convolutional Network computations using CUDA and parallel GPU processing. Addressed scalability challenges in node classification, link prediction, and graph classification tasks.",
    tags: [
      "CUDA",
      "Parallel Programming",
      "Deep Learning",
      "Graph Neural Networks",
    ],
    year: 2025,
    featured: true,
  },
  {
    id: "p3",
    title: "Node Classification in the Cora Dataset",
    description:
      "Implemented and compared multiple GNN architectures — GCN, GAT, and Jumping Knowledge — for classifying academic papers in the Cora citation network. Included feature extraction, edge mapping, and model interpretability analysis.",
    tags: ["Python", "PyTorch", "GNN", "Machine Learning"],
    year: 2024,
    github: "https://github.com/zeina-merchad/CoraProject",
    image: "/Cora.png"
  },
  {
    id: "p4",
    title: "BuzzerGUI",
    description:
      "A 4-player football trivia buzzer system built on ESP32 hardware, using MQTT to relay buzz-in events in real time to a GUI that manages trivia questions and tracks which player buzzed in first.",
    tags: ["ESP32", "MQTT", "Embedded Systems", "IoT"],
    year: 2025,
  },
  {
    id: "p5",
    title: "Woodland Baskinta",
    description:
      "A freelance client website for Woodland Baskinta, built and deployed as a live production site.",
    tags: ["Freelance", "Web Development"],
    year: 2025,
    link: "https://www.woodlandbaskinta.com/",
    image: "/woodland.png",
  },
];

export const papers: Paper[] = [
  {
    id: "r1",
    title: "Bicluster Editing with Overlaps: A Vertex Splitting Approach",
    abstract:
      "The BiCluster Editing problem aims at editing a given bipartite graph into a disjoint union of bicliques via a minimum number of edge deletion or addition operations. We introduce BCEVS and BCEOVS, two variants that allow data elements to belong to more than one cluster via vertex splitting. We prove both problems are NP-complete on bipartite planar graphs of maximum degree three, establish APX-hardness, and show polynomial-time solvability on trees. BCEOVS is additionally shown to be fixed parameter tractable and admits a polynomial size kernel.",
    venue: "IWOCA 2025",
    year: 2025,
    authors: ["Faisal N. Abu-Khzam", "Lucas Isenmann", "Zeina Merchad"],
    link: "https://link.springer.com/chapter/10.1007/978-3-031-98740-3_11",
    tags: [
      "Graph Theory",
      "Parameterized Complexity",
      "Biclustering",
      "NP-completeness",
    ],
  },
  // add more papers here
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The paralysis of infinite doors",
    excerpt:
      "Nobody tells you that graduating feels less like a beginning and more like standing in a hallway with a hundred unlocked doors. Every choice feels like a permanent closing of all the others, and so you stand there, frozen, choosing nothing.",
    date: "April 2025",
    readTime: 5,
    slug: "the-paralysis-of-infinite-doors",
    tags: ["Life", "Career", "Reflection"],
    content: `
Nobody tells you that graduating feels less like a beginning and more like standing in a hallway with a hundred unlocked doors.

You spent years working toward this moment. Grinding through assignments, exams, projects, late nights fueled by bad coffee and mild panic. Everyone around you — professors, parents, relatives at dinner parties — kept pointing at some imaginary finish line just ahead. *Just get through this semester. Just get your degree. Then it all opens up.*

And then it does. And somehow that's the problem.

The options are real. You could go into industry, chase a research career, do a master's, move cities, freelance, join a startup, join a corporation, build something of your own. Every path seems equally valid and equally terrifying. You scroll job listings at midnight not because you're applying, but because you're hoping one of them will reach through the screen and tell you *this one, this is the one*.

It doesn't.

What nobody prepares you for is that freedom and anxiety are the same coin. When someone else sets the structure — a syllabus, a semester, a graduation requirement — your job is just to move forward. The track exists. You run on it. But the moment the track ends, you realize forward is a direction you have to invent yourself, and inventing it requires knowing who you are and what you actually want. Two things that four

of coursework somehow never formally addressed.

I've talked to enough people my age to know this isn't just me. The high-achievers are somehow the most paralyzed — because they've spent so long optimizing for external validation that the absence of a rubric feels like a void. What does it mean to do well at life? There's no grade. There's no professor to ask.

Here's what I keep coming back to: the doors don't close when you walk through one. That's the lie anxiety tells you. Choosing a first job doesn't forfeit a research career forever. Moving to one city doesn't chain you there. Most paths are more reversible than they feel at 22, standing in that hallway with your heart in your throat.

The paralysis isn't really about the doors. It's about the terrifying, exhilarating realization that you are, for the first time, the one holding the key.

That's not a problem to solve. That's just what growing up actually feels like.
    `,
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["C#", "Python", "C", "TypeScript", "JavaScript"],
  },
  {
    category: "Frameworks & UI",
    items: ["React", ".NET MAUI", "WinForms", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Theory & Algorithms",
    items: [
      "Graph Theory",
      "Parameterized Complexity",
      "Algorithm Design",
      "Computational Complexity",
    ],
  },
  {
    category: "Research & Tools",
    items: [
      "Academic Writing",
      "LaTeX",
      "Combinatorial Algorithms",
      "Biclustering",
      "Fixed Parameter Tractability",
      "Git",
      "GitHub",
    ],
  },
];
