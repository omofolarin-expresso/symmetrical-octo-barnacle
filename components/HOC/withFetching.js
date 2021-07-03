import React from 'react';

const withFetching = (Wrapped, Loading, loader) => {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                payload: null,
            }
        }

        componentDidMount() {
            this.loadData();
        }

        loadData = async () => {
            const payload = await loader(this.props);
            this.setState({
                loading: false,
                payload,
            });
        }

        reload = () => {
            this.setState({ loading: true }, () => this.loadData())
        }

        render() {
            return this.state.loading ? <Loading {...this.props.loadingProps} /> : <Wrapped {...this.props} payload={this.state.payload} reload={this.reload} />;
        }
    }
};

export default withFetching;
