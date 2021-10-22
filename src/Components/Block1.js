import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const useStyles = makeStyles((theme) => ({
	bodyblock1: {
		marginBlockStart: '200px',
	},
}));

const Block1 = () => {
	const { t } = useTranslation();
	const classes = useStyles();
	return (
		<Container className={classes.bodyblock1}>
			<Container>
				<Typography style={{ fontWeight: '900', fontFamily: 'Cairo' }} variant="h4">
					{t('Their jurisdiction:')}
				</Typography>

				<Container>
					<Typography style={{ fontFamily: 'Cairo' }} variant="h6">
						{' '}
						<DoubleArrowIcon
							style={{ color: '#0f9fc1', width: '30', height: '18', paddingTop: '10px', transform: getLanguage() === 'ar' ? 'scaleX(-1)' : '' }}
						/>
						{t('The Court of Appeal considers the appeal of all judgments issued by the Criminal Single Judge in the cases of misdemeanors,')}
					</Typography>
				</Container>

				<Container>
					<Typography style={{ fontWeight: '900', fontFamily: 'Cairo', fontWeight: 'bold', margin: '10px' }} variant="h4">
						{t('With the exception of:')}
					</Typography>

					<Container>
						<Typography style={{ fontFamily: 'Cairo' }} variant="h5">
							{' '}
							<DoubleArrowIcon
								style={{ color: '#0f9fc1', width: '30', height: '18', paddingTop: '10px', transform: getLanguage() === 'ar' ? 'scaleX(-1)' : '' }}
							/>
							{t(
								'The appeal of decisions that settle one or more of the formal defenses stipulated in Article 73 of the Criminal Procedures Code shall be accepted.'
							)}
						</Typography>
					</Container>
					<Container>
						<Typography style={{ fontFamily: 'Cairo' }} variant="h5">
							{' '}
							<DoubleArrowIcon
								style={{ color: '#0f9fc1', width: '30', height: '18', paddingTop: '10px', transform: getLanguage() === 'ar' ? 'scaleX(-1)' : '' }}
							/>
							{t('Decisions by which the Single Judge terminates the lawsuit without addressing its subject matter.')}
						</Typography>
					</Container>
					<Container>
						<Typography style={{ fontFamily: 'Cairo' }} variant="h5">
							{' '}
							<DoubleArrowIcon
								style={{ color: '#0f9fc1', width: '30', height: '18', paddingTop: '10px', transform: getLanguage() === 'ar' ? 'scaleX(-1)' : '' }}
							/>
							{t('Decisions issued on accepting or revoking the release requests.')}
						</Typography>
					</Container>
				</Container>
			</Container>

			<Container>
				<Typography style={{ fontWeight: '500', fontFamily: 'Cairo', paddingBottom: '50px',fontSize:'23px' }} variant="h5" paddingTop="30px">
					{t(
						'The Court of Appeal considers the appeal of the judgments issued by the Criminal Single Judge in the cases of violations, provided that they shall be on:'
					)}
				</Typography>
			</Container>
		</Container>
	);
};

export default withTranslation()(Block1);
