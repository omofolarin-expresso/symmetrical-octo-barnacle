import React, { Component } from 'react';

const withFetching = (Wrapped, Loading, loader) => {
  return class extends Component {
    state = {showLoading: true, data: null}
  
    loadData = async () => {
        const data = await loader();
        this.setState({ showLoading: false, data });
    }
  
    reload = () => this.setState({ showLoading: true }, () => this.loadData())
    
    componentDidMount = async () => (await this.loadData())
  
    render() {
        const {showLoading, data} = this.state
        return showLoading ? (
          <Loading {...this.props.loadingProps} />
        ) : (
          <Wrapped {...this.props} payload={data} reload={this.reload} />
        )
    }
  }
};

export default withFetching;
