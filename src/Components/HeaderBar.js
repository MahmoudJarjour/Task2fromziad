import { Container } from '@mui/material';
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { withTranslation, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const useStyles = makeStyles((theme) => ({
	AppBarContainer: {
		height: '40px',
	},
	AppBar: {
		backgroundColor: '#0f9fc1',

		borderTopRightRadius: getLanguage() === 'ar' ? '80px' : '0px',
		borderEndStartRadius: getLanguage() === 'ar' ? '80px' : '80px',
		borderTopLeftRadius: getLanguage() === 'en' ? '80px' : '0px',
	},
	bodyblock1: {
		paddingTop: theme.spacing(15),
	},
}));

const HeaderBar = () => {
	const classes = useStyles();
	const { t } = useTranslation();
	return (
		<Container className={classes.AppBarContainer}>
			<AppBar elevation={3} className={classes.AppBar} variant="elevation" anchor={getLanguage() === 'ar' ? 'right' : 'left'}>
				<Toolbar>
					<Container
						style={{
							borderRadius: '120px',
							backgroundColor: 'white',
							color: 'black',
							width: '25%',
							padding: '3%',
							border: '2px solid black',

							marginLeft: getLanguage() === 'en' ? '-26px' : '',
							marginRight: getLanguage() === 'ar' ? '-26px' : '',
							textAlign: 'center',
						}}
					>
						<Typography style={{ fontFamily: 'Cairo', fontWeight: 'bold', }} variant="h6">
							{t('Criminal Court of Appeal :')}
						</Typography>
					</Container>

					<Container paddingLeft="-10px">
						<Typography style={{ fontFamily: 'georgia', paddingLeft: '-10px', paddingRight: getLanguage() === 'ar' ? '5px' : '' }} variant="subtitle1">
							{t('- Within every governorate, there is one or more courts of appeal.')}
						</Typography>
						<Typography
							style={{ fontFamily: 'georgia', paddingLeft: getLanguage() === 'en' ? '10px' : '', paddingRight: getLanguage() === 'ar' ? '10px' : '' }}
							variant="subtitle1"
						>
							{t('- The Court of Appeal consists of 3 judges: a president and two consultants.')}
						</Typography>
						<Typography
							style={{ fontFamily: 'georgia', paddingLeft: getLanguage() === 'en' ? '2px' : '', paddingRight: getLanguage() === 'ar' ? '5px' : '' }}
							variant="subtitle1"
						>
							{t('- The public prosecution is represented before the Court of Appeal by the Appellate Public Prosecutor or an Attorney General.')}
						</Typography>
					</Container>
				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default withTranslation()(HeaderBar);
