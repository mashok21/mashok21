import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContinuousLearning from './pages/ContinuousLearning'
import Research from './pages/Research'
import AustrianProcess from './pages/AustrianProcess'
import Teaching from './pages/Teaching'
import MannheimCapital from './pages/MannheimCapital'
import IbbiValuation from './pages/IbbiValuation'
import TechStack from './pages/TechStack'
import Qualifications from './pages/Qualifications'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/continuous-learning" element={<ContinuousLearning />} />
          <Route path="/research" element={<Research />} />
          <Route path="/austrianprocess" element={<AustrianProcess />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/mannheim-capital" element={<MannheimCapital />} />
          <Route path="/ibbi-valuation" element={<IbbiValuation />} />
          <Route path="/tech-stack" element={<TechStack />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
