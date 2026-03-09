// app/page.tsx (or a component like Layout.tsx)
import Image from "next/image";
import RecordCard from "@/components/RecordCard/RecordCard";
import ErixWorld from "@/components/SVGs/ErixWorld";

const projects = [
  { title: "Project A", img: <ErixWorld />, year: "2024", medium: "Web App" },
  { title: "Project B", img: <ErixWorld />, year: "2023", medium: "UX Research" },
  { title: "Project C", img: <ErixWorld />, year: "2025", medium: "Interactive Media" },
  { title: "Project D", img: <ErixWorld />, year: "2022", medium: "Tool" },
  // Add as many projects as you like
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left Column: Nav + Summary */}
      <aside className="w-72 flex-shrink-0 p-6 border-r border-gray-300 sticky top-0 h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Eric Wang</h1>
          <p className="text-sm text-gray-600">Software Engineer & Creative Technologist</p>
        </div>

        <nav className="flex flex-col space-y-4 mb-8">
          <a href="#collection" className="hover:text-siteSignatureRed">Collection</a>
          <a href="#resume" className="hover:text-siteSignatureRed">Resume</a>
          <a href="#contact" className="hover:text-siteSignatureRed">Contact</a>
          <a href="#about" className="hover:text-siteSignatureRed">About</a>
        </nav>

        <div className="text-sm text-gray-500">
          <p>Welcome home. How is your life? Enjoy your stay.</p>
        </div>
      </aside>

      {/* Right Column: Project Grid */}
<main className="flex-1 p-6 overflow-auto max-w-5xl mx-auto"> 
   <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
    {projects.map((project, idx) => (
      <div
        key={idx}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer flex flex-col items-center"
      >
        <RecordCard artwork={project.img} />
        <div className="p-4 flex-1 flex flex-col justify-end text-center">
          <h2 className="font-semibold text-lg">{project.title}</h2>
          <p className="text-sm text-gray-500">{project.year} • {project.medium}</p>
        </div>
      </div>
    ))}
  </section>
        {/* Optional: Resume Section */}
        <section id="resume" className="mt-12">
          <h2 className="text-xl font-bold mb-4">Resume</h2>
          <p className="text-gray-600">[Link to PDF or embedded content]</p>
        </section>

        {/* Optional: Contact Section */}
        <section id="contact" className="mt-12">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">Email: ewangsmk@gmail.com</p>
          <p className="text-gray-600">LinkedIn: https://www.linkedin.com/in/eric-lee-wang/</p>
        </section>
      </main>
    </div>
  );
}