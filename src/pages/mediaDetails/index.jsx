import React, { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { discoverData } from "apis/data";
import { CastSwiper, CustomSwiper } from "components";
import {
  similarData,
  recommendationsData,
  videosData,
  creditsData,
} from "apis/data";

function MediaDetails() {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.theme);
  const dataReducer = useSelector((state) => state.data);

  const { mediaType, mediaId } = useParams();
  useEffect(() => {
    if (mediaType && mediaId) {
      dispatch(creditsData({ mediaType: mediaType, mediaId: mediaId }));
      dispatch(videosData({ mediaType: mediaType, mediaId: mediaId }));
      dispatch(similarData({ mediaType: mediaType, mediaId: mediaId }));
      dispatch(recommendationsData({ mediaType: mediaType, mediaId: mediaId }));
    }
    // eslint-disable-next-line
  }, [mediaType, mediaId]);

  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        mt: "150px",
        flexDirection: "column",
      }}
    >
      <CastSwiper data={dataReducer?.credits} url={dataReducer?.url?.profile} />
      <CustomSwiper
        title={`Similar ${mediaType === "movie" ? "Movies" : "TV Shows"}`}
        data={dataReducer?.similar}
        mediaType={mediaType}
      />

      <CustomSwiper
        title={"Recommendations"}
        data={dataReducer?.recommendations}
        mediaType={mediaType}
      />
    </Box>
  );
}

export default MediaDetails;
