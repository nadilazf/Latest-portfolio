function Experience() {
  try {
    const experiences = [
      {
        title: 'Business System Analyst',
        company: 'PT Synapsis Synergi Digital',
        period: 'Sep 2024 – Sep 2025',
        description: 'Contributed to planning and sustainability of multiple projects by leading requirement gathering, defining MVP scope, and creating BRDs and PRDs.',
        achievements: [
          'Developed BRDs and PRDs for MVP features across multiple modules',
          'Created flowcharts and process documentation to support development and QA',
          'Collaborated with cross-functional teams (UI/UX, Developers, QA, PM)',
          'Led sprint reviews with users, ensuring direct feedback and alignment',
          'Conducted live release socialization to 100+ employees across departments',
          'Reduced post-release defects by performing thorough exploratory testing and validating fixes',
          'Enhanced client readiness by drafting user manuals and UAT documents used in client-facing demos'
        ]
      },
      {
        title: 'Technical Writer (Internship)',
        company: 'PT Synapsis Synergi Digital',
        period: 'May 2024 – Sep 2024',
        description: 'Created technical documentation, BRDs, PRDs, user manuals, and MoM to ensure alignment between stakeholders and development teams.',
        achievements: [
          'Improved development efficiency by producing BRDs and PRDs with clear acceptance criteria, reducing clarification requests by 20%',
          'Enhanced client readiness by drafting user manuals and UAT documents used in client-facing demos',
          'Accelerated QA and developer workflow through flowcharts and process documentation that clarified complex requirements',
          'Strengthened stakeholder alignment by documenting MoM and action items, ensuring smoother project progress'
]
      },
      {
        title: 'System Analyst & Technical Writer (Training)',
        company: 'PT Konektthing Benda Pintar',
        period: 'Sep 2023 – Jan 2024',
        description: 'Supported IoT & Smart Solutions projects by producing system documentation, UML diagrams, and mockups.',
        achievements: [
          'Improved system clarity by creating UML diagrams and application mockups that accelerated developer understanding',
          'Supported project alignment by producing Terms of Reference and test scenarios used during development',
          'Increased application reliability through manual testing that identified key issues before release',
          'Strengthened client collaboration by documenting MoM, ensuring consistent communication and follow-ups'
]
      }
    ];

    return (
      <section id="experience" className="py-20 bg-[var(--secondary-color)]" data-name="experience" data-file="components/Experience.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-color)]">
              Experience
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            Experienced in bridging business needs and technical solutions by delivering clear documentation, well-structured requirements, and user-focused guides that support both stakeholders and development teams.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-color)]"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                      <div className="icon-briefcase text-xl text-white"></div>
                    </div>
                    
                    <div className="flex-1 card">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--accent-color)]">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                            <span className="font-medium">{exp.company}</span>
                            <span>•</span>
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-[var(--text-primary)]">
                          {exp.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-[var(--text-primary)]">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="icon-check-circle text-green-600"></div>
                                <span className="text-[var(--text-secondary)]">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}