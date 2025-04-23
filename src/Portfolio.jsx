import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Globe, Download } from "lucide-react";
// Example of importing a CSS file
import 'index.css'; // Adjust the path as necessary

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800 font-roboto">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-[#f5f5f5]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#567277]">
          Suné du Preez
        </h1>
        <p className="text-xl md:text-2xl text-[#978d7f]">
          UI/UX Designer | Problem Solver | Creative Thinker
        </p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-[#567277] text-white">View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#567277] mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Suné, a passionate UI/UX designer with experience crafting intuitive digital
          experiences. I combine creativity with strategy, ensuring user needs drive every
          design decision. My toolkit includes Figma, Adobe Creative Cloud, Balsamiq, and Canva.
        </p>
        <div className="mt-4">
          <a href="/Sune_du_Preez_2025_UIUXDesigner_2025.pdf" download className="inline-flex items-center gap-2 text-[#567277] hover:text-[#978d7f] underline">
            <Download size={20} /> Download Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#f0f0f0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#567277] mb-8">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: "NamPower Trading Portal",
              url: "https://trading.nampowerets.com/",
              description: "Redesigned trading dashboard UX with focus on usability, modular layouts, and real-time updates. Created wireframes, prototypes, and collaborated with devs on implementation."
            }, {
              title: "Botswana Power Corp Portal",
              url: "http://bpcets.eohesa.com/",
              description: "Led UI/UX overhaul for stakeholder portal. Conducted research, built wireframes in Balsamiq, and finalized responsive UI in Figma."
            }, {
              title: "SAPP Market Platform",
              url: "https://www.sappmarket.com/",
              description: "Designed the full UX flow for market operations dashboard. Delivered high-fidelity mockups and usability-tested key features."
            }].map((project, index) => (
              <Card key={index} className="hover:shadow-xl">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-2 text-sm text-gray-700">{project.description}</p>
                  <a href={project.url} className="text-[#567277] underline" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#567277] mb-6">Contact Me</h2>
        <p className="mb-4">I'd love to hear from you! Let's collaborate or chat over design ideas.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:dupreezs@gmail.com" className="text-[#567277] hover:text-[#978d7f]">
            <Mail size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sunedupreez" target="_blank" className="text-[#567277] hover:text-[#978d7f]">
            <Linkedin size={28} />
          </a>
          <a href="https://www.behance.net/" target="_blank" className="text-[#567277] hover:text-[#978d7f]">
            <Globe size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}
