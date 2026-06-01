import { Github } from 'lucide-react'

export default function Navbar() {
  return (
    <nav>
      <h1>Poder</h1>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#why-poder">Why Poder</a>
        <a href="#download">Download</a>
        <a href="https://github.com/lordpaoloo/Poder" target="_blank" rel="noopener noreferrer" className="repo-link">
          <Github size={18} />
          GitHub
        </a>
      </div>
    </nav>
  )
}
