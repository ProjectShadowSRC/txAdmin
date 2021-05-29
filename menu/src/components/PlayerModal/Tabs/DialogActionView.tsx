import React from "react";
import { Box, Button, DialogContent, Typography, useTheme } from "@material-ui/core";
import { useStyles } from "../modal.styles";
import { useAssociatedPlayerValue, usePlayerDetailsValue } from '../../../state/playerDetails.state';
import { fetchWebPipe } from '../../../utils/fetchWebPipe';
import { fetchNui } from '../../../utils/fetchNui';

const DialogActionView: React.FC = () => {
  const classes = useStyles();
  const playerDetails = usePlayerDetailsValue()
  const assocPlayer = useAssociatedPlayerValue()

  const handleDM = async () => {

  }

  // const handleWarn = async () => {
  //   try {
  //     const resp = await fetchWebPipe('/player/warn', {
  //       method: 'POST',
  //       data: { id: }
  //     })
  //   } catch (e) {
  //
  //   }
  // }

  const handleKick = async () => {
    const resp = await fetchWebPipe('/player/kick', {
      method: 'POST',
      data: {
        id: assocPlayer.id,
        reason: 'No reason provided'
      }
    })
  }

  const handleSetAdmin = async () => {

  }

  const handleHeal = () => {
  }

  const handleGoTo = async () => {

  }

  const handleSpectate = async () => {

  }

  return (
    <DialogContent>
      <Box pb={1}>
        <Typography variant="h6">Player Actions</Typography>
      </Box>
      <Typography style={{ paddingBottom: 5 }}>Moderation</Typography>
      <Box className={classes.actionGrid}>
        <Button variant="outlined" color="primary">DM</Button>
        <Button variant="outlined" color="primary">Warn</Button>
        <Button variant="outlined" color="primary">Kick</Button>
        <Button variant="outlined" color="primary">Set Admin</Button>
      </Box>
      <Typography style={{ paddingBottom: 5 }}>Interaction</Typography>
      <Box className={classes.actionGrid}>
        <Button variant="outlined" color="primary">Heal</Button>
        <Button variant="outlined" color="primary">Go to</Button>
        <Button variant="outlined" color="primary">Bring</Button>
        <Button variant="outlined" color="primary">Spectate</Button>
      </Box>
      <Typography style={{ paddingBottom: 5 }}>Troll</Typography>
      <Box className={classes.actionGrid}>
        <Button variant="outlined" color="primary">Kill</Button>
        <Button variant="outlined" color="primary">Fire</Button>
        <Button variant="outlined" color="primary">Drunk</Button>
        <Button variant="outlined" color="primary">Wild attack</Button>
      </Box>
    </DialogContent>
  )
}

export default DialogActionView;