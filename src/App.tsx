import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  TestTube2,
} from 'lucide-react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { projects } from './data/projects'

const featuredProjects = projects.filter((project) => project.featured)
const additionalProjects = projects.filter((project) => !project.featured)

const skillGroups = [
  {
    title: 'Backend',
    icon: Server,
    items: ['NestJS', 'Spring Boot', 'Laravel', 'FastAPI', 'REST API design'],
  },
  {
    title: 'Architecture',
    icon: Network,
    items: ['Microservices', 'RabbitMQ', 'BullMQ', 'DDD', 'Modular monoliths'],
  },
  {
    title: 'Data',
    icon: Database,
    items: ['PostgreSQL', 'PostGIS', 'Redis', 'TypeORM', 'SQLAlchemy'],
  },
  {
    title: 'Quality & Delivery',
    icon: ShieldCheck,
    items: ['Unit testing', 'Integration testing', 'JMeter', 'Docker', 'Nginx'],
  },
  {
    title: 'Applied AI',
    icon: BrainCircuit,
    items: ['PyTorch', 'NLI', 'Embeddings', 'FAISS', 'Model evaluation'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS'],
  },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero__glow hero__glow--one" aria-hidden="true" />
          <div className="hero__glow hero__glow--two" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__copy">
              <div className="availability">
                <span aria-hidden="true" />
                Open to backend opportunities
              </div>
              <p className="eyebrow">Backend Developer · AI Engineering Student</p>
              <h1>
                I build backend systems that stay <span>clear under complexity.</span>
              </h1>
              <p className="hero__lead">
                I’m Mohammad Malaz Ahmad, a backend-focused developer working across APIs,
                distributed systems, databases, testing, and applied AI.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  Explore my work
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  className="button button--secondary"
                  href="https://github.com/malaz-3301"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} aria-hidden="true" />
                  GitHub
                </a>
              </div>

              <div className="hero__meta">
                <span>
                  <MapPin size={16} aria-hidden="true" /> Damascus, Syria
                </span>
                <span>
                  <GraduationCap size={17} aria-hidden="true" /> Damascus University
                </span>
              </div>
            </div>

            <div className="hero__visual" aria-label="Profile photo of Mohammad Malaz Ahmad">
              <div className="profile-frame">
                <div className="profile-frame__code" aria-hidden="true">
                  <span>GET</span>
                  <code>/api/reliable-systems</code>
                  <strong>200</strong>
                </div>
                <img
                  src="/images/profile.jpg"
                  alt="Mohammad Malaz Ahmad"
                  width="591"
                  height="591"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="profile-frame__stack" aria-hidden="true">
                  <span>NestJS</span>
                  <span>Spring</span>
                  <span>FastAPI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-strip" aria-label="Portfolio highlights">
          <div className="container impact-strip__grid">
            <div>
              <strong>10</strong>
              <span>Software projects</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Microservices in EasyRent</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Backend frameworks</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>Academic specialization</span>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>Engineering beyond CRUD.</h2>
            </div>
            <div className="about-copy">
              <p>
                My strongest work sits where backend architecture meets real constraints:
                concurrent writes, queues, geospatial queries, authentication, testing, and
                systems that need to evolve without becoming fragile.
              </p>
              <p>
                I’m a fifth-year Information Engineering student specializing in Artificial
                Intelligence. That background lets me move comfortably between production-style
                web backends and data-intensive AI pipelines.
              </p>
              <div className="about-points">
                <span>
                  <CheckCircle2 size={17} aria-hidden="true" /> API and database design
                </span>
                <span>
                  <CheckCircle2 size={17} aria-hidden="true" /> Distributed workflows
                </span>
                <span>
                  <CheckCircle2 size={17} aria-hidden="true" /> Automated testing
                </span>
                <span>
                  <CheckCircle2 size={17} aria-hidden="true" /> Applied machine learning
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--projects" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Backend projects with architectural depth.</h2>
              </div>
              <p>
                The projects below emphasize system design, reliability, data, testing, and the
                decisions behind the implementation.
              </p>
            </div>

            <div className="featured-projects">
              {featuredProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>

            <div className="archive-heading">
              <div>
                <p className="eyebrow">Additional projects</p>
                <h2>Broader engineering work.</h2>
              </div>
              <a
                href="https://github.com/malaz-3301?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Browse GitHub
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="project-archive">
              {additionalProjects.map((project) => (
                <ProjectCard project={project} compact key={project.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading section-heading--compact">
              <div>
                <p className="eyebrow">Technical toolkit</p>
                <h2>Tools I use to ship reliable systems.</h2>
              </div>
              <p>
                No arbitrary percentage bars—just the technologies demonstrated across the
                projects above.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map(({ title, icon: Icon, items }) => (
                <article className="skill-group" key={title}>
                  <div className="skill-group__icon">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="container proof-grid">
            <div className="proof-intro">
              <p className="eyebrow">Foundation</p>
              <h2>Academic depth, practical delivery.</h2>
              <p>
                I pair formal AI and software-engineering study with hands-on backend projects,
                technical reports, performance testing, and collaborative development.
              </p>
            </div>

            <div className="proof-list">
              <article>
                <div className="proof-list__icon">
                  <GraduationCap size={22} aria-hidden="true" />
                </div>
                <div>
                  <span>Education</span>
                  <h3>B.Sc. Candidate, Information Engineering</h3>
                  <p>Damascus University · Fifth-year student · AI specialization</p>
                </div>
              </article>
              <article>
                <div className="proof-list__icon">
                  <Layers3 size={22} aria-hidden="true" />
                </div>
                <div>
                  <span>Software engineering</span>
                  <h3>SAEA Bootcamp</h3>
                  <p>Delivered a Spring Boot and React e-commerce platform as the final project.</p>
                </div>
              </article>
              <article>
                <div className="proof-list__icon">
                  <TestTube2 size={22} aria-hidden="true" />
                </div>
                <div>
                  <span>Engineering approach</span>
                  <h3>Tested, measured, documented</h3>
                  <p>Unit, integration, and performance testing backed by technical documentation.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-card">
            <div className="contact-card__mark" aria-hidden="true">
              <Blocks size={28} />
            </div>
            <p className="eyebrow">Let’s build something dependable</p>
            <h2>Looking for a backend developer who thinks in systems?</h2>
            <p>
              I’m open to backend and software engineering roles where I can contribute, learn
              from an experienced team, and take ownership of meaningful technical problems.
            </p>
            <div className="contact-card__actions">
              <a className="button button--primary" href="mailto:malaz.ahmad.2027@gmail.com">
                <Mail size={18} aria-hidden="true" />
                Email me
              </a>
              <a
                className="button button--secondary"
                href="https://www.linkedin.com/in/malaz-ahmad/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <strong>Mohammad Malaz Ahmad</strong>
            <span>Backend Developer</span>
          </div>
          <p>Built for clarity, performance, and maintainability.</p>
          <div className="site-footer__links">
            <a
              href="https://github.com/malaz-3301"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/malaz-ahmad/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
            <a href="mailto:malaz.ahmad.2027@gmail.com" aria-label="Email">
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
