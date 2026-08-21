import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Portfolio from './components/Portfolio'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="bg-bg text-text font-sans min-h-screen selection:bg-green selection:text-bg">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}