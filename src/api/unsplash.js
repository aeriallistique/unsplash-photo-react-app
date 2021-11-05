import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID A1dDnday1brWKa5srmyHA5fCLR3QfPpG0phENgj54Io'
    }
});