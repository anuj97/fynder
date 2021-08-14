function SearchResults(props) {

    let options = Array.from(props.searchList).map(function (searchedProfile, index) {
        return <button 
                className="searchResult"
                key={index}
                onClick={() => props.selectUser(searchedProfile)}>
                <img
                    alt="User Avatar"
                    className="userAvatar"
                    src={searchedProfile.avatar_url} 
                    height="50px"
                    width="50px"/>
                <div className="userName">
                    {searchedProfile.login}
                </div>
            </button>
    });

    return(
        <div className="searchResultsPane">
            {options}
        </div>
    );
}

export default SearchResults;