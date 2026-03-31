import { profile, stats } from '../data/portfolioData'

function HeroSection() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <p className="hero-kicker reveal">{profile.location}</p>
      <h1 className="reveal delay-1">
        {profile.name}
        <span>{profile.role}</span>
      </h1>
      <p className="hero-tagline reveal delay-2">{profile.tagline}</p>

      <div className="hero-actions reveal delay-3">
        <a className="btn btn-primary" href="#projects">
          {profile.cta.primaryLabel}
        </a>
        <a className="btn btn-secondary" href={profile.resumeUrl} download="Ajit-Das-Resume.pdf">
          {profile.cta.secondaryLabel}
        </a>
      </div>

      <ul className="stats-grid reveal delay-4" aria-label="Key career stats">
        {stats.map((item) => (
          <li key={item.label}>
            <p className="stat-value">{item.value}</p>
            <p className="stat-label">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HeroSection
