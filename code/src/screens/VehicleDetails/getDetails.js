const axios = require('axios');
export const fetchDetails = async () => {
    const options = {
    method: 'POST',
    url: 'https://vehicle-rc-information.p.rapidapi.com/',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3c720b5980msh1e4d3f5aeec3f51p14a87bjsn1835be8e708a',
        'X-RapidAPI-Host': 'vehicle-rc-information.p.rapidapi.com'
    },
    data: {
        VehicleNumber: 'MH14CH3077'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}
