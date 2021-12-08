import './App.css'
import {
  AppBar,
  Avatar,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function App() {
  const [value, setValue] = useState()
  const handleChange = (event, value) => {
    setValue(value)
  }
  return (
    <div className="App">
      <Stack className="stack">
        <Avatar
          className="avatar"
          alt="Avatar"
          src="/public/2.png"
          sx={{ width: 100, height: 100 }}
        />
        <Typography>MohammadHossein Dolatabadi</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Projects" {...a11yProps(0)} />
            <Tab label="Skills" {...a11yProps(1)} />
            <Tab label="Courses" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Stack>
    </div>
  )
}

export default App
