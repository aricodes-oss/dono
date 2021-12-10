import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import NumberFormat from 'react-number-format';

import TextField from './FormikTextField';

const NumberFormatInput = forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      allowLeadingZeros={false}
      prefix="$"
    />
  );
});

NumberFormatInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const CurrencyInput = ({ field, ...props }) => (
  <TextField {...props} field={field} InputProps={{ inputComponent: NumberFormatInput }} />
);

CurrencyInput.propTypes = {
  field: PropTypes.shape({}).isRequired,
};

export default observer(CurrencyInput);
