import { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');
   
    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input value={term} onChange={e => setTerm(e.target.value)} className="input" />
            </div>
        </div>
    )

}
export default SearchBar;