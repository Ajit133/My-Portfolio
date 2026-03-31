import { contact, profile } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'

function ContactSection() {
  return (
    <section className="content-section" id="contact" aria-labelledby="contact-title">
      <SectionTitle
        eyebrow="Contact"
        title={contact.title}
        subtitle={contact.subtitle}
        titleId="contact-title"
      />

      <div className="contact-card reveal delay-1">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="social-links" aria-label="Social links">
          {profile.socialLinks.map((link) => (
            <a href={link.url} key={link.label} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
