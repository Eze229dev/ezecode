import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

/**
 * Home Page
 * Purpose: Storytelling & positioning (NOT services listing)
 * Content:
 * - Hero section with strong narrative
 * - "What I do" summary (high-level)
 * - Skills grouped by impact (UX, Performance, DX)
 * - Tech stack overview
 * - CTAs to Projects or Contact
 */
export default function Home() {
  const skills = [
    {
      category: 'User Experience',
      description: 'Crafting intuitive, accessible interfaces that delight users and drive engagement',
      items: ['Accessible Design', 'Responsive Layouts', 'Interaction Design', 'Usability Testing'],
    },
    {
      category: 'Performance',
      description: 'Building fast, optimized applications that deliver exceptional speed on any device',
      items: ['Core Web Vitals', 'Bundle Optimization', 'Caching Strategies', 'Network Optimization'],
    },
    {
      category: 'Developer Experience',
      description: 'Writing clean, maintainable code that makes future development a pleasure',
      items: ['Code Architecture', 'Documentation', 'Testing', 'DevOps & Deployment'],
    },
  ];

  const techStack = [
    { name: 'React.js', level: 'Expert' },
    { name: 'JavaScript/TypeScript', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'Next.js', level: 'Proficient' },
    { name: 'Database powered by Prisma', level: 'Proficient' },
    { name: 'Web Performance', level: 'Expert' },
    { name: 'Using Firebase', level: 'Expert' },
     { name: 'Flutter for Mobile ', level: 'Expert' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 border-b border-stroke-1">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-n-1 mb-6 leading-tight">
                I build <span className="text-p-3">fast, accessible</span> experiences that users love
              </h1>
              <p className="text-lg lg:text-xl text-n-3 mb-8 leading-relaxed">
                With a focus on performance, accessibility, and developer experience, I create digital products that don't just work—they delight. From concept to deployment, I think deeply about every decision.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/projects">
                  <Button theme="primary">View My Work</Button>
                </Link>
                <Link to="/contact">
                  <Button theme="secondary">Get In Touch</Button>
                </Link>
              </div>
            </div>
            
            {/* Profile Avatar */}
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-p-3 hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/profile.jpeg" 
                  alt="Professional Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What I Do Section */}
      <section className="py-12 lg:py-20 border-b border-stroke-1">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-n-1 mb-4">What I Do</h2>
            <p className="text-lg text-n-3 leading-relaxed">
              I'm a front-end developer and mobile flutter developer,passionate about crafting exceptional digital experiences. I specialize in building modern web applications where thoughtful design meets solid engineering. Whether it's architecting scalable systems or polishing pixel-perfect interfaces, I approach each project with the same commitment to excellence.
            </p>
          </div>
        </Container>
      </section>

      {/* Skills Section - Grouped by Impact */}
      <section className="py-12 lg:py-20 border-b border-stroke-1">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold text-n-1 mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-stroke-1 hover:border-p-3 transition-colors duration-300 bg-n-8"
              >
                <h3 className="text-xl font-bold text-p-3 mb-2">{skill.category}</h3>
                <p className="text-sm text-n-3 mb-4 leading-relaxed">{skill.description}</p>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-n-2 flex items-start gap-2">
                      {/*<span className="text-p-3 mt-1">•</span>*/}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 lg:py-20 border-b border-stroke-1">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-bold text-n-1 mb-8">Tech Stack</h2>
          <p className="text-lg text-n-3 mb-8 max-w-2xl">
            I work with modern, production-ready technologies that enable me to build scalable, performant applications
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-n-8 border border-stroke-1 hover:border-p-3 transition-colors duration-300"
              >
                <div className="font-semibold text-n-1">{tech.name}</div>
                <div className="text-sm text-n-3">{tech.level}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-n-8 to-n-9">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-n-1 mb-6">
              Ready to create something amazing?
            </h2>
            <p className="text-lg text-n-3 mb-8">
              Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button theme="primary">Start a Conversation</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
