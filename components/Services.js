function Services() {
  try {
    const services = [
      {
        icon: 'file-text',
        title: 'Business Requirement Documents (BRD)',
        description: 'Clear and detailed requirement documentation that aligns stakeholders and ensures project clarity.',
        features: ['Flowchart Features', 'Design–requirement alignment','Description Features', 'Paint Point', 'Assumption', 'Positive Acceptance Criteria', 'Negative Acceptance Criteria'  ]
      },
      {
        icon: 'file-json-2',
        title: 'Product Requirement Documents (PRD)',
        description: 'Comprehensive PRDs that break down stories, subtasks, and technical details for development teams.',
        features: ['User stories & subtasks', 'Design–requirement alignment', 'Technical Description', 'Acceptance Criteria']
      },
      {
        icon: 'book-open',
        title: 'User Manuals & Guides',
        description: 'User-focused documentation that helps clients and end-users adopt the system with ease.',
        features: ['Step-by-step user guides', 'System walkthroughs', 'Feature-specific manuals', 'Quick start guides']
      },
      {
        icon: 'git-merge',
        title: 'Process Flow & UML Diagrams',
        description: 'Visual documentation to communicate system processes and requirements effectively.',
        features: ['Flowcharts', 'Use case diagrams', 'Activity diagrams', 'System workflows']
      },
      {
        icon: 'file-check',
        title: 'Testing & UAT Documentation',
        description: 'Support stakeholders with structured test cases and UAT guides.',
        features: ['Test scenarios', 'Acceptance criteria validation', 'Bug reporting & retesting notes', 'UAT scripts']
      },
      {
        icon: 'users',
        title: 'Meeting Minutes & Action Items',
        description: 'Accurate and concise documentation of discussions to ensure project continuity.',
        features: ['Sprint review notes', 'Action items tracking', 'Stakeholder communication']
      }
    ];

    return (
      <section id="services" className="py-20 bg-[var(--secondary-color)]" data-name="services" data-file="components/Services.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-color)]">
              Services
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            End-to-end documentation and analysis services — from gathering requirements and creating BRD/PRD to developing user manuals, flowcharts, and UAT guides — ensuring projects run smoothly and systems meet user needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card group">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center group-hover:bg-[var(--primary-color)] transition-colors">
                      <div className={`icon-${service.icon} text-xl text-[var(--primary-color)] group-hover:text-white transition-colors`}></div>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--accent-color)]">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <div className="icon-check text-green-600"></div>
                        <span className="text-[var(--text-primary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}