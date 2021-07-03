import React from 'react';

const withValidation = (Wrapped, validators) => {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = { errors: [] };
        }

        validateOnChange = (value) => {
            const errors = [];
            validators.map(validator => {
                const validationResponse = validator(value)
                if (!validationResponse.isValid) {
                    errors.push(validationResponse.message);
                }
            });
            this.setState({ errors: [...errors] });
            this.props.onChanged(value, !errors.length);
        }

        render() {
            return <Wrapped {...this.props} validateOnChange={this.validateOnChange} errors={this.state.errors}/>;
        }
    }
};

export default withValidation;
