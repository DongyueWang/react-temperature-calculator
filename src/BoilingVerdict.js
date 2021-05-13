import React from 'react';

class BoilingVerdict extends React.Component {
    render() {
        if (this.props.celsius >= 100)
            return (<div>Boiling</div>);
        else
            return (<div>not boiling</div>)
    }
}

export default BoilingVerdict;