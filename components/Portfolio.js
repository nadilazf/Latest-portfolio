function Portfolio() {
  try {
    const projects = [
      {
        title: 'Superapps – Employee Self Service (ESS)',
        category: 'Process Documentation',
        description: 'Created BRDs, PRDs, and User Manual Guides for Employee Self Service modules including Business Travel, Medical Claim, Leave/Permission requests, Payroll Calculation, and Approval Flows to ensure clarity for both stakeholders and end-users.',
        image: '/images/superapps-ess.png',
        tags: ['BRD', 'PRD', 'User Manual', 'Employee Self Service', 'System Requirements'],
        results: ['30% faster sprint readiness supported by well-structured BRDs & PRDs','25% fewer requirement-related clarifications during development','35% increase in self-service feature adoption among employees']
      },
      {
        title: 'Learning Management System (HR)',
        category: 'Process Documentation',
        description: 'Documented requirements, PRDs, and MoM for HR Learning Management System to support feature development and sprint planning.',
        image: '/images/lms.png',
        tags: ['PRD', 'Meeting Minutes', 'Process Docs', 'HR Tech'],
        results: ['25% faster feature delivery supported by well-defined PRDs','100% consistency in documentation across sprints and stakeholders', '30% more efficient sprint reviews due to clear MoM and action items','Increased stakeholder alignment by providing structured requirement docs']
      },
      {
        title: 'E-Recruitment Application – Process Documentation',
        category: 'Process Documentation',
        description: 'Documented recruitment workflows and requirements, producing process documentation and diagrams to support development and QA.',
        image: '/images/erecruitment.png',
        tags: ['Process Documentation', 'Recruitment Workflow', 'Flowchart', 'Requirement Docs'],
        results: ['30% clearer hiring workflows through standardized process documentation','20% reduction in miscommunication during sprint reviews and testing phases','Improved recruitment feature delivery by ensuring QA had accurate process references'],
      },
      {
        title: 'Medic & Health Monitoring – Process Documentation',
        category: 'Process Documentation',
        description: 'Created BRDs, PRDs, and detailed flowcharts for Disease Management, Medical Check Up, Medical Record, Medicine Request, and Scheduling features to align business needs with development and QA requirements.',
        image: '/images/medic-system.png',
        tags: ['Process Documentation', 'BRD', 'PRD', 'Flowchart', 'Healthcare System'],
        results: ['35% improvement in requirement clarity across Disease Management and Medical Check Up modules','30% faster sprint readiness due to well-documented BRDs and PRDs','25% reduction in QA rework as test scenarios were supported with accurate flowcharts']
      }
    ];

    const categories = ['All', ...new Set(projects.map(project => project.category))];
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
    
    return (
      <section id="portfolio" className="py-20 bg-white" data-name="portfolio" data-file="components/Portfolio.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-color)]">
              Portfolio
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              A showcase of recent projects demonstrating my expertise in creating clear, comprehensive documentation that drives results.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-1 bg-[var(--secondary-color)] rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[var(--primary-color)] text-white'
                      : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.title} className="card">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[var(--primary-color)] text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[var(--accent-color)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-[var(--text-primary)]">Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm">
                            <div className="icon-trending-up text-green-600"></div>
                            <span className="text-[var(--text-secondary)]">{result}</span>
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
      </section>
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    return null;
  }
}