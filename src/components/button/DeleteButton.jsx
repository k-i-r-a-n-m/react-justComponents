import { Button, Typography } from "@mui/material";

import React from "react";

const styles = {
  deleteButton: {
    borderRadius: 1,
    border: "1px solid  #566787",
    color: "#566787ad",
    textTransform: "capitalize",
    letterSpacing: 0,
    fontSize: 12,
    fontFamily: "Roboto,sans-serif",
    minHeight: 0,
    minWidth: 0,
    padding: "2px 8px",
    bgcolor: "white",
    lineHeight: " 1.43",
    boxShadow:'0',
    "&:hover": {
      bgcolor: "#566787",
      color: "white",
    },
  },
};

const DeleteButton = () => {
  return (
    <>
      <Button variant="contained" sx={styles.deleteButton}>
        Delete
      </Button>
    </>
  );
};

export default DeleteButton;
