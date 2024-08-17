import React, { useEffect, useState } from "react";
import { Box, Image, Spinner, Text, Input, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { fetchData } from "apis/data";
import { CustomCard } from "components";

let page = 1;
function SearchResult() {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.theme);

  const navigate = useNavigate();
  const { query } = useParams();

  const { ref, inView } = useInView();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(fetchData({ query: query, page: page })).then((result) => {
        setIsLoading(false);
      });
    }

    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        dispatch(fetchData({ query: query, page: page })).then((res) => {
          setData([...data, ...res.payload.results]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        margin: "auto",
        mt: "150px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Text
          sx={{
            color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
            fontFamily: "Bebas Neue, sans-serif",
            letterSpacing: "2px",
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          Search results of {`'${query}'`}
        </Text>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: [
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
          ],
          gridTemplateRows: "1fr",
          gap: 2,
        }}
        // onClick={() => detailsHandler(item?.type, item?.id)}
      >
        {data?.map((data, idx) => (
          <CustomCard key={idx} item={data} />
        ))}
      </Box>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {inView && isLoading && (
          <Spinner
            size="xl"
            _loading={isLoading}
            color={themeReducer?.theme === "light" ? "#000" : "#FFE53B"}
          />
        )}
      </Box>
    </Box>
  );
}

export default SearchResult;
