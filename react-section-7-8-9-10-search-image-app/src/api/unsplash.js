import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b5Ldy-DufchgCCtN442_Vbcm4wBrk1IgIIg1X44Z3-w'
    }
})