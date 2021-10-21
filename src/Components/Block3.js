import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { useTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

const data3 = [
	{
		id: 1,
		cardheader: 'With respect to the Public Prosecution,the delay is 24 hours:',
		cardcontent: '* As of the date of issuance of the decision.',
	},
	{
		id: 2,
		cardheader: 'With respect to the opponents, the delay is 24 hours:',
		cardcontent: '* As of the date of notifying the opponents of the same.',
	},
];

const data3Ar = [
	{
		id: 1,
		cardheader: 'بالنسبة للنيابة العامة ، المهلة هي ٢٤ ساعة',
		cardcontent: '* من تاريخ صدور القرار',
	},
	{
		id: 2,
		cardheader: 'بالنسبة للخصوم ، المهلة هي ٢٤ ساعة',
		cardcontent: '* من تاريخ تبليغه للخصوم ',
	},
];

const Block3 = () => {
	const { t } = useTranslation();
	return (
		<>
			<Container>
				<Grid container spacing={15} columns={16}>
					{getLanguage() === 'en'
						? data3.map((item) => (
								<Grid item xs={6} key={item.id}>
									<Typography
										backgroundColor="gray"
										style={{
											fontFamily: 'Georgia',
											color: 'white',
											fontWeight:'bold',
											fontSize:'13px',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderBottomRightRadius: '20px',
											textAlign: 'center',
											paddingLeft: '5px',
											marginLeft: '5px',
										}}
										borderRadius
									>
										{' '}
										{item.cardheader}{' '}
									</Typography>

									<Typography
										style={{
											fontFamily: 'Georgia',
											fontWeight:'bold',
											fontSize:'13px',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderBottomRightRadius: '20px',
											paddingLeft: getLanguage() === 'en' ? '15px' : '',
											paddingRight: getLanguage() === 'ar' ? '15px' : '',
											marginLeft: '5px',
										}}
										borderRadius
									>
										{item.cardcontent}
									</Typography>
								</Grid>
						  ))
						: data3Ar.map((item) => (
								<Grid item xs={6} key={item.id}>
									<Typography
										backgroundColor="gray"
										style={{
											fontFamily: 'Georgia',
											color: 'white',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderEndEndRadius: '20px',
											textAlign: 'center',
											paddingLeft: '5px',
											marginLeft: '5px',
										}}
										borderRadius
									>
										{' '}
										{item.cardheader}{' '}
									</Typography>

									<Typography
										style={{
											fontFamily: 'Georgia',
											borderTopLeftRadius: '20px',
											borderEndStartRadius: '20px',
											borderTopRightRadius: '20px',
											borderBottomRightRadius: '20px',
											paddingLeft: getLanguage() === 'en' ? '15px' : '',
											paddingRight: getLanguage() === 'ar' ? '15px' : '',

											marginLeft: '5px',
										}}
										borderRadius
									>
										{item.cardcontent}
									</Typography>
								</Grid>
						  ))}
				</Grid>
				<br />
				<Typography style={{ textAlign: getLanguage() === 'ar' ? 'right' : 'left', fontFamily: 'Georgia', fontWeight: 'revert' }} variant="subtitle1">
					{t('The appeal shall be submitted through a lawyer.')}
				</Typography>
			</Container>
		</>
	);
};
export default withTranslation()(Block3);
