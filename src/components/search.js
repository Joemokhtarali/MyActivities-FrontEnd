import React from 'react'
import '../../src/index.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Search = (props) => {
    return (
        <div>
            <div className="ui large fluid icon input">
                <TextField
                    placeholder='Search Activity'
                    onChange={props.changeSearchInput}
                />
                <Button onClick={props.changeButtonState}>Search</Button>
            </div>
        </div>
    )
}


export default Search