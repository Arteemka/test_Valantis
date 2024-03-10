import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const AutoComplete = ({ names, handleFilter, isLoading }) => {
  return (
    <Autocomplete
      disabled={isLoading}
      id="combo-box-demo"
      options={names}
      onInputChange={(event, value, reason) => {
        if (reason === "clear") {
          handleFilter(null, "");
          return;
        } else if (reason === "reset") {
          handleFilter("product", value);
        } else if (value === "") {
          handleFilter(null, "");
        }
      }}
      style={{ width: 300, margin: "50px 20px" }}
      renderInput={(params) => (
        <TextField {...params} label="Названия" variant="outlined" />
      )}
    />
  );
};
