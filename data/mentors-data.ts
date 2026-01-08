export interface Mentor {
  id: string
  name: string
  title: string
  company: string
  profilePic?: string
  expertise: string[]
  category: "mentor" | "judge" | "both"
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "coming soon",
    title: "coming soon",
    company: "coming soon",
    category: "judge",
    expertise: ["coming very soon", "coming sooon"],
  },
  {
    id: "2",
    name: "coming soon",
    title: "coming soon",
    company: "coming soon",
    category: "mentor",
    expertise: ["coming very soon", "coming sooon"],
  },
  {
    id: "3",
    name: "coming soon",
    title: "coming soon",
    company: "coming soon",
    category: "mentor",
    expertise: ["coming very soon", "coming sooon"],
  },
  {
    id: "4",
    name: "coming soon",
    title: "coming soon",
    company: "coming soon",
    category: "judge",
    expertise: ["coming very soon", "coming sooon"],
  },
]
