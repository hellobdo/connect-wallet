import React, { useState } from "react"
import "./App.css"
import { DiscoverWalletProviders } from "./components/DiscoverWalletProdivers"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function App() {
  const [showProviders, setShowProviders] = useState(false);

  const handleClick = () => {
    setShowProviders(!showProviders);
  };

  const handleClose = () => {
    setShowProviders(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Connect</Button>
      <Dialog open={showProviders} onClose={handleClose}>
        <DialogTitle>Connect Wallet</DialogTitle>
        <DialogContent>
          <DiscoverWalletProviders />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App