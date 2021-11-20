import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class displayAll extends React.Component {
    render() {
      return (
        <body>
          <h1> PORTFOLIO </h1>
        </body>
      );
    }
  }

  ReactDOM.render(
    <React.StrictMode>
      {displayAll}
    </React.StrictMode>,
    document.getElementById('container')
  );