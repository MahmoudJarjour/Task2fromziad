import React from 'react';
import { Grid, Container, Typography, CardHeader, CardContent, Card, Divider } from '@mui/material';
import { useTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';
import AddTaskIcon from '@mui/icons-material/AddTask';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

const data3 = [
	{
		id: 1,
		cardheader: 'With respect to the Public Prosecution:',
		cardsubheader: 'the delay is (24) hours',
		cardcontent: '* As of the date of issuance of the decision.',
	},
	{
		id: 2,
		cardheader: 'With respect to the opponents:',
		cardsubheader: 'the delay is (24) hours',
		cardcontent: '* As of the date of notifying the opponents of the same.',
	},
];

const data3Ar = [
	{
		id: 1,
		cardheader: 'بالنسبة للنيابة العامة :  ',
		cardsubheader: 'المهلة هي (٢٤) ساعة',
		cardcontent: '* من تاريخ صدور القرار',
	},
	{
		id: 2,
		cardheader: 'بالنسبة للخصوم : ',
		cardsubheader: 'المهلة هي (٢٤) ساعة',
		cardcontent: '* من تاريخ تبليغه للخصوم ',
	},
];

const Block3 = () => {
	const { t } = useTranslation();
	return (
		<>
			<Container>
				<Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{getLanguage() === 'en'
						? data3.map((item) => (
								<Grid item xs={12} sm={8} md={6} lg={6} justifyContent="space-evenly" alignItems="center" key={item.id}>
									<Card style={{border: '1px solid #93d2b9', borderRadius: '12px', fontFamily: 'Cairo' }}>
										<CardHeader
											title={item.cardheader}
											subheader={item.cardsubheader}
											subheaderTypographyProps={{ fontFamily: 'Cairo', fontWeight:'900' }}
											titleTypographyProps={{ fontFamily: 'Cairo', fontWeight: '800' }}
										></CardHeader>
										<Divider variant="middle" orientation="horizontal" />
										<CardContent style={{ fontFamily: 'Cairo' }}>{item.cardcontent}</CardContent>
									</Card>
								</Grid>
						  ))
						: data3Ar.map((item) => (
								<Grid item xs={12} sm={8} md={6} lg={6} justifyContent="space-evenly" alignItems="center" key={item.id}>
									<Card style={{ border: '1px solid #93d2b9', borderRadius: '12px', fontFamily: 'Cairo' }}>
										<CardHeader 
											title={item.cardheader}
											subheader={item.cardsubheader}
											subheaderTypographyProps={{ fontFamily: 'Cairo', fontWeight:'900' }}
											titleTypographyProps={{ fontFamily: 'Cairo', fontWeight: '800' }}
										></CardHeader>
										<Divider variant="middle" orientation="horizontal" />
										<CardContent style={{ fontFamily: 'Cairo' }}>{item.cardcontent}</CardContent>
									</Card>
								</Grid>
						  ))}
				</Grid>
				<br />

				<Typography
					style={{
						backgroundColor: '#fff4e5',
						color: '#663c00',
						textAlign: getLanguage() === 'ar' ? 'right' : 'left',
						fontFamily: 'Cairo',
						fontWeight: 'revert',
					}}
					variant="subtitle1"
				>
					<AddTaskIcon style={{ color: '#663c00', width: '30', height: '18', paddingTop: '10px', fontFamily: 'Cairo' }} />
					{t('The appeal shall be submitted through a lawyer.')}
				</Typography>
			</Container>
		</>
	);
};
export default withTranslation()(Block3);
