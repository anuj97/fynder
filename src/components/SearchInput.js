function SearchInput(props) {

    const startSearch = function(query) {
        props.searchFunc(query, props.setSearchList);
        props.setSearchTerm(query);
    }

    return(
        <div>
            <input
                autoFocus
                className="searchPaneInput"
                name="searchTerm"
                id="searchSelect"
                placeholder="Search.."
                value={props.searchTerm}
                onChange={e => startSearch(e.target.value)} />
        </div>
    );
}

export default SearchInput;