import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { withTranslation } from "react-i18next";
import Block3 from "./Block3";
import ShapeCards from "./ShapeCards";

const Block2 = () => {
  return (
    <>
      <Container>
        <Typography variant="h4">Delay of appeal:</Typography>
        <br />
        <Typography variant="h5" color="#E52B50">
          Final judgments:
        </Typography>
        <br />
        <ShapeCards />
        <br />
        <Block3 />
        <br />
        <Grid container rowspacing={2} columns={2}>
          
            <Typography>Decisions of the Court of Appeal:</Typography>
          
          

                        <Grid
                            Spacing={2}
                            columnSpacing={{ xs: 6, sm: 6, md: 6}}
                        >
                            <Grid item xs={6}>
                            <Typography backgroundColor="#C0E8D5" borderRadius>Dissolution of the appealed judgment.</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <Typography backgroundColor="#C0E8D5" borderRadius>Legalization of the appealed judgment.</Typography>
                            </Grid>
                        </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withTranslation() (Block2);
