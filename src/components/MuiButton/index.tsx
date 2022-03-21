import * as React from 'react';
import Button, {ButtonProps} from '@mui/material/Button'

export const MuiButton = ({ labelText, muiProps }: {labelText: string, muiProps?: ButtonProps}) => (
  <Button {...muiProps}>
    {labelText}
  </Button>
)

export default MuiButton