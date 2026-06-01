import { Coffee, Github, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <Coffee size={20} />
        <span>Made with passion by <strong>paoloothedev</strong></span>
      </div>
      <div className="social-links">
        <a href="https://github.com/paoloothedev" target="_blank" rel="noopener noreferrer" title="GitHub">
          <Github size={20} />
        </a>
        <a href="https://instagram.com/paoloothedev" target="_blank" rel="noopener noreferrer" title="Instagram">
          <Instagram size={20} />
        </a>
        <a href="https://tiktok.com/@paoloothedev" target="_blank" rel="noopener noreferrer" title="TikTok">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
