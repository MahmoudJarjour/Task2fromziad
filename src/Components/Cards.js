import React from "react";
import {
  Grid,
  Container,
  Typography,
} from "@mui/material";
import PushPinTwoToneIcon from "@mui/icons-material/PushPinTwoTone";
import { withTranslation } from "react-i18next";


const data = [
    {
        id:1,
        discription:"Imprisonment, preventive detention or a ne of more than ve hundred thousand Lebanese pounds.",
        
    },
    {
        id:2,
        discription:"Additional or secondary penalty or personal compensations of more than ve hundred thousand Lebanese pounds.",
        
    },
    {
        id:3,
        discription:"Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.",
        
    },
    {
        id:4,
        discription:"Penalty for a violation correlative with a misdemeanor.",
        
    },
    
];

const Cards = ({ card }) => {
  return (
    <Container>
      <Grid container spacing={15} columns={16}>
        {data.map((item)=>(
            <Grid item xs={4}>
                
            <Typography backgroundColor='#A9B2C3' borderRadius>
              {item.discription}
            </Typography>
          </Grid>
        ))}
        
      </Grid>
      <Typography variant="h5">
            <PushPinTwoToneIcon color="success" fontSize="large" />
            The Court of Appeal is entitled, when exercising its tasks, to
            listen to witnesses, interrogate the parties of the lawsuit, invite
            new witnesses, appoint an expert, listen to experts and carry out
            any new investigations it deems appropriate...
          </Typography>
    </Container>
  );
};

export default withTranslation() (Cards);
