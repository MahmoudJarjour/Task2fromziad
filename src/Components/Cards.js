import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import { withTranslation, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import i18n from '../Locales/i18n';

const data = [
	{
		id: 1,
		discription: 'Imprisonment, preventive detention or a ne of more than ve hundred thousand Lebanese pounds.',
	},
	{
		id: 2,
		discription: 'Additional or secondary penalty or personal compensations of more than ve hundred thousand Lebanese pounds.',
	},
	{
		id: 3,
		discription: 'Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.',
	},
	{
		id: 4,
		discription: 'Penalty for a violation correlative with a misdemeanor.',
	},
];

const Cards = ({ card }) => {
	const { t } = useTranslation();
	return (
		<Container>
			<Grid container spacing={15} columns={16}>
				{data.map((item) => (
					<Grid item xs={4} key={item.id}>
						<Typography backgroundColor="#A9B2C3" borderRadius>
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
