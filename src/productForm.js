import React from 'react';
class ProductForm extends React.Component {
  constructor(props) {
    const RESET_VALUES = {id: '', category: '', price: '$', name: ''};
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES), errors: {}
    };
  }
  
  handleSave(e) {
    const RESET_VALUES = {id: '', category: '', price: '$', name: ''};
    // this.setState ( prevState => {
    //   let prod = prevState.product;
    //   prod.price ='$' + prod.price
    // }) 
    if(this.validate()){
      this.props.onSave(this.state.product)
      this.setState({        
        product: Object.assign({}, RESET_VALUES), errors: {}
      })
    } else {
      alert('Enter all the fields');
    }
    
    e.preventDefault(); //Prevent form from triggering HTTP POST
  }
  
  validate = () => {

    let name = this.state.product.name;
    let category = this.state.product.category;
    let price = this.state.product.price;
    let errors = {}

    if(name === "") {
        errors['name'] = "name error"
        this.setState({ errors })
        return false
    }  
    if(category === "") {
        errors['category'] = "category error"
        this.setState({ errors })
        return false
    }
    if(price === ""){
        errors['price'] = "price error"
        this.setState({ errors })
        return false
    }
    return true;
}
  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState((prevState) => {
         prevState.product[name] = value
         return { product: prevState.product }
    })
  }

  render() {
    return <form>
      <h4> Enter a new product </h4>
      <label>Name: </label> <br/>
      <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.product.name} placeholder="Enter product name here"></input> <br/>
      <label>Category: </label> <br/>
      <input type="text" class="form-control" name="category" onChange={this.handleChange} value={this.state.product.category} placeholder="Enter product category"></input> <br/>
      <label>Price: </label> <br/>
      <input type="text" class="form-control" name="price" onChange={this.handleChange} value={this.state.product.price} placeholder="Enter product price"></input> <br/>
      <input type="submit" class="btn btn-primary" value="Save" onClick={this.handleSave}></input>
    </form>;
  }
}

export default ProductForm;