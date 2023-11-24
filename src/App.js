import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Auction from './Auction';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import PlayerInfo from './components/auction/PlayerInfo';
import MaleAuction from './auction_pages/MaleAuction';
import FemaleAuction from './auction_pages/FemaleAuction';
import PlayerInfoFemale from './components/auction/PlayerInfoFemale';

function App() {
const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
    <Router>
    <GlobalStyle />
    <Header />
        <Routes>
                <Route path='/auction-dashboard/' element={<MaleAuction />}/>
                <Route path='/auction-dashboard/auction/male' element={<MaleAuction />} />
                <Route path='/auction-dashboard/auction/female' element={<FemaleAuction />} />
                <Route path='/auction-dashboard/player-details/:id' element= {<PlayerInfo />}/>
                <Route path='/auction-dashboard/player-details/female/:id' element={<PlayerInfoFemale/>}/>
        </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;
