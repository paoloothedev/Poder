import { useRef } from 'react'
import SpiderWeb from './components/SpiderWeb'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyPoder from './components/WhyPoder'
import DownloadSection from './components/DownloadSection'
import CookieMaker from './components/CookieMaker'
import Footer from './components/Footer'

function downloadSetup(cookieRef) {
  const link = document.createElement('a')
  link.href = '/resources/setup.exe'
  link.download = 'setup.exe'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  setTimeout(() => {
    cookieRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, 500)
}

export default function App() {
  const cookieRef = useRef(null)

  return (
    <div className="app">
      <SpiderWeb />
      <div className="content">
        <Navbar />
        <main>
          <Hero onDownload={() => downloadSetup(cookieRef)} />
          <Features />
          <WhyPoder />
          <DownloadSection onDownload={() => downloadSetup(cookieRef)} />
          <CookieMaker ref={cookieRef} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
