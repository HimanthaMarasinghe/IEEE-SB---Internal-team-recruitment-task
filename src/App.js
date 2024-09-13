import { Box, Typography } from "@mui/material";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import TimeLine from "./components/TimeLine";
import PrizeCard from "./components/PrizeCard";
import QnA from "./components/QnA";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TimeLine />
      <Box className="snap" sx={{height: '90vh', alignItems:'center', justifyContent:'flex-start', display:'flex', flexDirection:'column'}}>
      <Typography variant="h3" sx={{textAlign:'center', margin: '20px 0', color:'white'}}>Prizes</Typography>
      <Box sx={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-evenly'}}>
        <PrizeCard place="2" prize="Rs. 50,000" />
        <PrizeCard place="1" prize="Rs. 50,000" />
        <PrizeCard place="3" prize="Rs. 50,000" />
      </Box>
      </Box>
      <QnA />
      <ParticleBg />
    </div>
  );
}

export default App;
