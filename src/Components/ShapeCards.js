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
				<Grid container spacing={3} columnSpacing={12}>
					{getLanguage() === 'en'
						? data2.map((item) => (
								<Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
									<Typography
										backgroundColor="#B2FFFF"
										style={{
											border: '1px solid #00FFFF',
											textAlign: getLanguage() === 'ar' ? 'right' : 'left',
											width: '100%',
											height: '20%',
											padding: '5%',
											marginLeft: '-20px',
											fontFamily: 'Cairo',
											fontSize: '12px',
											fontWeight: 'bold',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderBottomRightRadius: '20px',
											display: 'grid',
											alignContent: 'center',
											justifyContent: 'center',
										}}
									>
										{item.cardheader}
									</Typography>
									<Typography
										style={{
											color: 'black',
											backgroundColor: '#B2BEB5',
											fontFamily: 'Cairo',
											fontSize: '12px',
											fontWeight: 'bold',
											width: '100%',
											height: '20%',
											padding: '5%',
											marginLeft: '-20px',
											marginBottom: '10px',
											paddingBottom: '20px',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderEndEndRadius: '20px',
											display: 'grid',
											alignContent: 'center',
											justifyContent: 'center',
										}}
										borderRadius
									>
										{item.cardcontent}
									</Typography>
								</Grid>
						  ))
						: data2Ar.map((item) => (
								<Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
									<Typography
										backgroundColor="#B2FFFF"
										style={{
											border: '1px solid #00FFFF',
											textAlign: getLanguage() === 'en' ? 'left' : 'right',
											width: '100%',
											height: '20%',
											padding: '5%',
											marginLeft: '-20px',
											fontFamily: 'Cairo',
											fontSize: '12px',
											fontWeight: 'bold',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderEndEndRadius: '20px',
											display: 'grid',
											alignContent: 'center',
											justifyContent: 'center',
										}}
									>
										{item.cardheader}
									</Typography>
									<Typography
										style={{
											color: 'black',
											backgroundColor: '#B2BEB5',
											fontFamily: 'Cairo',
											fontSize: '12px',
											fontWeight: 'bold',
											width: '100%',
											height: '20%',
											padding: '5%',
											marginLeft: '20px',
											marginBottom: '10px',
											paddingBottom: '20px',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderEndEndRadius: '20px',
											display: 'grid',
											alignContent: 'center',
											justifyContent: 'center',
										}}
										borderRadius
									>
										{item.cardcontent}
									</Typography>
								</Grid>
						  ))}
				</Grid>
				<br />
				<Typography variant="subtitle1" style={{ color: 'white', fontFamily: 'Cairo', padding: '5px' }} backgroundColor="#0f9fc1" borderRadius>
					{t('Decision on revoking or accepting the defenses stated in Article 73 of the Criminal Procedures Code:')}
				</Typography>
			</Container>
		</>
	);
};
export default withTranslation()(ShapeCards);
