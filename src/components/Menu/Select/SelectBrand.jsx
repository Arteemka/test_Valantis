import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectBrand = ({ handleFilter, brands, isLoading }) => {
  return (
    <FormControl sx={{ m: 0, width: 300, margin: "50px 20px" }}>
      <InputLabel id="demo-multiple-name-label">Брэнды</InputLabel>
      <Select
        disabled={isLoading}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        onChange={(event) => handleFilter("brand", event.target.value)}
        input={<OutlinedInput label="BRANDS" />}
        renderValue={(value) => (value ? value : "None")}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {brands.map((brand) => (
          <MenuItem key={brand} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
