import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import { withTranslation, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';
import { orange } from '@mui/material/colors';


const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const data = [
	{
		id: 1,
		discription: 'Imprisonment, preventive detention or a ne of more than ve hundred thousand Lebanese pounds.',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
	{
		id: 2,
		discription: 'Additional or secondary penalty or personal compensations of more than ve hundred thousand Lebanese pounds.',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
	{
		id: 3,
		discription: 'Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
	{
		id: 4,
		discription: 'Penalty for a violation correlative with a misdemeanor.',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
];

const dataAr = [
	{
		id: 1,
		discription: 'الحبس أو التوقيف التكديري أو غرامة تزيد على ٥٠٠ ألف ليرة لبنانية',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
	{
		id: 2,
		discription: 'عقوبة إضافية أو فرعية أو تعويضات شخصية تزيد على الخمسمائة ألف ليرة لبنانية',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
	{
		id: 3,
		discription: 'رد من الدفوع المنصوص عليها في المادة ٧٣ من قانون أصول المحاكمات الجزائية',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
	{
		id: 4,
		discription: 'عقوبة لمخالفة متلازمة مع جنحة',
		color: '#F5F5F5',
		border: '3px solid #0f9fc1',
	},
];

const Cards = ({ card }) => {
	const { t } = useTranslation();
	return (
		<Container display="Grid">
			<Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{getLanguage() === 'ar'
					? dataAr.map((item) => (
							<Grid item xs={12} sm={8} md={6} lg={6} justifyContent="space-evenly" alignItems="center" key={item.id}>
								<Typography
									style={{
										borderRadius: '10px 100px / 120px',
										width: '100%',
										height: '100%',
										display: 'Grid',
										textAlign: 'center',
										justifyContent: 'center',
										alignContent: 'center',
									}}
									border={item.border}
									backgroundColor={item.color}
								>
									{item.discription}
								</Typography>
							</Grid>
					  ))
					: data.map((item) => (
							<Grid item xs={12} sm={8} md={6} lg={6} justifyContent="space-evenly" alignItems="center" key={item.id}>
								<Typography
									style={{
										borderRadius: '10px 100px/ 120px',
										width: '100%',
										height: '100%',
										display: 'Grid',
										textAlign: 'center',
										justifyContent: 'center',
										alignContent: 'center',
									}}
									
									border={item.border}
									backgroundColor={item.color}
								>
									{item.discription}
								</Typography>
							</Grid>
					  ))}
			</Grid>
			<Typography style={{ fontFamily: 'Cairo', paddingBottom: '20px', paddingTop: '60px', fontWeight:'900' }} variant="h5">
				{t(
					'The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate the parties of the lawsuit, invite new witnesses, appoint an expert, listen to experts and carry out any new investigations it deems appropriate...'
				)}
			</Typography>
		</Container>
	);
};

export default withTranslation()(Cards);
