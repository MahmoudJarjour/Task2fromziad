import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import Block3 from './Block3';
import ShapeCards from './ShapeCards';
import i18next from 'i18next';
import i18n from '../Locales/i18n';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Block2 = () => {
	const { t } = useTranslation();
	return (
		<>
			<Container>
				<Typography style={{ fontFamily: 'Cairo', fontWeight: '900' }} variant="h4">
					{t('Delay of appeal:')}
				</Typography>
				<br />
				<Typography
					style={{ fontFamily: 'Cairo', backgroundColor: '#e8f4fd', color: 'black', borderRadius: '10px', padding: '10px' }}
					variant="h5"
					color="#0d3c61"
					textAlign="center"
				>
					{t('Final judgments:')}
				</Typography>
				<br />
				<ShapeCards />
				<br />
				<Block3 />
				<br />
				<Grid container>
					<Typography style={{ fontFamily: 'Cairo', fontSize: '18px', fontWeight: 'bold' }}>{t('Decisions of the Court of Appeal:')}</Typography>

					<Grid Grid container spacing={1}>
						<Grid item xs={6}>
							<Grid
								style={{
									fontFamily: 'Cairo',
									backgroundColor: '#fdecea',
									color: '#611a15',
								}}
							>
								<TaskAltIcon style={{ color: '#611a15' }} />
								{t('Dissolution of the appealed judgment.')}
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Grid
								style={{
									fontFamily: 'Cairo',
									backgroundColor: '#C0E8D5',
									color: '#1e4620',
								}}
							>
								<TaskAltIcon style={{ color: '#1e4620' }} />
								{t('Legalization of the appealed judgment.')}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default withTranslation()(Block2);
