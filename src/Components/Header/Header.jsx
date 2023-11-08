import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [value, setValue] = useState("User Name");




  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box sx={{ display: " flex", justifyContent: "space-between", textAlign:"left" }}>
      <Box>
        <Typography component="h2">User Analytics</Typography>
        <Typography component="p">
          Lorem ipsum dolor sit consectetur.
        </Typography>
      </Box>
      <Box>
      <FormControl
          sx={{
            width: "135px",
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
              " .MuiSvgIcon-root": {
                color: "#8C89B4",
              },
            }}
          >
            <MenuItem value="User Name">User Name</MenuItem>
            <MenuItem value="profile">Profile</MenuItem>
            <MenuItem value="Settings">Settings</MenuItem>
            <MenuItem value="log out">Log out</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
