import React from "react";

class SearchBar extends React.Component{
    state = {term: ''};

    onTextChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit}  className="ui form">
                    <div className="field">
                        <label>Video Search</label>

                        <input 
                        value = {this.state.term} 
                        onChange={this.onTextChange} 
                        type="text"
                        />

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;