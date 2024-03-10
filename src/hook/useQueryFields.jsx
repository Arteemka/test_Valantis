import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { itemsAPI } from "../api/api";

export const useQueryFields = () => {
  const [brands, setBrands] = useState([]);
  const [names, setNames] = useState([]);

  const fetchAllFields = async () => {
    return await Promise.allSettled(
      ["price", "brand", "product"].map(async (field) => {
        const response = await itemsAPI.getFields(field);
        const result = { field, result: response };
        
        return result;
      })
    );
  };

  const { data, isLoading } = useQuery({
    queryKey: ["fields"],
    queryFn: fetchAllFields,
    retry: 5,
  });

  const sortFields = () => {
    !isLoading &&
      data?.length &&
      data?.map((field) => {
        if (field.status === "fulfilled") {
          if (field.value.field === "brand") {
            setBrands(
              Array.from(new Set(field.value.result)).filter((brand) => !!brand)
            );
          } else if (field.value.field === "product") {
            setNames(Array.from(new Set(field.value.result)));
          }
        }
      });
  };

  useEffect(() => {
    sortFields();
  }, [data]);

  return { brands, names, isLoading, data };
};
