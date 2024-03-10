import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import useDebounce from "../../../hook/useDebounce";

export const InputPrice = ({ handleFilter, isLoading }) => {
  const [price, setPrice] = useState("");
  const debounced = useDebounce(price, 500);

  useEffect(() => {
    if (debounced) {
      return handleFilter("price", price);
    }

    return handleFilter(null, "");
  }, [debounced]);

  const handlePrice = (event) => {
    setPrice(Number(event.target.value));
  };

  return (
    <TextField
      disabled={isLoading}
      id="outlined-basic"
      onChange={handlePrice}
      onBlur={handlePrice}
      label="Цена"
      variant="outlined"
      style={{ margin: "50px 20px" }}
    />
  );
};
