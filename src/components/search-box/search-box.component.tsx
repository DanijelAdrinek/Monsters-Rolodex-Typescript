import { ChangeEventHandler } from 'react';

// importing a stylesheet for the searchbox
import './search-box.styles.css';

type SearchBoxProps = {
    className: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}


const Search = ({ className, onChangeHandler }: SearchBoxProps) => (
        // search box class is hard-coded, and monsters-search-box is passed to the element using props
        <input className={`search-box ${className}`} type='search' placeholder='search monsters' onChange={onChangeHandler}/>
);

export default Search;