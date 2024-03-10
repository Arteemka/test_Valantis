import { useState } from "react";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

import useItemsQuery from "../../hook/useItemsQuery";
import { Error } from "../Error/Error";
import { Menu } from "../Menu/Menu";
import { Card } from "../Card/Card";
import { SkeletonItems } from "../Skeleton/Skeleton";
import "./Main.css";

export function Main() {
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState(null);
  const { changePage, isLoading, error, data, totalAmount, limit } =
    useItemsQuery(filterType, filter);
    
  const handleFilter = (type, value) => {    
    setFilter(value);
    setFilterType(type);
    
  };

  if (error) {
    return <Error src={"/error.jpg"} error={error.message} />;
  }

  return (
    <>
      <Menu handleFilter={handleFilter} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          m: 2,
          borderRadius: 1,
        }}
      >
        {!isLoading && !data?.length ? (
          <Error src={"/empty.jpg"} error={"Нету данных"} />
        ) : !isLoading && data ? (
          <div className="container">
            <div className="cards_category">
              {data.map((data, index) => (
                <Card key={index} {...data} />
              ))}
            </div>
          </div>
        ) : (
          <SkeletonItems limit={limit} />
        )}

        <Pagination
          size={"large"}
          style={{ position: "fixed", right: 0 }}
          count={Math.ceil(totalAmount / 50)}
          shape="rounded"
          color="primary"
          variant="outlined"
          onChange={(event, value) => changePage(value)}
        />
      </Box>
    </>
  );
}
