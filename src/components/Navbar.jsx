import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-nav">
      <a className="brand" href="#top">
        JA
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
        aria-label="Toggle menu"
        onClick={handleToggle}
      >
        Menu
      </button>

      <nav aria-label="Main navigation" id="main-menu" className={isMenuOpen ? 'open' : ''}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
