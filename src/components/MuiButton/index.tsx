import * as React from 'react';
import Button, {ButtonProps} from '@mui/material/Button'

export const MuiButton = ({ labelText, color, ...muiProps }: {labelText: string, color?: ButtonProps['color'], muiProps?: ButtonProps}) => (
  <Button color={color} {...muiProps}>
    {labelText}
  </Button>
)

export default MuiButton