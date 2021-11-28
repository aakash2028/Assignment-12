import React from 'react';
import SearchBox from './searchBox';
import ProductTable from './productsTable';
import ProductForm from './productForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inventoryData: {
        '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
        '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
        '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
        '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
        '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
        '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
      },
      filterText: ''
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this)
  }

  handleFilter(filterInput) {
    this.setState(filterInput);
  }

  handleSave(product) {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
         let products = prevState.inventoryData
         products[product.id] = product
         return { products }
    });
  }

  handleDestroy(productId) {
    this.setState((prevState) => {
         let products = prevState.inventoryData
         delete products[productId]
         return { products }
    })
  }

  render() {
    return (
      <div class="container">
        <h1> My Inventory </h1>
        <SearchBox onFilter={this.handleFilter}/>
        <ProductTable products={this.state.inventoryData} filterText = {this.state.filterText} onDestroy={this.handleDestroy}/>
        <ProductForm onSave={this.handleSave}/>
      </div>
    );
  }
}

export default App;
