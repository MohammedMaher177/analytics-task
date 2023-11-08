import { Box } from "@mui/material";
import HomeMenueCard from "./HomeMenueCard.jsx";
import CallMadeIcon from '@mui/icons-material/CallMade';
export default function HomeMenue() {
  const items = [
    {
      icon: {
        text: <CallMadeIcon  sx={{rotate:"180deg"}}/>,
        bg: "linear-gradient(0deg, #3F46F7, #3F46F7), radial-gradient(87.91% 69.48% at 12.09% 8.37%, rgba(37, 77, 105, 0.2) 8.99%, rgba(37, 77, 105, 0) 100%), rgba(9, 24, 35, 0.05)",
      },
      title: "Total Visits",
      amount: "6300",
      percentage: "+1.29%",
    },
  ];
  return (
    <Box>
      {items.map((el, i) => (
        <HomeMenueCard
          icon={el.icon}
          title={el.title}
          amount={el.amount}
          percentage={el.percentage}
          key={i}
        />
      ))}
    </Box>
  );
}
