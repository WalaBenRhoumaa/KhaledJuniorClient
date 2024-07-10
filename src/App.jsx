import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/Header.jsx';
import AboutSection from './component/AboutSection.jsx';
import CoachingSection from './component/CoachingSection.jsx';
import Services from './component/Services.jsx';
import ContactForm from './component/contact';
import Events from './component/Events';
import MyBlogs from './component/MyBlogs.jsx';
import Page from './component/Page.jsx';

function App() {
  const location = useLocation();
  const isPageRoute = location.pathname === '/page';

  return (
    <div>
      {!isPageRoute && (
        <>
          <Header />
          <AboutSection />
          <CoachingSection />
        </>
      )}
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/page" element={<Page />} />
      </Routes>
      {!isPageRoute && (
        <>
          <Events />
          <MyBlogs />
          <ContactForm />
        </>
      )}
    </div>
  );
}

export default App;
