import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import i18next from 'i18next';
import i18n from '../Locales/i18n';

import HeaderBar from './HeaderBar';
import Home from '../Pages/Home';
import { withTranslation, useTranslation } from 'react-i18next';

const Layout = ({ children, theme }) => {
	return (
		<>
			{/* App Bar */}

			<Container>
				<HeaderBar />
			</Container>

			{/* Content */}

			<Container>{children}</Container>

			{/* Grids */}
		</>
	);
};

export default withTranslation()(Layout);
