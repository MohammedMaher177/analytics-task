import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// import styles from "./home.module.css";
import Traffic from "../../Components/Traffic/Traffic.jsx";
import Header from "../../Components/Header/Header.jsx";
import HomeMenue from "../../Components/HomeMenue/HomeMenue.jsx";
import Location from "../../Components/Location/Location.jsx";
export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    textAlign: "center",
    color: "#8C89B4",
  }));
  return (
    <Box
      sx={{
        display: "fle",
        width: "100%",
        background: "linear-gradient(116.82deg, #060B27 0%, #2F014C 100%)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Header />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <HomeMenue />
          </Item>
        </Grid>
        <Grid item xs={8} sx={{ maxHeight: "650px" }}>
          <Item>
            <Traffic />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={4}>
            <Item>
              <Location />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
