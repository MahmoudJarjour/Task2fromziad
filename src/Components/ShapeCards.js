import { Grid, Container, Typography, Box, Card, CardContent, CardHeader, Divider } from '@mui/material';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const data2 = [
	{
		id: 1,
		cardheader: 'With respect to the plaintiff, defendant, responsible for money, and guarantor: ',
		cardsubheader: 'the delay is (10) days',
		cardcontent: '* As of the date of its issuance if it is made in presentia. * As of the date of being notied whether it is made in presentia or absentia.',
	},
	{
		id: 2,
		cardheader: 'With respect to the Appellate Public Prosecutor:',
		cardsubheader: 'the delay is (1) month:',
		cardcontent: '* As of the date of issuance of the judgment.',
	},
	{
		id: 3,
		cardheader: 'With respect to the Appellate Public Prosecution: ',
		cardsubheader: 'the delay is (2) months:',
		cardcontent: '* As of the date of issuance of the judgment.',
	},
];

const data2Ar = [
	{
		id: 1,
		cardheader: 'بالنسبة للمدعي والمدعى عليه والضامن والمسؤول بالمال :',
		cardsubheader: 'المهلة هي (١٠) يوما ',
		cardcontent: '* من تاريخ صدور الحكم إذا كان وجاهيا  ، *من تاريخ تبليغه إذا مان بمثابة الوجاهي أو غيابيا',
	},
	{
		id: 2,
		cardheader: 'بالنسبة للنائب العام الاستئنافي :',
		cardsubheader: 'المهلة هي (١) شهر',
		cardcontent: '* من تاريخ صدور الحكم',
	},
	{
		id: 3,
		cardheader: 'بالنسبة للنيابة العامة الاستئنافية : ',
		cardsubheader: ' المهلة هي (٢) شهر',
		cardcontent: '* من تاريخ صدور الحكم ',
	},
];

const ShapeCards = () => {
	const { t } = useTranslation();
	return (
		<>
			<Container>
				<Grid Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{getLanguage() === 'en'
						? data2.map((item) => (
								<Grid item xs={12} sm={8} md={6} lg={6} justifyContent="space-evenly" alignItems="center" key={item.id}>
									<Card style={{border:'1px solid green', borderRadius:'12px'}}>
										<CardHeader title={item.cardheader} subheader={item.cardsubheader}></CardHeader>
										<Divider orientation="horizontal" variant="middle" style={{color:'#008000'}} />
										<CardContent>
											<Typography
												style={{
													color: 'black',
													fontFamily: 'Cairo',
													width: '100%',
													display: 'grid',
													alignContent: 'center',
													fontSize:'18px'
												}}
											>
												{item.cardcontent}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
						  ))
						: data2Ar.map((item) => (
								<Grid item xs={12} sm={8} md={6} lg={6} justifyContent="space-evenly" alignItems="center" key={item.id}>
									<Card style={{border:'1px solid green', borderRadius:'12px'}}>
										<CardHeader title={item.cardheader} subheader={item.cardsubheader}></CardHeader>
										<Divider orientation="horizontal" variant="middle" />
										<CardContent>
											<Typography
												style={{
													color: 'black',
													fontFamily: 'Cairo',
													width: '100%',
													display: 'grid',
													alignContent: 'center',
													fontSize:'18px'
												}}
											>
												{item.cardcontent}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
						  ))}
				</Grid>

				<Typography
					style={{
						backgroundColor: '#fff4e5',
						color: '#663C01',
						fontFamily: 'Cairo',
						paddingBottom: '20px',
						paddingTop: '60px',
						fontWeight: '500',
						fontSize: '23px',
						padding: '15px',
						marginTop:'12px'
					}}
					variant="h5"
				>
					<TaskAltIcon style={{ color: '#ff9800' }} />

					{t('Decision on revoking or accepting the defenses stated in Article 73 of the Criminal Procedures Code:')}
				</Typography>
			</Container>
		</>
	);
};
export default withTranslation()(ShapeCards);
