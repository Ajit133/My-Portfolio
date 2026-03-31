import SectionTitle from '../components/SectionTitle'
import { about } from '../data/portfolioData'

function AboutSection() {
  return (
    <section className="content-section" id="about" aria-labelledby="about-title">
      <SectionTitle
        eyebrow="About"
        title={about.title}
        subtitle={about.subtitle}
        titleId="about-title"
      />

      <div className="about-grid">
        {about.paragraphs.map((text, index) => (
          <p className={`reveal delay-${index + 1}`} key={text}>
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
