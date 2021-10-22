import React from 'react';
import { Grid, Container, Typography,Box,Divider, Paper, DialogContent } from '@mui/material';
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import { withTranslation, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';
import { orange } from '@mui/material/colors';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const data = [
	{
		id: 1,
		discription: 'Imprisonment, preventive detention or a ne of more than ve hundred thousand Lebanese pounds.',
		color: '#F5F5F5',
		border: '2px solid #e35e94',
	},
	{
		id: 2,
		discription: 'Additional or secondary penalty or personal compensations of more than ve hundred thousand Lebanese pounds.',
		color: '#F5F5F5',
		border: '2px solid #93d2b9',
	},
	{
		id: 3,
		discription: 'Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.',
		color: '#F5F5F5',
		border: '2px solid #93d2b9',
	},
	{
		id: 4,
		discription: 'Penalty for a violation correlative with a misdemeanor.',
		color: '#F5F5F5',
		border: '2px solid #e35e94',
	},
];

const dataAr = [
	{
		id: 1,
		discription: 'الحبس أو التوقيف التكديري أو غرامة تزيد على ٥٠٠ ألف ليرة لبنانية',
		color: '#F5F5F5',
		border: '2px solid #e35e94',
	},
	{
		id: 2,
		discription: 'عقوبة إضافية أو فرعية أو تعويضات شخصية تزيد على الخمسمائة ألف ليرة لبنانية',
		color: '#F5F5F5',
		border: '2px solid #93d2b9',
	},
	{
		id: 3,
		discription: 'رد من الدفوع المنصوص عليها في المادة ٧٣ من قانون أصول المحاكمات الجزائية',
		color: '#F5F5F5',
		border: '2px solid #93d2b9',
	},
	{
		id: 4,
		discription: 'عقوبة لمخالفة متلازمة مع جنحة',
		color: '#F5F5F5',
		border: '2px solid #e35e94',
		
	},
];

const Cards = ({ card }) => {
	const { t } = useTranslation();
	return (
		<Container display="Grid">
			<Grid container spacing={{ xs: 2, md:3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{getLanguage() === 'ar'
					? dataAr.map((item) => (
							<Grid item xs={12} sm={9} md={6} lg={3}  key={item.id}>
								
								<Grid
									style={{
										
										padding:'5%',
										width: '100%',
										height: '100%',
										display: 'Grid',
										textAlign: 'center',
										justifyContent: 'center',
										alignContent: 'center',
									}}
									border={item.border}
									backgroundColor='white'
									
								>
									
									 {item.discription}
									 
								</Grid>
								
							</Grid>
					  ))
					: data.map((item) => (
							<Grid item xs={12} sm={9} md={6} lg={3}  key={item.id}>
								
									<Grid
									style={{
										
										padding:'5%',
										width: '100%',
										height: '100%',
										display: 'Grid',
										textAlign: 'center',
										justifyContent: 'center',
										alignContent: 'center',
									}}
									border={item.border}
									backgroundColor='white'
									
								>
									{item.discription}
									
								</Grid>
							</Grid>
					  ))}
			</Grid>
			
			<Grid xs={12} sm={12} md={12} lg={12} >
			<Divider variant="middle" orientation='horizontal' style={{ paddingBottom:'10px'}}/>
			
						<Typography style={{backgroundColor:'#fff4e5',color:'#663C01', fontFamily: 'Cairo', paddingBottom: '20px', paddingTop: '60px', fontWeight:'500' , fontSize:'23px' }} variant="h5">
						<TaskAltIcon style={{color:'#ff9800'}} />
				{t(
					'The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate the parties of the lawsuit, invite new witnesses, appoint an expert, listen to experts and carry out any new investigations it deems appropriate...'
				)}
			</Typography>
			</Grid>
					
		</Container>
	);
};

export default withTranslation()(Cards);
