SearchBar = React.createClass( {
  render: function() {
    return(
      <form action="/search">
        <img src={this.props.search}/>
        <input type="text" name="query" placeholder="Search"/>
        <button type="submit">Go</button>
      </form>
    )
  }
});
