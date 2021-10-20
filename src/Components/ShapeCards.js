import { Grid, Container, Typography } from "@mui/material";
import React from "react";
import { withTranslation } from "react-i18next";

const data2 = [
  {
    id: 1,
    cardheader:
      "With respect to the plaintiff, defendant, responsible for money, and guarantor, the delay is 15 days:",
    cardcontent:
      "As of the date of its issuance if it is made in presentia.As of the date of being notied whether it is made in presentia or absentia.",
  },
  {
    id: 2,
    cardheader:
      "With respect to the Appellate Public Prosecutor, the delay is one month:",
    cardcontent: "As of the date of issuance of the judgment.",
  },
  {
    id: 3,
    cardheader:
      "With respect to the Appellate Public Prosecution, the delay is two months:",
    cardcontent: "As of the date of issuance of the judgment.",
  },
];

const ShapeCards = () => {
  return (
    <>
      <Container>
        <Grid container spacing={4} columns={20}>
          {data2.map((item) => (
            <Grid item xs={7}>
              <Typography backgroundColor="#7CB9E8" borderRadius>
                {item.cardheader}
              </Typography>
              <Typography backgroundColor='#B2BEB5' borderRadius>{item.cardcontent}</Typography>
            </Grid>
          ))}
        </Grid>
        <br/>
        <Typography variant="subtitle1" backgroundColor="#C46210" borderRadius>
          Decision on revoking or accepting the defenses stated in Article 73 of
          the Criminal Procedures Code:
        </Typography>
      </Container>
    </>
  );
};
export default withTranslation() (ShapeCards);
