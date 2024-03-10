import { useQueryFields } from "../../hook/useQueryFields";
import { AutoComplete } from "./Input/AutoComplete";
import { InputPrice } from "./Input/InputPrice";
import { SelectBrand } from "./Select/SelectBrand";

export const Menu = ({ handleFilter }) => {
  const { isLoading, names, brands } = useQueryFields();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AutoComplete
        names={names}
        handleFilter={handleFilter}
        isLoading={isLoading}
      />
      <SelectBrand
        handleFilter={handleFilter}
        brands={brands}
        isLoading={isLoading}
      />
      <InputPrice handleFilter={handleFilter} isLoading={isLoading} />
    </div>
  );
};
