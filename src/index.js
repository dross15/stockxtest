import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Shoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Empty',
      showEmpty: true,
      showForm: false,
      buttonsHidden: true,
      showFields: false,
      brand: '',
      style: '',
      size: '',
      upcid: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

/* prompts the user to either add, edit, delete sneaker */
  handleClick(){
    this.setState({
      showEmpty: false,
      buttonsHidden: false,
      showFields: false
    })
  }

/* deletes the sneaker and turns cell back to empty */
  removeShoe(){
    this.setState({
      showEmpty: true,
      buttonsHidden: true,
      showFields: false,
      brand: '',
      style: '',
      size: '',
      upcid: '',
    })
  }

/* prompts the user to fill out the form for adding the shoe */
  addShoe(){
    this.setState({
      buttonsHidden: true,
      showForm: true,
      brand: '',
      style: '',
      size: '',
      upcid: ''
    })
  }
/* prompts the user to edit the shoe in the cell, if info is empty, sets the cell back to empty */
  editShoe(){
    if (this.state.brand === '' && this.state.style === '' && this.state.size === '' && this.state.upcid === '') {
      this.setState({
        value: 'Empty',
        showEmpty: true,
        buttonsHidden: true,
        showForm: false,
      })
    } else {
      this.setState({
        buttonsHidden: true,
        showForm: true
      })
    }
  }

/* changes the state of the brand, style, size, and upcid as user fills in form */
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
/* displays the submitted data for the sneaker in the cell, or if data was empty, sets cell back to empty */
  handleSubmit() {
    if (this.state.brand === '' && this.state.style === '' && this.state.size === '' && this.state.upcid === '') {
      this.setState({
        value: 'Empty',
        showEmpty: true,
        buttonsHidden: true,
        showForm: false,
      })
    } else {
      this.setState({
        showForm: false,
        showFields: true
      });
    }
  }

  render() {
    let displayEmpty, displayButtons, displayForm, displayFields;
    /* if showEmpty is true, displays an empty cell and prompts user with options upon click on cell*/
    if (this.state.showEmpty === true) {
      displayEmpty = <div className="empty" onClick={() => this.handleClick()}><p>{this.state.value}</p></div>
    }
    /* if buttonsHidden is false, it shows the user the option buttons, add, edit, delete */
    if(this.state.buttonsHidden === false) {
      displayButtons = <div className="buttons"><p>How would you like to proceed?</p><button type="button" onClick={() => this.addShoe()}>Add</button><button type="button" onClick={() => this.editShoe()}>Edit</button><button type="button" onClick={() => this.removeShoe()}>Remove</button></div>
    }
    /* if showForm is true, it shows the user the form to fill out the sneaker information */
    if(this.state.showForm === true) {
      displayForm = <form><label>Brand:<input name ="brand" value={this.state.brand} type="text" onChange={this.handleInputChange} /></label><br /><label>Style:<input name ="style" value={this.state.style} type="text" onChange={this.handleInputChange} /></label><br /><label>Size:<input name ="size" value={this.state.size} type="text" onChange={this.handleInputChange} /></label><br /><label>UPC ID:<input name ="upcid" value={this.state.upcid} type="text" onChange={this.handleInputChange} /></label><br /><button type="button" onClick={() => this.handleSubmit()}>Submit</button></form>
    }
    /* if showFields is true, it shows the user the information for the sneaker in the cell */
    if(this.state.showFields === true) {
      displayFields = <div className="fields" onClick={() => this.handleClick()}><p>Brand: {this.state.brand}</p><p>Style: {this.state.style}</p><p>Size: {this.state.size}</p><p>UPC ID: {this.state.upcid}</p></div>
    }
    return (
    <div className="shoe">
        {displayEmpty}
        {displayButtons}
        {displayForm}
        {displayFields}
      </div>
    );
  }
}

class Inventory extends React.Component {
  renderShoe() {
    return <Shoe />;
  }

  render() {
    const title = 'StockX Shoe Inventory';

    /* renders 25 shoes for the 5x5 grid */
    return (
      <div>
        <div className="title">{title}</div>
        <div className="inventory">
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Inventory />,
  document.getElementById('root')
);

