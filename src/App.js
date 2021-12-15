import './App.css'
import {
  AppBar,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code'

import * as React from 'react'
import { styled } from '@mui/material/styles'

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#2c3e50',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
)

const styles = (theme) => ({
  root: {
    padding: 0,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  item: {
    padding: 0,
  },
})

export function CustomizedTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Box disablePadding>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Projects" />
          <StyledTab label="Courses" />
          <StyledTab label="Skills" />
        </StyledTabs>
      </Box>
      <TabPanel disablePadding value={value} index={0} sx={{ padding: 0 }}>
        <List disablePadding className={styles.root}>
          <ListSubheader sx={{ bgcolor: 'transparent', color: '#2c3e50' }}>
            Personal Projects
          </ListSubheader>
          {[
            { primary: 'Chat Application', secondary: 'written in C' },
            { primary: 'Chicken Invaders', secondary: 'written in Java' },
            { primary: 'C-minus Compiler', secondary: 'written in Python' },
            {
              primary: 'Dots and Boxes',
              secondary: 'written in JS(using react)',
            },
          ].map(({ primary, secondary }) => (
            <ListItem disableGutters sx={{ padding: 0 }}>
              <ListItemIcon>
                <CodeIcon sx={{ color: '#ffffff', p: 0, m: 0 }} />
              </ListItemIcon>
              <ListItemText
                disablePadding
                primary={primary}
                secondary={secondary}
                secondaryTypographyProps={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List disablePadding>
          <ListSubheader sx={{ bgcolor: 'transparent', color: '#2c3e50' }}>
            Team Projects
          </ListSubheader>
          {[
            { primary: 'LearnX', secondary: 'written in Java(Android)' },
            { primary: 'Online Store', secondary: 'written in Java' },
            { primary: 'ToDo', secondary: 'written in Swift' },
          ].map(({ primary, secondary }) => (
            <ListItem disableGutters sx={{ padding: 0 }}>
              <ListItemIcon>
                <CodeIcon sx={{ color: '#ffffff', p: 0, m: 0 }} />
              </ListItemIcon>
              <ListItemText
                disablePadding
                primary={primary}
                secondary={secondary}
                secondaryTypographyProps={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              />
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1} sx={{ padding: 0 }}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} sx={{ padding: 0 }}>
        Item Three
      </TabPanel>
    </Box>
  )
}

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
        <CustomizedTabs />
      </Stack>
    </div>
  )
}

export default App
