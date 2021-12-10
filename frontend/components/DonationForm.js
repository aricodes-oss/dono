import PropTypes from 'prop-types';
import { Form, Field } from 'formik';
import { observer } from 'mobx-react';

import Button from '@mui/material/Button';
import TextField from './FormikTextField';
import CurrencyInput from './CurrencyInput';

const DonationForm = ({ isSubmitting }) => {
  return (
    <Form>
      <Field
        component={TextField}
        name="username"
        label="Preferred Name/Alias"
        helperText="Leave blank for an anonymous donation"
        sx={{ my: 2 }}
        fullWidth
      />

      <Field
        component={TextField}
        name="email"
        label="Email Address"
        helperText="This is only used for verification purposes"
        sx={{ mb: 2 }}
        fullWidth
      />

      <Field
        component={CurrencyInput}
        name="amount"
        label="Donation Amount"
        helperText="Minimum of $5"
        sx={{ mb: 2 }}
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={isSubmitting}
        color="primary"
      >
        Submit
      </Button>
    </Form>
  );
};

DonationForm.propTypes = {
  isSubmitting: PropTypes.bool,
};

DonationForm.defaultProps = {
  isSubmitting: false,
};

export default observer(DonationForm);
