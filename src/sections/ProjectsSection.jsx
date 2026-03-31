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
            <div className="project-actions">
              <a className="btn btn-primary" href={project.link} target="_blank" rel="noreferrer">
                Live
              </a>

              <div className="project-links" aria-label={`${project.title} links`}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.record && (
                  <a href={project.record} target="_blank" rel="noreferrer">
                    Record
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-more reveal delay-4">
        <a
          className="btn btn-secondary"
          href="https://github.com/Ajit133?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          See More
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection
