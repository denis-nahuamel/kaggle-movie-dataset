import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export const SearchBar = (props) => {
    return (
      <FormControl sx={{ m: 2, width: '100ch' }}>
        <InputLabel htmlFor='outlined-adornment-amount'>Search</InputLabel>
        <OutlinedInput
          id='outlined-adornment-amount'
          onChange={(e) => props.onSearch(e.target.value.toLowerCase())}
          value={props.value}
          startAdornment={
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>
          }
          label='Search'
        />
      </FormControl>
    );
  };
  
  export default SearchBar;