import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/portfolioData'

function ProjectsSection() {
  return (
    <section className="content-section" id="projects" aria-labelledby="projects-title">
      <SectionTitle
        eyebrow="Projects"
        title="Selected work"
        subtitle="Recent builds with clear goals, modern stacks, and measurable results."
        titleId="projects-title"
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card reveal delay-${index + 1}`} key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="stack-list" aria-label={`${project.title} technology stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="outcome">{project.outcome}</p>
            <a href={project.link}>View case study</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
