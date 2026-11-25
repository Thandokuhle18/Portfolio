import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ToolkitSection } from './components/ToolkitSection'
import { WorkSection } from './components/WorkSection'

function App() {
  return <><Header /><main><Hero /><WorkSection /><AboutSection /><ToolkitSection /><ContactSection /></main><Footer /></>
}

export default App
