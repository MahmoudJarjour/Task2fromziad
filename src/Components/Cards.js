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
		border:'10px solid #A1CAF1'
	},
	{
		id: 2,
		discription: 'Additional or secondary penalty or personal compensations of more than ve hundred thousand Lebanese pounds.',
		color: '#F5F5F5',
		border:'10px solid #DA1884'
	},
	{
		id: 3,
		discription: 'Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.',
		color: '#F5F5F5',
		border:'10px solid #FE6F5E'
	},
	{
		id: 4,
		discription: 'Penalty for a violation correlative with a misdemeanor.',
		color: '#F5F5F5',
		border:'10px solid #318CE7',
	},
];

const dataAr = [
	{
		id: 1,
		discription: 'الحبس أو التوقيف التكديري أو غرامة تزيد على ٥٠٠ ألف ليرة لبنانية',
		color: '#F5F5F5',
		border:'10px solid #A1CAF1'
	},
	{
		id: 2,
		discription: 'عقوبة إضافية أو فرعية أو تعويضات شخصية تزيد على الخمسمائة ألف ليرة لبنانية',
		color: '#F5F5F5',
		border:'10px solid #DA1884'
	},
	{
		id: 3,
		discription: 'رد من الدفوع المنصوص عليها في المادة ٧٣ من قانون أصول المحاكمات الجزائية',
		color: '#F5F5F5',
		border:'10px solid #FE6F5E'
	},
	{
		id: 4,
		discription: 'عقوبة لمخالفة متلازمة مع جنحة',
		color: '#F5F5F5',
		border:'10px solid #318CE7'
	},
];

const Cards = ({ card }) => {
	const { t } = useTranslation();
	return (
		<Container>
			<Grid container spacing={12} columns={16}>
				{getLanguage() === 'ar'
					? dataAr.map((item) => (
							<Grid item xs={4} key={item.id}>
								<Typography
								
									style={{fontFamily: 'georgia',borderRadius: '100%',textAlign:'center', width: '70%',height:'60%', padding: '20%', margin:'10%' }}
									border={item.border}
									backgroundColor={item.color}
								>
									{item.discription}
								</Typography>
							</Grid>
					  ))
					: data.map((item) => (
							<Grid item xs={4} key={item.id}>
								<Typography
									style={{ fontFamily: 'georgia', borderRadius: '100%',textAlign:'center', width: '100%',height:'60%', padding: '20%',margin:'10%' }}
									border={item.border}
									backgroundColor={item.color}
									
								>
									{item.discription}
								</Typography>
							</Grid>
					  ))}
			</Grid>
			<Typography style={{fontFamily: 'georgia',paddingBottom:'20px',paddingTop:'90px'}} variant="h5">
				<PushPinTwoToneIcon color="success" fontSize="large" />
				{t(
					'The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate the parties of the lawsuit, invite new witnesses, appoint an expert, listen to experts and carry out any new investigations it deems appropriate...'
				)}
			</Typography>
		</Container>
	);
};

export default withTranslation()(Cards);
