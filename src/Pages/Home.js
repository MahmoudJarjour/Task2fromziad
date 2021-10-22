import React from 'react';
import { Container, Typography } from '@mui/material';
import Block1 from '../Components/Block1';
import Cards from '../Components/Cards';
import Block2 from '../Components/Block2';
import { withTranslation } from 'react-i18next';

const Home = () => {
	return (
		<Container xs={12} sm={12} md={12} lg={12} >
			<Container>
				<Block1 />

				<Container>
					<Cards />
				</Container>
			</Container>

			<Container>
				<Block2 />
			</Container>
		</Container>
	);
};

export default withTranslation()(Home);
