import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface ErrorModalProps {
  error: string;
  isOpen: boolean;
}
const ErrorModal: React.FC<ErrorModalProps> = ({ error, isOpen }) => {
  return (
    // <Modal open={isOpen} sx={{ my: 3 }}>

    // </Modal>
    <div>Error</div>
  );
};

export default ErrorModal;
