import type { FC } from "react";
import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
//import toast from "react-hot-toast";
import { addMinutes } from "date-fns";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Dialog,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
// import DateTimePicker from "@mui/lab/DateTimePicker";
import { Trash as TrashIcon } from "components/icons/trash";
import { useDispatch } from "react-redux";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ReactQuill from "react-quill";
import { DatePicker } from "@mui/x-date-pickers";

export const ImportConfigDialog = (props) => {
  const { nconfig, componentId, onClose, open, customConfig } = props;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

 //console.log(nconfig);
 //console.log(componentId);
  const handleSubmit = () => {
   //console.log(inputValue);
    const data = JSON.parse(inputValue);
    nconfig[componentId] = data;
   //console.log(nconfig);
    onClose();
  };

  const handleDelete = async (): Promise<void> => {
    try {
      //   await dispatch(
      //     deleteEvent({
      //       eventId: event.id!,
      //     })
      //   );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog fullWidth maxWidth="lg" onClose={onClose} open={true}>
      <>
        <Box sx={{ p: 1 }}>
          <Typography align="center" gutterBottom variant="h5">
            Import Config
          </Typography>
        </Box>
        <Box sx={{ p: 1 }}>
          <Box sx={{ mt: 2, mb: 3, pb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Configuration :
            </Typography>
            <TextField
              id="multiline-textfield"
              label="configuration"
              multiline
              rows={8} // You can adjust the number of rows as needed
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
            />
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            p: 1,
          }}
        >
          {/* {event && (
            <IconButton onClick={(): Promise<void> => handleDelete()}>
              <TrashIcon fontSize="small" />
            </IconButton>
          )} */}
          <Box sx={{ flexGrow: 1 }} />
          <Button onClick={onClose} size="small">
            Cancel
          </Button>
          <Button
            sx={{ ml: 1 }}
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            size="small"
          >
            Confirm
          </Button>
        </Box>
      </>
    </Dialog>
  );
};