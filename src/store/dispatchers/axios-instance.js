import axios from 'axios'
const authBearer = 'BQD3KfJY8P-6ob9C7UA9k75HgLsZ5LNOJDcazIN1DwKysnxxPGs2kudurFlLawfXGgxiqkKXur6v8e8AmijV6mjfQeF_hC2aSlJIH70gDDwMWl5ONVfnaa5fQbeVrC7TBMaVqQ7DuabHi9Eurt4dOcFPZfVV7JTvBJmUKFFEsZmuijkIkceHKX-hDDJ18Dd-adeB1IpkLeZW5p4pIsN4nhy4WgauDvtKi-7h7YHElPkuegeDYcTOI2KzbVsjEFk8HQ'

export const axiosInstance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authBearer}`,
    },
})
