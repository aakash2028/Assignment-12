import React from 'react';
class ProductsRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this)
  }
  destroy() {
    this.props.onDestroy(this.props.productData.id);
  }
  render() {
    const {name, price, category} = this.props.productData
    return <tr>
      <td> {name} </td>
      <td> {category} </td>
      <td> {price} </td>
      <td> <input class="btn btn-primary" type="button" value="Delete" onClick={this.destroy}></input> </td>
    </tr>
  }
}

export default ProductsRow;