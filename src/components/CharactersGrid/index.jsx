import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import React from "react";
import { useCharacters } from "../../Context/Context";

const CharactersGrid = () => {
  const {
    queryString,
    isFetching,
    isError,
    error,
    data,
    totalPages,
    handlePageChange,
    currentPage,
  } = useCharacters();

  const shallDisplayContent = data?.characters?.length > 0;

  return (
    <Box sx={{ maxWidth: "lg", mx: "auto", p: 2 }}>
      {isFetching && <CircularProgress />}
      {isError && (
        <Typography color="error">
          Error fetching data: {error.message}
        </Typography>
      )}
      <Grid container spacing={2}>
        {shallDisplayContent
          ? data.characters.map((character) => (
              <Grid item xs={12} key={character.id}>
                <Card
                  sx={{
                    display: "flex",
                    border: "2px solid #245be7",
                    borderRadius: 2,
                    p: 4,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "200px", height: "auto" }}
                    image={character.thumbnail}
                    alt={character.name}
                  />
                  <CardContent
                    sx={{
                      p: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Typography gutterBottom variant="h3" component="div">
                      {character.name}
                    </Typography>
                    <Typography variant="body" component="p">
                      {character.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 1,
                      }}
                    >
                      <Typography sx={{ pr: 2 }}>
                        <span
                          style={{
                            "font-weight": "bold",
                          }}
                        >
                          #comics:
                        </span>{" "}
                        {character.comics}
                      </Typography>
                      <Typography sx={{ pr: 2 }}>
                        <span
                          style={{
                            "font-weight": "bold",
                          }}
                        >
                          #series:
                        </span>{" "}
                        {character.series}
                      </Typography>
                      <Typography>
                        <span
                          style={{
                            "font-weight": "bold",
                          }}
                        >
                          #stories:
                        </span>{" "}
                        {character.stories}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : !data.empty && (
              <Typography variant="h5" paddingTop={8}>
                We sadly cannot find any Marvel character for your search:{" "}
                <span style={{ color: "#245be7" }}>{queryString}</span>
              </Typography>
            )}
      </Grid>
      {shallDisplayContent && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, page) => handlePageChange(page)}
            color="primary"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Box>
  );
};

export default CharactersGrid;
