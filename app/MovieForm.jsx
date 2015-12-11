var React = require('react');

var MovieForm = React.createClass({
  render: function () {
    return (
      <form className="movie-form">
        <h3 className="col-md-12">Add a movie</h3>
        <div className="col-md-4">
          <div className="input-group col-md-11">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group col-md-11">
            <label>Actors</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group col-md-11">
            <label>Synopsis</label>
            <textarea className="form-control" />
          </div>
        </div>
        <div className="col-md-12">
          <input type="submit" className="btn btn-primary pull-right" value="Save" />
        </div>
      </form>
    );
  }
});

module.exports = MovieForm;
