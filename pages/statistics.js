import { Grid } from "@mui/material";
import Loader from "../components/Loader";
import EconomicsStatistic from "../components/EconomicsStatistic";
import ScienceStatistics from '../components/ScienceStatistics'
import MediaStatistics from '../components/MediaStatistics'
export default function Statistics() {
    return (
        <>
        <Grid container>
            <Grid xs={4}>
                <EconomicsStatistic 
                    section={{title: "Economics", value_name: "GEP"}}
                />
            </Grid>
            <Grid xs={4}>
                <ScienceStatistics 
                    section={{title: "Science", value_name: "Publications number"}}
                />
                
            </Grid>
            <Grid xs={4}>
                <MediaStatistics 
                    section={{title: "Media", value_name: "Reputation"}}
                />
                
            </Grid>
        </Grid>
        </>   
    )
}