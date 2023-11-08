import { useState } from "react";
import {
  Badge,
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
export default function TrafficHeader() {
  const [value, setValue] = useState("Current User");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#909BBB",
    fontSize: "13px",
  }));
  const shapeStyles = {
    bgcolor: "#FB4540",
    width: 20,
    height: 20,
    borderRadius: 1,
  };
  const rectangle = (
    <Box component="span" sx={{ ...shapeStyles, bgcolor: "#009BF2" }} />
  );
  const rectangle2 = <Box component="span" sx={shapeStyles} />;
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack
      bgcolor="transparent"
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Item>
        <Typography>User Traffic</Typography>
      </Item>
      <Item sx={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Badge color="secondary">
          {rectangle}
          <Typography>User Sign up</Typography>
        </Badge>
        <Badge color="secondary">
          {rectangle2}
          <Typography>User Subscribed</Typography>
        </Badge>
        <FormControl
          sx={{
            width: "125px",
            border: "1px solid rgba(174, 171, 216, 0.4)",
            borderRadius: "6px",
            color: "#8C89B4",
          }}
        >
          <Select
            value={value}
            onChange={handleChange}
            sx={{
              color: "#8C89B4",
              ".MuiSvgIcon-root": {
                color: "#8C89B4",
              },
              ' .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
                padding: "6px 4px",
              }
            }}
          >
            <MenuItem value="Current User">Current User</MenuItem>
            <MenuItem value="User 2">User 2</MenuItem>
            <MenuItem value="User 3">User 3</MenuItem>
          </Select>
        </FormControl>
      </Item>
    </Stack>
  );
}
