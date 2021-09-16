import React, { Component } from 'react';

const withValidation = (Wrapped, validators) => {
  return class extends Component {
    state = {errors: []}

    validateOnChange = val => {
      var status = true
      this.setState({errors: []})
      
      validators.map(v => {
        const e = v(val)
        if (!e.isValid) {
          this.setState({errors: [...this.state.errors, e.message]})
          status = e.isValid
        }
      })
      this.props.onChanged(val, status)
    }
  
    render() {
        const { errors } = this.state
        return <Wrapped errors={errors} validateOnChange={this.validateOnChange} {...this.props} />;
    }
  }
};

export default withValidation;
