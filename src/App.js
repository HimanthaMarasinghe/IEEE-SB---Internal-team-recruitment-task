import { Box, Typography } from "@mui/material";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import TimeLine from "./components/TimeLine";
import PrizeCard from "./components/PrizeCard";
import QnA from "./components/QnA";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

function App() {

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Introduction />
      <TimeLine />
      <Box id='Prices' sx={{height: {xs:'unset', lg:'calc(100vh - 50px)'}, alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
      <Typography variant="h3" sx={{textAlign:'center', margin: '20px 0 40px', color:'white'}}>Prizes</Typography>
      <Box sx={{display:'flex', flexDirection:{xs:'column', lg:'row'}, width:'100%', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap', gap: 5}}>
        <PrizeCard place="2" prize="Rs. 30,000" />
        <PrizeCard place="1" prize="Rs. 50,000" />
        <PrizeCard place="3" prize="Rs. 20,000" />
      </Box>
      </Box>
      <QnA />
      <Footer />
      <ParticleBg />
    </div>
  );
}

export default App;
