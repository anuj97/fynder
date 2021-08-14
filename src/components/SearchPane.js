import { useState }  from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import '../styles/searchPane.css';
import { debounce, callSearch } from '../helpers/queries';

const searchFunc = debounce(callSearch, 300);

function SearchPane() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchList, setSearchList] = useState([]);

    const selectUser = function(result) {
        let searchList = [];
        searchList.push(result);
        setSearchTerm(result.login);
        setSearchList(searchList);
    }

    return(
        <div className="searchPane">
            <SearchInput setSearchTerm={setSearchTerm} searchFunc={searchFunc} setSearchList={setSearchList} searchTerm={searchTerm} />
            <SearchResults searchList={searchList} selectUser={selectUser} />
        </div>
    );
}

export default SearchPane;