import React, { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { discoverData } from "apis/data";
import { CustomCard } from "components";
import MovieSearchIcon from "mdi-material-ui/MovieSearch";
import Select from "react-select";

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
let filters = {};

function Explore() {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.theme);
  const dataReducer = useSelector((state) => state.data);

  const { mediaType } = useParams();

  const { ref, inView } = useInView();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [storedMediaType, setStoredMediaType] = useState("");
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);

  useEffect(() => {
    if (mediaType.length > 0 && mediaType !== storedMediaType) {
      setStoredMediaType(mediaType);
      setData([]);
    }
  }, [mediaType, storedMediaType]);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        dispatch(discoverData({ mediaType: mediaType, page: page })).then(
          (res) => {
            setData([...data, ...res.payload.results]);
            page++;
          }
        );

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
    // eslint-disable-next-line
  }, [inView, data, isLoading]);

  useEffect(() => {
    filters = {};
    setSortby(null);
    setGenre(null);
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }
  };

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
          flexDirection: "row",
          justifyContent: "space-between",
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
          Explore {mediaType === "movie" ? "Movies" : "TV Shows"}
        </Text>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Select
            isMulti
            name="genres"
            value={genre}
            closeMenuOnSelect={false}
            options={dataReducer.genres}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={onChange}
            placeholder="Select genres"
          />

          <Select
            name="sortby"
            value={sortby}
            options={sortbyData}
            onChange={onChange}
            isClearable={true}
            placeholder="Sort by"
            style={{
              width: "200px",
            }}
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
              fontFamily: "Bebas Neue, sans-serif",
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
