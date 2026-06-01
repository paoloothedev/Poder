import { Zap, Search, Shield } from 'lucide-react'

const benefits = [
  { icon: Zap, title: 'Automate Collection', desc: 'Streamline your research with automated scraping, saving time and effort.' },
  { icon: Search, title: 'Instant Insights', desc: 'Access real-time analytics directly from your collected data.' },
  { icon: Shield, title: 'Security First', desc: 'Your data is handled with industry-leading security practices.' },
]

export default function WhyPoder() {
  return (
    <section id="why-poder" className="why-poder">
      <h3>Why Choose Poder?</h3>
      <div className="benefits-grid">
        {benefits.map((b, i) => {
          const Icon = b.icon
          return (
            <div key={i} className="benefit-card">
              <Icon size={48} />
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
