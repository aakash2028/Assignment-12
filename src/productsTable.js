import React from 'react';
import ProductRow from './productRow';

class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }
  handleDestroy(id) {
    this.props.onDestroy(id)
  }
  render() {
    const {products, filterText = ' '} = this.props;
    const productRows = Object.entries(products)
                          .filter(([id,product]) => filterText.length === 0 || product.name.indexOf(filterText) >= 0)
                          .map(([id, product]) => <ProductRow key={id} productData = {product} onDestroy={this.handleDestroy}/>);
    return <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>
            Name 
          </th> 
          <th>
            Category 
          </th> 
          <th> 
            Price 
          </th> 
          <th> 
            Delete 
          </th> 
        </tr> 
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  }
}

export default ProductsTable;