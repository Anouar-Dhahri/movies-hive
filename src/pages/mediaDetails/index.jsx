import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DetailsBanner,
  CastSwiper,
  CustomSwiper,
  VideoSwipper,
} from "components";
import {
  similarData,
  recommendationsData,
  videosData,
  creditsData,
  detailsData,
} from "apis/data";

function MediaDetails() {
  const dispatch = useDispatch();
  const dataReducer = useSelector((state) => state.data);

  const { mediaType, mediaId } = useParams();
  useEffect(() => {
    if (mediaType && mediaId) {
      dispatch(detailsData({ mediaType: mediaType, mediaId: mediaId }));
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

        flexDirection: "column",
      }}
    >
      <DetailsBanner
        data={dataReducer?.details}
        video={dataReducer?.videos?.[0]}
        crew={dataReducer?.credits?.crew}
        url={dataReducer?.url?.backdrop}
      />

      <CastSwiper
        title={"Top Cast"}
        data={dataReducer?.credits}
        url={dataReducer?.url?.profile}
      />

      <VideoSwipper title={"Official Videos"} data={dataReducer?.videos} />

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
