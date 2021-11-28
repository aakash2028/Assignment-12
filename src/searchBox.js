import React from 'react';
class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    const value = e.target.value
    const name = e.target.name

    this.props.onFilter({
         [name]: value
    });
  }
  render() {
    return <form> <input name="filterText" class="form-control" onChange={this.handleChange} type="text" placeholder="Search..."></input> </form>;
  }
}

export default SearchBox;