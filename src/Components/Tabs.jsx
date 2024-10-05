import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlineCheck } from "react-icons/ai";
import { easeIn, motion } from "framer-motion";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "black",
        // display: "flex",
        height: "fit-content",
        color: "whitesmoke",
      }}
      className="md:flex"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          ".MuiTabs-indicator": {
            display: "none", // Removes the blue line indicator
          },
          borderRight: 1,
          borderColor: "divider",
          ".MuiTab-root": {
            color: "#bbb", // Default text color for tabs
            alignItems: "flex-center", // Aligns icon and text to the left
            textTransform: "none", // Keeps the text in normal case
            fontSize: "14px", // Font size for tab labels
            // paddingLeft: "16px", // Padding to match the design
            padding: "6px 6px", // Additional padding to make it look like a button
            borderRadius: "8px", // Rounded corners for button effect
            marginY: "8px",
            transition: "background-color 0.3s", // Smooth transition for hover/active states
            "&:hover": {
              backgroundColor: "#333", // Hover background color
            },
          },
          ".Mui-selected": {
            color: "whitesmoke !important", // Selected text color
            backgroundColor: "#333", // Button background for selected tab
            borderRadius: "8px", // Ensures the background has rounded corners
          },
        }}
      >
        <Tab label="Teachyst" {...a11yProps(0)} />
        <Tab label="Dimension" {...a11yProps(1)} />
        <Tab label="Emitrr" {...a11yProps(2)} />
        <Tab label="Trryst" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="space-y-4">
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white font-semibold text-2xl -mt-4"
          >
            Founder & CEO <span className="text-cyan-400">@Teachyst</span>{" "}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-zinc-400 font-light text-sm"
          >
            Sep 2024 - Present
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4, delay: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
          </motion.div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="space-y-4">
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white font-semibold text-2xl -mt-4"
          >
            Founder & CEO <span className="text-cyan-400">@Teachyst</span>{" "}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-zinc-400 font-light text-sm"
          >
            Sep 2024 - Present
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4, delay: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
          </motion.div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="space-y-4">
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white font-semibold text-2xl -mt-4"
          >
            Founder & CEO <span className="text-cyan-400">@Teachyst</span>{" "}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-zinc-400 font-light text-sm"
          >
            Sep 2024 - Present
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4, delay: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
          </motion.div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="space-y-4">
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white font-semibold text-2xl -mt-4"
          >
            Founder & CEO <span className="text-cyan-400">@Teachyst</span>{" "}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-zinc-400 font-light text-sm"
          >
            Sep 2024 - Present
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-2"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.4, delay: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-zinc-400 font-light text-sm flex items-center gap-2"
            >
              <AiOutlineCheck className="text-cyan-400" /> Platform for
              educators and creators
            </motion.p>
          </motion.div>
        </div>
      </TabPanel>
    </Box>
  );
}
