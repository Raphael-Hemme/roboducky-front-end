import { purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#009aff',
    },
    secondary: {
      main: '#3fbe67',
    },
  },
  
})

export default CustomTheme