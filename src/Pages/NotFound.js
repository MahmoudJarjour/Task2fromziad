import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

const NotFound = () => {
	const host = window.location.host;
	const { t } = useTranslation();
	return (
		<Typography paddingTop={15}>
			{t('404 Page')}
			{console.log(host)}
		</Typography>
	);
};

export default withTranslation()(NotFound);
