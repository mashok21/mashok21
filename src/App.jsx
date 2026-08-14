import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContinuousLearning from './pages/ContinuousLearning'
import Research from './pages/Research'
import AustrianProcess from './pages/AustrianProcess'
import Teaching from './pages/Teaching'
import Writing from './pages/Writing'
import MannheimCapital from './pages/MannheimCapital'
import IbbiValuation from './pages/IbbiValuation'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continuous-learning" element={<ContinuousLearning />} />
          <Route path="/research" element={<Research />} />
          <Route path="/austrianprocess" element={<AustrianProcess />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/mannheim-capital" element={<MannheimCapital />} />
          <Route path="/ibbi-valuation" element={<IbbiValuation />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
