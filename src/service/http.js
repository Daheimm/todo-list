import axios from 'axios';
import { useEffect } from 'react';

export default axios.create({
    'headers':{
      'X-Request-With':'XMLHttpRequest',
      withCredentials:true,
    }
});