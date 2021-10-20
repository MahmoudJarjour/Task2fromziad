import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SearchIcon from "@mui/icons-material/Search";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTranslation, withTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  AppBarContainer: {
    height: "40px",
  },
  
  bodyblock1: {
    paddingTop: theme.spacing(15),
  },
  bodyblock2: {},
}));

const Block1 = () => {
    const {t} = useTranslation();
  const classes = useStyles();
  return (
    <Container>
      <Container className={classes.bodyblock1}>
        <Typography variant="h4">{t('Their jurisdiction:')}</Typography>

        
          <Container>
            <Typography variant="h6">
              {" "}
              <DoubleArrowIcon color="secondary" fontSize="small" />
              {t('The Court of Appeal considers the appeal of all judgments issued by the Criminal Single Judge in the cases of misdemeanors,')}
            </Typography>
          </Container>

          <Container>
            <Typography variant="h4">{t('With the exception of:')}</Typography>
          </Container>

          <Container>
            <Typography variant="h5">
              {" "}
              <DoubleArrowIcon color="secondary" fontSize="large" />
              {t('The appeal of decisions that settle one or more of the formal defenses stipulated in Article 73 of the Criminal Procedures Code shall be accepted.')}
            </Typography>
          </Container>
          <Container>
            <Typography variant="h5">
              {" "}
              <DoubleArrowIcon color="secondary" fontSize="large" />
              {t('Decisions by which the Single Judge terminates the lawsuit without addressing its subject matter.')}
            </Typography>
          </Container>
          <Container>
            <Typography variant="h5">
              {" "}
              <DoubleArrowIcon color="secondary" fontSize="large" />
              {t('Decisions issued on accepting or revoking the release requests.')}
            </Typography>
          </Container>
        </Container>

        <Container>
          <Typography variant="h5" paddingTop="30px">
            <SearchIcon fontSize="small" color="success" />
            {t('The Court of Appeal considers the appeal of the judgments issued by the Criminal Single Judge in the cases of violations, provided that they shall be on:')}
          </Typography>
        </Container>
      </Container>
  );
};

export default withTranslation() (Block1);
