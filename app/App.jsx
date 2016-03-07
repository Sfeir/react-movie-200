var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />

        <ul className="thumbnails list-unstyled">
            <li className="col-md-12 row">
                <img src="img/avatar.jpg" className="col-md-2" />
                <div className="caption">
                    <h3>AVATAR</h3>
                    <p><b>Acteurs : </b>Bruce Willis, Bruce Willis & Bruce Willis</p>
                    <p><b>Synopsis : </b>Il se passe des trucs dans ce film</p>
                </div>
            </li>

            <li className="col-md-12 row">
                <img src="img/rec.jpg" className="col-md-2" />
                <div className="caption">
                    <h3>REC</h3>
                    <p><b>Acteurs : </b>Des gens, et d'autres gens.</p>
                    <p><b>Synopsis : </b>Il se passe aussi des trucs dans ce film</p>
                </div>
            </li>
        </ul>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('main'));
