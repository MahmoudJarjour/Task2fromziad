import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import i18n from "../Locals/i18n";
import i18next from "i18next";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@material-ui/styles";


const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const themes = createTheme({
	direction: getLanguage() === 'ar' ? 'rtl' : 'ltr',
	overrides: {
		MuiFormLabel: {
			root: {
				right: getLanguage() === 'ar' ? 30 : 'unset',
				left: getLanguage() === 'ar' ? 'unset' : 0,
				'&$focused': {
					right: getLanguage() === 'ar' ? 20 : 'unset',
					left: getLanguage() === 'ar' ? 'unset' : 0,
				},
				'&$filled': {
					right: getLanguage() === 'ar' ? 20 : 'unset',
					left: getLanguage() === 'ar' ? 'unset' : 0,
				},
			},
		},
	},
});
const Router = () => {
    if ( window.location.pathname.split('/')[1] === 'ar'){
        i18next.changeLanguage('ar')
      }
      else{
        i18next.changeLanguage('en')
      }
  return (
    <div className="root">
      <BrowserRouter basename={getLanguage() === 'ar' ? 'ar' : 'en'} forceRefresh={true}>
      <ThemeProvider theme={themes}>
      <Layout>
        <Switch>
            <Route path="/home" exact component={Home} />
            <Route component={NotFound} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default Router;
