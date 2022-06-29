import { defaultTheme } from 'react-admin';
import merge from 'lodash/merge';

const Theme = merge({}, defaultTheme, {
    
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['B Nazanin','-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
        
    }, 
   
});
 export default Theme;
