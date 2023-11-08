import { Badge, Box, Icon, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function HomeMenueCard({ icon, title, amount, percentage }) {
  const shapeStyles = {
    bgcolor: "#FB4540",
    width: 80,
    height: 80,
    borderRadius: 4,
  };
  const rectangle = (
    <Box component="span" sx={{ ...shapeStyles, bgcolor: "#009BF2" }} />
  );
  return (
    <Box>
      <Badge color="secondary">
        {rectangle}
        <Typography>User Sign up</Typography>
      </Badge>
      <Icon>{icon.text}</Icon>
      <Typography>{title}</Typography>
      <Typography>{amount}</Typography>
      <Badge>{percentage}</Badge>
    </Box>
  );
}

HomeMenueCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  amount: PropTypes.string,
  percentage: PropTypes.percentage,
};
