function Portfolio() {
  try {
    const projects = [
      {
        title: 'Superapps – Employee Self Service (ESS)',
        description: 'Key features delivered include a Dynamic Approval Matrix handling complex cross-project routing for Leave & Permission requests, an Advanced Business Travel module integrated with Traveloka API covering full-cycle workflows including Booking, Refund, and Reschedule logic, and Centralized Operations for Attendance and complex Benefit Claims Medical, Optical, Donations.',
        // image: '/images/superapps-ess.png',
        tags: ['BRD', 'PRD', 'FAQ Document', 'Business and Technical Flowchart', 'User Acceptance Criteria', 'User Manual Guide'],
        results: ['Successfully supported daily operations for 5,300+ active users across 8 mining projects with zero critical downtime post-launch.','Reduced manual administrative workload by automating complex Business Travel.','Accelerated approval turnaround time by implementing a Dynamic Matrix engine for complex cross-department routing.', 'Reduced development clarifications by 25% through precise UAC definitions and comprehensive documentation.']
      },
      {
        title: 'Remote Attendance App (RAA)',
        description: 'Delivering detailed PRDs, defining strict User Acceptance Criteria (UAC), producing User Manuals, and executing the Live Production Release to ensure seamless synchronization with the core ESS ecosystem. The scope encompassed critical modules including Attendance logging, complex Roster Scheduling, System Settings, and a flexible Project Configuration engine designed to customize attendance rules for specific mining project sites.',
        // image: '/images/lms.png',
        tags: ['PRD', 'Requirement analysis', 'User Manual Guide', 'UAC'],
        results: ['Achieved 100% data consistency between the Remote App and Core ESS ecosystem through real-time synchronization and strict validation logic','Streamlined complex workforce scheduling by implementing a digital Roster Management module tailored for mining shift patterns', 'Accelerated user adoption across remote sites by providing comprehensive User Manual Guides and clear documentation.']
      },
      {
        title: 'E-Recruitment Application',
        description: 'Managed the development lifecycle for a comprehensive E-Recruitment Platform by delivering detailed BRDs, PRDs, User Acceptance Criteria. Key modules delivered include Job Posting fully integrated with the Candidate database, a Dynamic Workflow Engine allowing flexible customization of interview stages, Interview Scheduling, Candidate Selection, a Candidate Reassignment feature for optimizing talent placement across different roles, and Hiring Budgeting.',
        // image: '/images/erecruitment.png',
        tags: ['BRD', 'PRD', 'Flowchart', 'User Acceptance Criteria'],
        results: ['Reduced Time-to-Hire by streamlining the entire recruitment lifecycle from Job Posting to Candidate Selection','Enhanced operational agility by delivering a Dynamic Workflow Engine that allows HR to customize interview stages for different job levels without technical support','Eliminated manual scheduling conflicts by integrating an Interview Scheduling module that syncs directly with interviewer availability'],
      },
      {
        title: 'Medic & Health Monitoring',
        description: 'Delivering detailed BRD, User Acceptance Creation definition, and PRD for a comprehensive Occupational Health & Monitoring System. Key modules include an automated Medical Checkup (MCU) Scheduling engine for periodic employee screening, FAR (First Aid Room) Visit Management, and Clinical Follow-up tracking. A critical feature is the External Medical Record module, which functions as a validation gate for the ESS Benefit Claim system, requiring Doctor verification before any medical reimbursement can be processed.',
        // image: '/images/medic-system.png',
        tags: ['BRD', 'Flowchart', 'User Acceptance Criteria', 'Minutes of Meeting Documentation'],
        results: ['Ensured 100% alignment between Business Stakeholders and Engineering teams through detailed MOMs and signed-off requirement documents','Streamlined the verification workflow between HR and Medical teams by digitizing the approval process, replacing manual cross-checks of medical receipts','Turned meeting discussions into executed tasks through rigorous Action Item tracking']
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

          {/* <div className="flex justify-center mb-12">
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
          </div> */}

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.title} className="card">
                <div className="space-y-4">
                  {/* <div className="relative overflow-hidden rounded-lg">
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
                  </div> */}
                  
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