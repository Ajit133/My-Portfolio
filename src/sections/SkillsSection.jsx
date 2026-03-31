import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/portfolioData'

function SkillsSection() {
  return (
    <section className="content-section" id="skills" aria-labelledby="skills-title">
      <SectionTitle
        eyebrow="Skills"
        title="Technical strengths"
        subtitle="Core tools and practices I use to ship high-quality frontend systems."
        titleId="skills-title"
      />

      <ul className="skills-cloud reveal delay-1">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection
