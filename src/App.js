import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home"; // Import your Home component
import TechSidebar from "./Components/TechSidebar";
import PostPage from "./Components/PostPage"; // Import your PostPage component
import EventsPage from "./Components/EventsPage"; // Import your EventsPage component
import GroupsPage from "./Components/GroupsPage"; // Import your GroupsPage component
import Header from "./Components/Header"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/post" component={PostPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/groups" component={GroupsPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
