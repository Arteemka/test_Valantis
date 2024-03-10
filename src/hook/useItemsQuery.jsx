import { useState } from "react";
import { itemsAPI } from "../api/api";
import { removeDuplicate } from "../utils/removeDuplicates";
import { useQuery } from "@tanstack/react-query";

export default function useItemsQuery(field, fieldValue) {
  const limit = 50;
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchItems = async () => {
    if (field && fieldValue) {
      const ids = await itemsAPI.getItemsByFilter(field, fieldValue);

      setTotalAmount(ids.length);

      return removeDuplicate(await itemsAPI.getItems(ids));
    }

    const allTotalAmount = await itemsAPI.getAllIds();
    const ids = await itemsAPI.getIds(offset, limit);

    setTotalAmount(allTotalAmount.length);

    return removeDuplicate(await itemsAPI.getItems(ids));
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["items", offset, page, limit, field, fieldValue],
    queryFn: fetchItems,
    retry: 1,
  });

  const changePage = (page) => {
    page === 1 ? setOffset(0) : setOffset(page * limit);
    setPage(page);
  };

  return {
    offset,
    totalAmount,
    data,
    error,
    page,
    isLoading,
    changePage,
    limit,
  };
}
