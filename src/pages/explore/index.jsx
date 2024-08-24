import React, { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { discoverData } from "apis/data";
import { CustomCard, CustomSelect } from "components";
import MovieSearchIcon from "mdi-material-ui/MovieSearch";

let page = 1;
const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

function Explore() {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.theme);
  const dataReducer = useSelector((state) => state.data);

  const { mediaType } = useParams();

  const { ref, inView } = useInView();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [storedMediaType, setStoredMediaType] = useState("");
  const [genre, setGenre] = useState({
    value: null,
    prevValue: null,
  });
  const [sortby, setSortby] = useState({
    value: null,
    prevValue: null,
  });

  useEffect(() => {
    if (mediaType.length > 0 && mediaType !== storedMediaType) {
      setStoredMediaType(mediaType);
      setData([]);
    }
  }, [mediaType, storedMediaType]);

  const handleSelectedValue = (event) => {
    const { name, value } = event.target;
    if (name === "genre") {
      setGenre((prevValue) => ({
        ...prevValue,
        prevValue: prevValue.value,
        value: value,
      }));
    } else if (name === "sortby") {
      setSortby((prevValue) => ({
        ...prevValue,
        prevValue: prevValue.value,
        value: value,
      }));
    }
    page = 1;
  };

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        dispatch(
          discoverData({
            mediaType: mediaType,
            page: page,
            genre: genre.value,
            sortby: sortby.value,
          })
        ).then((res) => {
          setData([...data, ...res.payload.results]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  useEffect(() => {
    page = 1;
    if (mediaType && (genre.value || sortby.value)) {
      setIsLoading(true);
      dispatch(
        discoverData({
          mediaType: mediaType,
          page: page,
          genre: genre.value,
          sortby: sortby.value,
        })
      ).then((res) => {
        setData(res.payload.results);
        setIsLoading(false);
        page++;
      });
    }
  }, [genre.value, sortby.value, mediaType]);

  console.log({ genre, sortby });
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
          display: "flex",
          flexDirection: ["column", "column", "column", "row", "row"],
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Text
          sx={{
            color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
            fontFamily: "Rubik, sans-serif",
            letterSpacing: "2px",
            fontSize: "2rem",
            fontWeight: 700,
          }}
        >
          Explore {mediaType === "movie" ? "Movies" : "TV Shows"}
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row", "row", "row"],
            gap: 2,
          }}
        >
          <CustomSelect
            name="genre"
            handleSelectedValue={handleSelectedValue}
            data={
              dataReducer?.genres && dataReducer?.genres?.length > 0
                ? dataReducer?.genres
                : []
            }
            placeholder="Select Genre"
          />
          <CustomSelect
            name="sortby"
            handleSelectedValue={handleSelectedValue}
            data={sortbyData && sortbyData.length > 0 ? sortbyData : []}
            placeholder="Sort By"
          />
        </Box>
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
          <CustomCard key={idx} item={data} mediaType={mediaType} />
        ))}
      </Box>
      {inView && !isLoading && data?.length === 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            width: "100%",
            flexDirection: "column",
          }}
        >
          <MovieSearchIcon
            sx={{
              width: "6rem",
              height: "6rem",
              color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
            }}
          />
          <Text
            sx={{
              color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
              fontFamily: "Rubik, sans-serif",
              letterSpacing: "2px",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            no movies found{" "}
          </Text>
        </Box>
      )}
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
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

export default Explore;
