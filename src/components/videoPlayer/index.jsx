import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";
import CloseIcon from "mdi-material-ui/Close";
import { clsx } from "clsx";
import "./style.css";
function VideoPlayer({ videoId, openPopup, handleOpenClosePopup }) {
  console.log({
    videoId,
    openPopup,
    handleOpenClosePopup,
  });
  return (
    <Box className={clsx("modal-container", openPopup ? "show" : "hide")}>
      <Box className="modal-content">
        <IconButton
          aria-label="close-modal"
          icon={<CloseIcon />}
          onClick={handleOpenClosePopup}
          sx={{
            position: "absolute",
            right: -3,
            top: -4,
            backgroundColor: "#FFE53B",
            color: "#000",
          }}
          size="small"
          isRound={true}
          variant="solid"
          _hover={{
            backgroundColor: "none",
          }}
        />
        <Box>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width={"100%"}
            // playing={true}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default VideoPlayer;
