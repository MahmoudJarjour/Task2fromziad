import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import Block3 from './Block3';
import ShapeCards from './ShapeCards';
import i18next from 'i18next';
import i18n from '../Locales/i18n';

const Block2 = () => {
	const { t } = useTranslation();
	return (
		<>
			<Container>
				<Typography style={{ fontFamily: 'georgia', fontWeight:'bold' ,textDecoration:'underline'}} variant="h4">{t('Delay of appeal :')}</Typography>
				<br />
				<Typography style={{ fontFamily:'serif',backgroundColor:'#FF9966',color:'white' , borderRadius:'10px',padding:'10px'}} variant="h5" color="#E52B50">
					{t('Final judgments:')}
				</Typography>
				<br />
				<ShapeCards />
				<br />
				<Block3 />
				<br />
				<Grid container rowSpacing={1} columns={1}>
					<Typography style={{ fontFamily: 'serif', fontWeight:'bold'}} >{t('Decisions of the Court of Appeal:')}</Typography>

					<Grid columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
						<Grid item xs={6}>
							<Typography style={{fontFamily:'Georgia', margin:'5px'}} backgroundColor="#C0E8D5" borderRadius>
								{t('Dissolution of the appealed judgment.')}
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography style={{fontFamily:'Georgia', margin:'5px'}} backgroundColor="#C0E8D5" borderRadius>
								{t('Legalization of the appealed judgment.')}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default withTranslation()(Block2);
