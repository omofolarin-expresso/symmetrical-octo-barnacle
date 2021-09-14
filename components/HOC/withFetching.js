import React, {Component} from 'react';

const withFetching = (Wrapped, Loading, loader) => {
    return class extends Component {
        state = {isLoading: true, data: null}

        getData = async () => {
            const data = await loader();
            this.setState({ isLoading: false, data });
        }

        reload = () => this.setState({ isLoading: true }, () => this.getData())
        
        componentDidMount = async () => (await this.getData())

        render() {
            const {isLoading, data} = this.state
            if (isLoading) return <Loading {...this.props.loadingProps} />
            return <Wrapped {...this.props} payload={data} reload={this.reload} />;
        }
    }
};

export default withFetching;
