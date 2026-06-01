import { Search, Zap, Database, Layout } from 'lucide-react'

const features = [
  { icon: Search, title: 'Facebook Search', desc: 'Search by name or hashtag on Facebook with enhanced precision.' },
  { icon: Zap, title: 'Multi-threaded', desc: 'Faster data collection with multi-threaded scraping capabilities.' },
  { icon: Database, title: 'Progress Tracking', desc: 'Detailed logs and real-time progress indicators.' },
  { icon: Layout, title: 'Modern UI', desc: 'Sleek PyQt5 interface designed for optimal user experience.' },
]

export default function Features() {
  return (
    <section id="features" className="features">
      <h3>What's New in Beta</h3>
      <div className="features-grid">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <div key={i} className="feature-card">
              <Icon size={48} />
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
