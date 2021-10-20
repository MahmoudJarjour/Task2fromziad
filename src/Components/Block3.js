import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";


const data3 =[
    {
        id:1,
        cardheader : 'With respect to the Public Prosecution,the delay is 24 hours:',
        cardcontent :'As of the date of issuance of the decision.',

    },
    {
        id:2,
        cardheader : 'With respect to the opponents, the delay is 24 hours:',
        cardcontent :'As of the date of notifying the opponents of the same.',

    },
    
];
const Block3 = () => {
  return (
    <>
      <Container>
        <Grid container spacing={15} columns={16}>
          {data3.map((item) => (
            <Grid item xs={6}>
              <Typography backgroundColor='gray' borderRadius> {item.cardheader} </Typography>

              <Typography backgroundColor="#C0E8D5" borderRadius>{item.cardcontent}</Typography>
            </Grid>
          ))}
        </Grid>
        <br/>
        <Typography variant="subtitle1" >
        The appeal shall be submitted through a lawyer.
        </Typography>
      </Container>
    </>
  );
};
export default withTranslation() (Block3);
