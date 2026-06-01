import { Download } from 'lucide-react'

export default function DownloadSection({ onDownload }) {
  return (
    <section id="download" className="download-section">
      <div className="download-card">
        <h3>🚀 Beta v1.0 Available Now</h3>
        <p>
          Download Poder Beta and start extracting data efficiently. Optimized for Windows.
        </p>
        <div className="download-options">
          <button className="primary-button glow-effect" onClick={onDownload}>
            <Download size={20} />
            Download for Windows (64-bit)
          </button>
        </div>
      </div>
    </section>
  )
}
