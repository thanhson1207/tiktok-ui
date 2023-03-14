import { Routes, Route, Link } from 'react-router-dom'

import Home from './Page/Home'
import News from './Page/News'
import Contact from './Page/Contact'

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/News' element={<News />} />

      </Routes>
    </div>
  );
}

export default App;
