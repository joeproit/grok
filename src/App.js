import React from 'react';
import './App.css';
import MainNav from './components/Nav/MainNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Contact from './pages/contact';

  
function App() {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Routes>
    </Router>
  );
}
  
export default App;