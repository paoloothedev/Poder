import { Download } from 'lucide-react'

export default function Hero({ onDownload }) {
  return (
    <div className="hero">
      <div className="beta-badge">
        🚀 Beta Version 1.0 - Now Available!
      </div>
      <h2>Advanced Data Extraction Made Simple</h2>
      <p className="hero-text">
        Experience the next generation of data extraction tools. The beta version is now available
        with powerful Facebook data extraction capabilities and an intuitive interface.
      </p>
      <div className="button-group">
        <button className="primary-button glow-effect" onClick={onDownload}>
          <Download size={20} />
          Download for Windows (64-bit)
        </button>
      </div>
    </div>
  )
}
