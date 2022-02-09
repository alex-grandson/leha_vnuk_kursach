import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2"
import Loader from "./Loader"
import { useGetMediaByCountyIdQuery } from "../pages/api/reptiloidAPI"
/*

section.title = Заголовок слайса (Economics | Science | Media)
section.value_name - название параметра

*/

ChartJS.register(ArcElement, Tooltip, Legend);


export default function ScienceStatistics ({ section }) {
    const {data: media_data, isLoading: isLoadingMedia} = useGetMediaByCountyIdQuery(1);
    
    if (isLoadingMedia) return <Loader />
    
    const chart_data = {
        labels: ['Human','Reptiloid'],
        datasets: [{
            label: "% of control",
            data: [media_data[0]["human"], media_data[0]["reptiloid"]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(75, 192, 192, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }],
        
    }

    return (
        <>
            <Box>
                <Typography variant="h3">
                    {section.title}
                </Typography>
                <Typography variant="p">
                    {section.value_name}
                </Typography>
            </Box>
            <Box>
                <Doughnut data={chart_data} />
            </Box>
        </>
        
    )
}

