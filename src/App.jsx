import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContinuousLearning from './pages/ContinuousLearning'
import Research from './pages/Research'
import AustrianProcess from './pages/AustrianProcess'
import Teaching from './pages/Teaching'
import MannheimCapital from './pages/MannheimCapital'
import Consulting from './pages/Consulting'
import IbbiValuation from './pages/IbbiValuation'
import TechStack from './pages/TechStack'
import Qualifications from './pages/Qualifications'
import Experience from './pages/Experience'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/continuous-learning" element={<ContinuousLearning />} />
          <Route path="/research" element={<Research />} />
          <Route path="/austrianprocess" element={<AustrianProcess />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/mannheim-capital" element={<MannheimCapital />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/ibbi-valuation" element={<IbbiValuation />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
