import { Box } from "@chakra-ui/react";
import Banner from "./Components/Banner";
import MarqueeSlider from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import OrderDetails from "./Components/OrderDetails";

function App() {
  return (
    <Box bgColor={'#f7f8d4'}>
      <MarqueeSlider/>
      <Navbar/>
      <Banner/>
      <OrderDetails/>
      <Footer/>
    </Box>
  );
}

export default App;
