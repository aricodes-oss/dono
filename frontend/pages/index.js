import { observer } from 'mobx-react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import { Formik } from 'formik';
import * as yup from 'yup';

import { useTitle } from 'hooks';

import DonationForm from 'components/DonationForm';

const schema = yup.object().shape({
  username: yup.string().default('Anonymous'),
  email: yup.string().email().required(),
  amount: yup.number().moreThan(4.99).required(),
});

const Home = () => {
  useTitle('Donate');

  return (
    <Container sx={{ p: 4 }} maxWidth="md">
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4">Thank you for your donation!</Typography>

        <Formik initialValues={{ username: '', email: '', amount: 0 }} validationSchema={schema}>
          <DonationForm />
        </Formik>
      </Paper>
    </Container>
  );
};

export default observer(Home);
