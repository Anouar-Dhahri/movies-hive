import React from "react";
import { Box, IconButton, Button } from "@chakra-ui/react";
import { Facebook, Instagram, Linkedin, AlphaX } from "mdi-material-ui";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        bottom: 0,
        gap: "1rem",
        p: "1rem",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Button
          variant="ghost"
          sx={{
            fontWeight: 400,
            fontFamily: "Rubik, sans-serif",
            fontSize: "1rem",
            letterSpacing: "2px",
            color: "#303740",
            mt: "15px",
          }}
        >
          Terms Of Use
        </Button>
        <Button
          variant="ghost"
          sx={{
            fontWeight: 400,
            fontFamily: "Rubik, sans-serif",
            fontSize: "1rem",
            letterSpacing: "2px",
            color: "#303740",
            mt: "15px",
          }}
        >
          Privacy-Policy
        </Button>
        <Button
          variant="ghost"
          sx={{
            fontWeight: 400,
            fontFamily: "Rubik, sans-serif",
            fontSize: "1rem",
            letterSpacing: "2px",
            color: "#303740",
            mt: "15px",
          }}
        >
          About
        </Button>
        <Button
          variant="ghost"
          sx={{
            fontWeight: 400,
            fontFamily: "Rubik, sans-serif",
            fontSize: "1rem",
            letterSpacing: "2px",
            color: "#303740",
            mt: "15px",
          }}
        >
          Blog
        </Button>
        <Button
          variant="ghost"
          sx={{
            fontWeight: 400,
            fontFamily: "Rubik, sans-serif",
            fontSize: "1rem",
            letterSpacing: "2px",
            color: "#303740",
            mt: "15px",
          }}
        >
          FAQ
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "60%",
          margin: "auto",
          justifyContent: "center",
          fontWeight: 200,
          fontFamily: "Rubik, sans-serif",
          fontSize: "1rem",
          wordSpacing: "5px",
          textAlign: "center",
        }}
      >
        Fusce ut tortor vehicula, eleifend dui sed, bibendum libero. Etiam eu
        arcu in augue tempus congue. Cras id purus quam. Maecenas aliquet nulla
        nec diam tempus commodo. Cras dignissim tellus orci, non congue massa
        volutpat in. Proin dictum malesuada consequat. Mauris purus turpis,
        pulvinar eu convallis sagittis, viverra quis nibh. Vivamus a purus nec
        quam blandit molestie in vitae nibh. Maecenas fermentum viverra laoreet.
        Aliquam nunc neque, tristique at ex vel, varius volutpat libero. Aliquam
        erat volutpat. Morbi eget dui a nibh dignissim lacinia a eu turpis. Sed
        nec massa quam. Praesent congue enim lectus, nec maximus ligula viverra
        at. Vestibulum sed aliquam ante. Curabitur vel mauris nulla. Cras a
        ipsum mauris. Maecenas sed aliquam odio. Etiam velit risus, vestibulum
        in dolor a, iaculis sollicitudin velit. Morbi rhoncus augue ut rutrum
        euismod. In massa sapien, luctus venenatis urna a, imperdiet pretium
        mauris. Etiam euismod tellus vel tortor molestie, consectetur.
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <IconButton
          icon={<Facebook />}
          sx={{ background: "transparent", border: "1px solid #000" }}
        />
        <IconButton
          icon={<Instagram />}
          sx={{ background: "transparent", border: "1px solid #000" }}
        />
        <IconButton
          icon={<AlphaX />}
          sx={{ background: "transparent", border: "1px solid #000" }}
        />
        <IconButton
          icon={<Linkedin />}
          sx={{ background: "transparent", border: "1px solid #000" }}
        />
      </Box>
    </Box>
  );
}

export default Footer;
