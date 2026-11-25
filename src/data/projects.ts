export type Project = {
  number: string
  name: string
  slug: string
  summary: string
  role: string
  stack: string[]
  code: string
  status?: string
  tone: string
}

export const projects: Project[] = [
  { number: '01', name: 'PocketVault', slug: 'pocketvault', summary: 'A finance workspace that helps small businesses plan income, track expenses, and manage bills.', role: 'Product definition, UI design, full-stack development, database design with row-level security, role-based authentication, CI and deployment.', stack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase (PostgreSQL, Auth, Row Level Security)', 'Vitest', 'GitHub Actions', 'Vercel'], code: 'https://github.com/Thandokuhle18/PocketVault', status: 'Capstone', tone: 'sand' },
  { number: '02', name: 'Smarter Buddy', slug: 'smarter-buddy', summary: 'An AI-powered learning and career-guidance app for South African learners in Grades 8 to 12.', role: 'Product definition and planning, UI design, and development.', stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase (PostgreSQL)', 'AI-assisted development'], code: 'https://github.com/Thandokuhle18/SmarterBuddy', status: 'In development · concept, PRD, implementation plan and designs complete', tone: 'rose' },
  { number: '03', name: 'CoffeeNChill', slug: 'coffeenchill', summary: 'A cloud-hosted backend for a coffee-shop ordering system, built as a team project.', role: 'Staff document storage on Azure File Share, JWT authentication, users table and admin seeding, and CI/CD pipeline with automated tests.', stack: ['C#', '.NET', 'Azure Functions', 'Azure Table Storage', 'Azure File Share', 'Docker', 'JWT', 'GitHub Actions'], code: 'https://github.com/EMGPRS/cldv6212-cldv6212-poe-st10459107', tone: 'olive' },
  { number: '04', name: 'EventEase', slug: 'eventease', summary: 'An event-management web application built with ASP.NET Core MVC, structured around the MVC pattern with Entity Framework Core and SQL Server for data management, LINQ for querying and dependency injection for a clean separation of concerns.', role: 'Application design and development.', stack: ['C#', 'ASP.NET Core MVC (.NET 10)', 'Entity Framework Core', 'SQL Server', 'LINQ'], code: 'https://github.com/EMGPRS/cldv6211-poe-part2-ST10459107', tone: 'clay' },
  { number: '05', name: 'RaceDay', slug: 'raceday', summary: 'A REST API for race events, with Organiser and Participant roles.', role: 'API design and development, role-based access, data layer, documentation, and tests.', stack: ['ASP.NET Core Web API (.NET 10)', 'Entity Framework Core (Code-First)', 'SQL Server', 'Cookie authentication', 'Swagger', 'xUnit', 'GitHub Actions'], code: 'https://github.com/EMGPRS/prog6212-2026-prog6212-part1-st10459107', tone: 'gold' },
  { number: '05', name: 'Merciful Cakes SA', slug: 'merciful-cakes-sa', summary: 'A multi-page website for a bespoke cake business in Roodepoort, Gauteng, with an animated hero and filterable product catalogue.', role: 'Design and front-end development.', stack: ['React', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'React Router'], code: 'https://github.com/Thandokuhle18/Merciful-Cakes', tone: 'rose' },
  { number: '06', name: 'Avanelle', slug: 'avanelle', summary: 'A Windows desktop application for cybersecurity awareness.', role: 'Desktop interface and application logic, database integration.', stack: ['C#', 'WPF', 'XAML', 'MySQL'], code: 'https://github.com/IIEMSA/poe-part2-ST10459107', tone: 'sand' },
  { number: '07', name: 'Akari Academy', slug: 'akari-academy', summary: 'A hand-built website for an educational brand, made without a framework.', role: 'Design and development.', stack: ['HTML', 'CSS', 'JavaScript'], code: 'https://github.com/Thandokuhle18/AkariAcademy', tone: 'olive' },
]
