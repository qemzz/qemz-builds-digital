export type ProjectStatus = "Built / Prototype" | "Built" | "In Progress";

export type Project = {
  id: string;
  index: string;
  title: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  problem: string;
  solution: string;
  technology: string[];
  learning: string;
  /** Replace with a real screenshot when available. */
  image?: string;
};

/** Add new projects here — the UI renders from this list. */
export const projects: Project[] = [
  {
    id: "seatsmart",
    index: "01",
    title: "SeatSmart",
    summary:
      "A school-focused system designed to simplify and automate student table allocation instead of relying on manual organization.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Built / Prototype",
    problem:
      "Seating and table allocation at school was arranged by hand, which was slow, easy to get wrong and hard to change once it was set.",
    solution:
      "A lightweight web tool that takes student lists and arranges table allocation automatically, so the layout can be regenerated instead of rewritten.",
    technology: ["HTML", "CSS", "JavaScript"],
    learning:
      "Turning a messy manual routine into clear rules is most of the work — the code comes after the logic is honest.",
  },
  {
    id: "library",
    index: "02",
    title: "Library Management System",
    summary:
      "A digital library system focused on organizing books, managing users and making library resources easier to access.",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
    status: "Built / Prototype",
    problem:
      "Book records and borrower information were scattered, so finding what was available took longer than it should.",
    solution:
      "A structured system for cataloguing books, handling user records and searching the collection from one place.",
    technology: ["React", "TypeScript", "Vite", "Supabase"],
    learning:
      "Working with a real database taught me to think about data structure before interface.",
  },
  {
    id: "school-website",
    index: "03",
    title: "School Website",
    summary:
      "A website project created to improve a school's digital presence and make information easier to access.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Built / Prototype",
    problem:
      "Important school information lived in notices and word of mouth, which made it hard for people to find reliably.",
    solution:
      "A clear, responsive website that puts key information in one predictable place and is simple to keep updated.",
    technology: ["HTML", "CSS", "JavaScript"],
    learning: "Clarity of content matters more than visual complexity.",
  },
  {
    id: "restaurant",
    index: "04",
    title: "Restaurant Platform",
    summary:
      "A modern platform concept for restaurants and coffee shops where customers can explore menus, place orders and businesses can manage incoming orders.",
    tags: ["React", "TypeScript"],
    status: "In Progress",
    problem:
      "Small restaurants and coffee shops often handle menus and orders informally, which makes busy periods harder to manage.",
    solution:
      "A concept in development: a menu-browsing and ordering experience for customers, with an order view for the business.",
    technology: ["React", "TypeScript"],
    learning:
      "Still building — designing for two very different users at once is the hardest part so far.",
  },
];

export const journey = ["Discover", "Learn", "Build", "Lead", "Explore"] as const;

export const heroFlow = ["Problem", "Idea", "Design", "Build", "Impact"] as const;

export const workedWith = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "C++",
  "Java",
  "SQL",
] as const;

export const exploring = [
  "Backend Development",
  "Software Engineering",
  "AI",
  "Data Engineering",
] as const;

export type ContactLink = {
  label: string;
  handle: string;
  /** Null until a real link is provided — never invent one. */
  href: string | null;
};

export const contactLinks: ContactLink[] = [
  { label: "Email", handle: "knosaint6@gmail.com", href: "mailto:knosaint6@gmail.com" },
  { label: "Telephone", handle: "+250 795 017 456", href: "tel:+250795017456" },
  {
    label: "Instagram",
    handle: "@qemn.z_",
    href: "https://www.instagram.com/qemn.z_?igsi=bGhyaTcyOGFkOTVo",
  },
];


export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
