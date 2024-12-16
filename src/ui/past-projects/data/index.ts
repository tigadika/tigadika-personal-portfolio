export type PastProject = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  tags: string[];
  links: string;
};

export const PAST_PROJECTS: PastProject[] = [
  {
    id: "lk",
    name: "Lelang Koki",
    description:
      "LelangKoki is an innovative e-commerce platform designed for real-time goldfish auctions. The website caters to three distinct user groups—bidders, sellers, and admins—each with tailored applications separated by Next.js middleware for seamless user experiences.\n\n- Tech Stack: Built using Next.js, styled with Tailwind CSS and shadcn/ui, and TanStack Query for state management.\n- Real-time Features: Leveraged Socket.io for real-time auction bidding and updates, ensuring dynamic interactions between users.\n- Multi-Role Platform: Offers three integrated applications for bidders, sellers, and admins, each with unique functionalities and interfaces.\n- Development: Managed in sprints, with version control and CI/CD pipelines implemented via GitLab.\n\nThis project showcases my expertise in creating dynamic, real-time applications with complex role-based access and seamless user experiences.",
    imgUrl: "project1.png",
    tags: [
      "Next.js",
      "NextAuth",
      "Tailwind",
      "shadcn/ui",
      "Tanstack Query",
      "socket.io",
      "Figma",
      "Rest API",
    ],
    links: "https://lelangkoki.com",
  },
  {
    id: "ft",
    name: "FSJS Tools",
    description:
      "FSJS Tools is an application designed to streamline operational processes at Hacktiv8, such as scheduling, attendance tracking, announcements, coding time checks, and student grading, with automatic integration into Discord, Google Sheets, and the student portal database.\n\n- Tech Stack: Built using React, Tailwind CSS, TanStack Query, TanStack Table, TanStack Router, and Redux for state management.\n- Auto-Scheduling Feature: Includes Cron-based auto-scheduling, where the application sends pre-hit Zoom links to a specific Discord channel one hour before the class starts.\n\nThis tool has significantly optimized daily operations by automating various tasks and improving data accessibility.",
    imgUrl: "project2.jpg",
    tags: [
      "React",
      "Redux",
      "Tanstack Query",
      "Tanstack Table",
      "Tanstack Router",
      "Tailwind",
      "cron",
      "Rest API",
      "express",
      "mongoDB",
      "PostgreSQL",
      "Google Oauth",
      "Google workspace API",
      "Zoom API",
    ],
    links: "https://tools.foxhub.space",
  },
  {
    id: "ri",
    name: "RecruitIndo",
    description:
      "Recruitindo is a company profile application built using HTML, CSS, and some PHP, deployed on WordPress. It leverages the WordPress stack to manage a database of posts and articles using phpMyAdmin and MySQL.\n\n- Tech Stack: Built with HTML, CSS, and PHP, and deployed on the WordPress platform.\n- Database: Uses MySQL and phpMyAdmin for managing post and article data.\n- Responsibilities: I was also responsible for setting up hosting and cPanel.",
    imgUrl: "project3.png",
    tags: [
      "HTML",
      "CSS",
      "Wordpress",
      "MySQL",
      "phpMyAdmin",
      "cPanel",
      "hosting",
    ],
    links: "https://recruitindo.com",
  },
  {
    id: "eh",
    name: "EZHire",
    description:
      "EZHire is a company profile application built using HTML, CSS, and some PHP, deployed on WordPress. It leverages the WordPress stack to manage a database of posts and articles using phpMyAdmin and MySQL.\n\n- Tech Stack: Built with HTML, CSS, and PHP, and deployed on the WordPress platform.\n- Database: Uses MySQL and phpMyAdmin for managing post and article data.\n- Responsibilities: I was also responsible for setting up hosting and cPanel.",
    imgUrl: "project4.png",
    tags: [
      "HTML",
      "CSS",
      "Wordpress",
      "MySQL",
      "phpMyAdmin",
      "cPanel",
      "hosting",
    ],
    links: "https://ezhire.id",
  },
];
