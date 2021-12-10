import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TextField from '@mui/material/TextField';

const FormikTextField = ({ field, form, ...props }) => {
  let { helperText } = props;
  const error = Boolean(form.touched[field.name] && form.errors[field.name]);
  if (error) {
    helperText = form.errors[field.name];
  }

  return <TextField {...field} {...props} form={form} helperText={helperText} error={error} />;
};

FormikTextField.propTypes = {
  helperText: PropTypes.string,
  field: PropTypes.shape({ name: PropTypes.string }).isRequired,
  form: PropTypes.shape({ touched: PropTypes.shape({}), errors: PropTypes.shape({}) }).isRequired,
};

FormikTextField.defaultProps = {
  helperText: '',
};

export default observer(FormikTextField);
