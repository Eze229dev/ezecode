import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Button } from '../components/Button';


export default function Projects() {
  const projects = [
     {
      id: 1,
      title: 'Frontend Optimization for Bibliotheque Platform',
      problem:
        'Online libraries often suffer from cluttered interfaces, poor navigation, and a lack of intuitive user experience, making it difficult for users to find and access books efficiently.',
      solution:
         'A clean, user-friendly, and responsive library interface designed to simplify navigation, improve content discovery, and provide a smooth reading experience across all devices.',
      impact: [
        '28% increase in conversion rat',
        'Intuitive user journey',
        'Page load time: 8.2s → 2.1s',
        
      ],
      tech: ['React',  'Tailwind CSS', 'Web Performance'],
      liveDemo: 'https://eze229dev.github.io/Frontend-Optimization-for-Bibliotheque-Platform/',
    },
    {
      id: 2,
      title: 'E-Commerce Platform Redesign',
      problem:
        'The existing platform had a 45% cart abandonment rate due to complex checkout flow and poor mobile experience.',
      solution:
        'Redesigned the entire purchase flow, reducing steps from 8 to 3. Implemented mobile-first responsive design and optimized bundle size by 60%. Added real-time order tracking with WebSocket updates.',
      impact: [
        '28% increase in conversion rate',
        'Cart abandonment down to 15%',
        'Page load time: 8.2s → 2.1s',
        '94+ Lighthouse score',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Web Performance'],
      liveDemo: 'https://example.com/ecommerce',
    },

    {
      id: 3,
      title: 'Landing Page SaaS - Startup Tech',
      problem:
        'Lack of visual credibility (amateur-looking design).Poor mobile experience (heavy scrolling, poorly adapted sections)',
      solution:
        'A modern, clean, and responsive SaaS landing page designed to deliver a smooth user experience and strengthen the startup’s credibility.',
      impact: [
        ' Optimized loading time',
        'Light and purposeful animations (visual feedback)',
        'Page load time: 8.2s → 2.1s',
        'Clearly identifiable buttons and actions',
      ],
      tech: ['Next.js',  'Tailwind CSS', 'Web Performance'],
      liveDemo: 'https://landing-page-57ie-he2bswecq-eze229devs-projects.vercel.app',
    },
    
      
   
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 border-b border-stroke-1">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-n-1 mb-6">Featured Projects</h1>
            <p className="text-lg text-n-3 leading-relaxed">
              Here's a selection of projects where I've applied thoughtful problem-solving, deep technical expertise, and a passion for great user experiences.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="space-y-8 lg:space-y-12">
            {projects.map((project) => (
              <article
                key={project.id}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 pb-12 lg:pb-16 border-b border-stroke-1 last:border-b-0"
              >
                {/* Project Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-n-1 mb-6">{project.title}</h2>

                    {/* Problem */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-p-3 uppercase tracking-wider mb-2">
                        The Challenge
                      </h3>
                      <p className="text-base lg:text-lg text-n-2 leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-p-3 uppercase tracking-wider mb-2">
                        The Solution
                      </h3>
                      <p className="text-base lg:text-lg text-n-2 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack & Live Demo */}
                  <div>
                    <h3 className="text-sm font-semibold text-n-3 uppercase tracking-wider mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-n-8 text-n-2 text-sm rounded-full border border-stroke-1 hover:border-p-3 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-p-3 hover:bg-p-2 text-white rounded-lg font-semibold transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="flex flex-col justify-center">
                  <div className="bg-n-8 border border-stroke-1 rounded-lg p-6 lg:p-8">
                    <h3 className="text-sm font-semibold text-p-3 uppercase tracking-wider mb-6">
                      Results & Impact
                    </h3>
                    <ul className="space-y-3">
                      {project.impact.map((metric, index) => (
                        <li key={index} className="flex items-start gap-3">
                          {/*<span className="text-p-3 text-xl font-bold mt-0.5">✓</span>*/}
                          <span className="text-n-1 text-base leading-relaxed">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-n-8 to-n-9 border-t border-stroke-1">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-n-1 mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-n-3 mb-8">
              If you have a project that needs thoughtful problem-solving and strong execution, let's talk.
            </p>
            <Link to="/contact">
              <Button theme="primary">Get In Touch</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
