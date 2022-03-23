import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            geolocation => this.setState({ lat: geolocation.coords.latitude }),
            error => this.setState({ errorMessage: `Not value. Reason: ${error.message}` })
        )
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Waiting a response . . ." />
    }


    render() {
        return(
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)