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
		color:'#8CBED6',
	},
	{
		id: 2,
		discription: 'Additional or secondary penalty or personal compensations of more than ve hundred thousand Lebanese pounds.',
		color:'#CC5500'
	},
	{
		id: 3,
		discription: 'Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.',
		color:'#800020'
	},
	{
		id: 4,
		discription: 'Penalty for a violation correlative with a misdemeanor.',
		color:'#87A96B'
	},
];

const dataAr = [
	{
		id: 1,
		discription: 'الحبس زأو التوقيف التكديري أو غرامة تزيد على ٥٠٠ ألف ليرة لبنانية',
		color:'#8CBED6',
		
	},
	{
		id: 2,
		discription: 'عقوبة إضافية أو فرعية أو تعويضات شخصية تزيد على الخمسمائة ألف ليرة لبنانية',
		color:'#CC5500'
	},
	{
		id: 3,
		discription: 'رد من الدفوع المنصوص عليها في المادة ٧٣ من قانون أصول المحاكمات الجزائية',
		color:'#800020'
	},
	{
		id: 4,
		discription: 'عقوبة لمخالفة متلازمة مع جنحة',
		color:'#87A96B'
	},
];


const Cards = ({ card }) => {
	const { t } = useTranslation();
	return (
		<Container>
			<Grid container spacing={15} columns={16}>
				{getLanguage() === 'ar'? dataAr.map((item) => (
					<Grid item xs={4} key={item.id}>
						<Typography backgroundColor={item.color} borderRadius>
							{item.discription}
						</Typography>
					</Grid>
				)) : data.map((item) => (
					<Grid item xs={4} key={item.id}>
						<Typography backgroundColor={item.color} borderRadius>
							{item.discription}
						</Typography>
					</Grid>
				))}
			</Grid>
			<Typography variant="h5">
				<PushPinTwoToneIcon color="success" fontSize="large" />
				{t(
					'The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate the parties of the lawsuit, invite new witnesses, appoint an expert, listen to experts and carry out any new investigations it deems appropriate...'
				)}
			</Typography>
		</Container>
	);
};

export default withTranslation()(Cards);
