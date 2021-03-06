import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// custom Hooks
import useFetch from './API/useFetch';

// components
import Chart from './chart/chart';
import Header from './header/header';
import Footer from './footer/footer';

import '../styles/normalize.css';
import './app.css';

const App = () => {
  const data = useFetch(
    'https://api.coindesk.com/v1/bpi/historical/close.json'
  );

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Chart data={data} />
          <Footer />
        </div>
      </Router>
    );
  }
};

export default App;

// ----------------------------------

// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );
// export default BasicExample;
