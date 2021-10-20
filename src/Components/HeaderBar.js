import { Container } from "@mui/material";
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { withTranslation , useTranslation} from "react-i18next";
import i18next from "i18next";



const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const useStyles = makeStyles((theme) => ({
  AppBarContainer: {
    height: "40px",
  },
  

  bodyblock1: {
    paddingTop: theme.spacing(15),
  },
  bodyblock2: {},
}));


const HeaderBar = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
      
    <Container className={classes.AppBarContainer}>
      <AppBar elevation={3} className={classes.AppBar} variant="elevation" anchor={getLanguage() === 'ar' ? 'right' : 'left'}>
        <Toolbar>
          <Container >
            <Typography variant="h6" >{t('Criminal Court of Appeal:')}</Typography>
          </Container>

          <Container>
            <Typography variant="subtitle1">
              {t('- Within every governorate, there is one or more courts of appeal.')}
            </Typography>
            <Typography variant="subtitle1">
              {t('- The Court of Appeal consists of 3 judges: a president and two consultants.')}
            </Typography>
            <Typography variant="subtitle1">
              {t('- The public prosecution is represented before the Court of Appeal by the Appellate Public Prosecutor or an Attorney General.')}
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default withTranslation() (HeaderBar);
