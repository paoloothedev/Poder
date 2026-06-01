import { forwardRef } from 'react'
import { Download, FileCode, Terminal, LogIn, CheckCircle } from 'lucide-react'

const steps = [
  { icon: Terminal, text: 'Install Python 3 from python.org' },
  { icon: Terminal, text: 'Install Selenium: pip install selenium' },
  { icon: FileCode, text: 'Download ChromeDriver matching your Chrome version' },
  { icon: Terminal, text: 'Run: python cookies_maker.py' },
  { icon: LogIn, text: 'Log into Facebook in the browser window that opens' },
  { icon: CheckCircle, text: 'Press Enter in the terminal - cookies saved to cookies.pkl' },
]

const CookieMaker = forwardRef(function CookieMaker(props, ref) {
  return (
    <section ref={ref} className="cookie-section">
      <h3>🍪 Cookie Maker</h3>
      <p className="cookie-desc">
        Generate your own Facebook session cookies for use with Poder. Download the script and follow the steps below.
      </p>

      <div className="cookie-download">
        <a href="/cookies_maker.py" className="primary-button glow-effect" download>
          <Download size={20} />
          Download cookies_maker.py
        </a>
      </div>

      <div className="steps">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} className="step">
              <div className="step-number">{i + 1}</div>
              <Icon size={20} />
              <span>{s.text}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
})

export default CookieMaker
