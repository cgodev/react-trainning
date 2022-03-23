import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''}
    onInputSearchChange = (e) => {
        this.setState({term: e.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search: {this.state.term}</label>
                        <input type="text" onChange={this.onInputSearchChange} value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;