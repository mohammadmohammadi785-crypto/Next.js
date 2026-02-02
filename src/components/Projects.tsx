export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "Personal website built with Next.js" },
    { title: "Task Manager App", desc: "CRUD app with React & API" },
    { title: "E-commerce UI", desc: "Online store interface" },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {projects.map((project, i) => (
          <div key={i} className="p-6 bg-gray-900 rounded-xl hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
