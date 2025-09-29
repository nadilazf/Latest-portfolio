
function About() {
  try {
    const skills = [
      { name: 'Requirement Analysis', level: 85 },
      { name: 'Business Requirement Document (BRD)', level: 85 },
      { name: 'Product Requirement Document (PRD)', level: 88 },
      { name: 'User Manuals & Guides', level: 80 },
      { name: 'Process Flow & UML Diagrams', level: 80 },
      { name: 'User Acceptance Criteria Document', level: 82 },
      { name: 'Exploratory testing', level: 85 },
    ];

    const tools = [
      'Confluence', 'Notion', 'Microsoft Word', 'Figma', 'Jira', 'GitHub',
      'Draw.io', 'Postman', 'Excel', 'Slack', 'PlantUML', 'Obsidian', 'CursorAI'
    ];

    return (
      <section id="about" className="py-20 bg-white" data-name="about" data-file="components/About.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-color)]">
                  About Me
                </h2>
                <p className="text-lg text-[var(--text-secondary)]">
                Business System Analyst and Technical Writer with experience in requirement analysis, process documentation, and user-focused deliverables. Skilled in translating complex business needs into clear documentation and actionable development tasks.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[var(--text-primary)]">
                I specialize in creating Business Requirement Documents (BRD), Product Requirement Documents (PRD), user manuals, and flowcharts that align stakeholders, support developers, and guide end-users. My work ensures systems are well-documented, tested, and ready for adoption.
                </p>
                <p className="text-[var(--text-primary)]">
                With a background spanning SaaS, IoT, and health management systems, I bring strong collaboration across cross-functional teams including developers, QA, UI/UX designers, and project managers.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--accent-color)]">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-[var(--secondary-color)] text-[var(--text-primary)] rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-[var(--accent-color)]">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-sm text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-blue-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--secondary-color)] rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="icon-quote text-2xl text-[var(--primary-color)]"></div>
                  <h4 className="font-semibold text-[var(--accent-color)]">My Philosophy</h4>
                </div>
                <p className="text-[var(--text-primary)] italic">
                  "Great documentation is invisible. Users should achieve their goals without noticing the documentation itself – that's when you know it's truly effective."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}