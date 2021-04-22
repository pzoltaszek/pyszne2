
import { useState } from "react";
import './Search.css';
import { useHistory } from 'react-router-dom';


function Search() {

    const [searchText, setSearchText] = useState('');
    const history = useHistory();
    const onSearchInputChange = (e) => {
        setSearchText(e.target.value);
    }
    const handleSubmit = (e) => {
        history.push('/restaurants');
    }

    return (
        <div className='search-container'>
            <span>podaj swoj adres</span>
            <form>
                <input type="text" aria-label="search-input" onChange={e => onSearchInputChange(e)} value={searchText}></input>
                <button className="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Search;