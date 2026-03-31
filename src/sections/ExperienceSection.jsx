import SectionTitle from '../components/SectionTitle'
import { education, experience } from '../data/portfolioData'

function ExperienceSection() {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <SectionTitle
        eyebrow="Experience"
        title="Experience and Education"
        subtitle="A concise timeline of professional roles and academic background."
        titleId="experience-title"
      />

      <div className="timeline">
        {experience.map((job, index) => (
          <article className={`timeline-item reveal delay-${index + 1}`} key={`${job.company}-${job.period}`}>
            <div className="timeline-meta">
              <p>{job.period}</p>
            </div>
            <div className="timeline-content">
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {education.map((item, index) => (
          <article className={`timeline-item reveal delay-${index + 1}`} key={`${item.institute}-${item.period}`}>
            <div className="timeline-meta">
              <p>{item.period}</p>
            </div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p className="company">{item.institute}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
