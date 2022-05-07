import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        onFormSubmit(term);
    }

    
        return(
            <div className="ui segment search-bar">
                <form onSubmit={onSubmit}  className="ui form">
                    <div className="field">
                        <label>Video Search</label>

                        <input 
                        value = {term} 
                        onChange={e => setTerm(e.target.value)}
                        type="text"
                        />

                    </div>
                </form>
            </div>
        );
}

export default SearchBar;