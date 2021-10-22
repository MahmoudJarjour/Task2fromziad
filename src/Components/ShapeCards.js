import { Grid, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';


const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const data2 = [
	{
		id: 1,
		cardheader: 'With respect to the plaintiff, defendant, responsible for money, and guarantor, the delay is 15 days:',
		cardcontent: '* As of the date of its issuance if it is made in presentia. * As of the date of being notied whether it is made in presentia or absentia.',
	},
	{
		id: 2,
		cardheader: 'With respect to the Appellate Public Prosecutor, the delay is one month:',
		cardcontent: '* As of the date of issuance of the judgment.',
	},
	{
		id: 3,
		cardheader: 'With respect to the Appellate Public Prosecution, the delay is two months:',
		cardcontent: '* As of the date of issuance of the judgment.',
	},
];

const data2Ar = [
	{
		id: 1,
		cardheader: 'بالنسبة للمدعي والمدعى عليه والضامن والمسؤول بالمال ، المهلة هي ١٠ يوما :',
		cardcontent: '* من تاريخ صدور الحكم إذا كان وجاهيا  ، *من تاريخ تبليغه إذا مان بمثابة الوجاهي أو غيابيا',
	},
	{
		id: 2,
		cardheader: 'بالنسبة للنائب العام الاستئنافي المهلة هي شهرا :',
		cardcontent: '* من تاريخ صدور الحكم',
	},
	{
		id: 3,
		cardheader: 'بالنسبة للنيابة العامة الاستئنافية المهلة هي شهران ',
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
									<Typography
										backgroundColor="#e8f4fd"
										style={{
											border: '1px solid #00FFFF',
											textAlign: getLanguage() === 'en' ? 'left' : 'right',
											width: '100%',
											fontFamily: 'Cairo',
											display: 'Grid',
											alignContent: 'center',
											justifyContent: 'center',
										}}
									>
										{item.cardheader}
									</Typography>
									
									<Typography
										style={{
											color: 'black',
											
											fontFamily: 'Cairo',
											width: '100%',
											display: 'grid',
											alignContent: 'center',
											
										}}
										
									>
										{item.cardcontent}
									</Typography>
								</Grid>
						  ))
						: data2Ar.map((item) => (
								<Grid item xs={12} sm={8} md={6} lg={6} justifyContent="space-evenly" alignItems="center" key={item.id}>
									<Typography
										backgroundColor="#e8f4fd"
										style={{
											border: '1px solid #00FFFF',
											textAlign: getLanguage() === 'en' ? 'left' : 'right',
											width: '100%',
											fontFamily: 'Cairo',
											display: 'Grid',
											alignContent: 'center',
											justifyContent: 'center',
										}}
									>
										{item.cardheader}
									</Typography>
									
									<Typography
										style={{
											color: 'black',
											
											fontFamily: 'Cairo',
											width: '100%',
											display: 'grid',
											alignContent: 'center',
											
										}}
									>
										{item.cardcontent}
									</Typography>
								</Grid>
						  ))}
				</Grid>
				<br />
				<Typography variant="subtitle1" style={{ color: 'black', fontFamily: 'Cairo', padding: '5px' }} backgroundColor="#e8f4fd" borderRadius>
					{t('Decision on revoking or accepting the defenses stated in Article 73 of the Criminal Procedures Code:')}
				</Typography>
			</Container>
		</>
	);
};
export default withTranslation()(ShapeCards);
