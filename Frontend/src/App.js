import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import MatchPredictionPage from './pages/MatchPredictionPage';
import CompetitionGroupsPage from './pages/CompetitionGroupsPage';
import LiveLeaderboardPage from './pages/LiveLeaderboardPage';
import NotificationsPage from './pages/NotificationsPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/predict" component={MatchPredictionPage} />
          <Route path="/groups" component={CompetitionGroupsPage} />
          <Route path="/leaderboard" component={LiveLeaderboardPage} />
          <Route path="/notifications" component={NotificationsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
