import React from 'react';
import { Grid, Typography, AppBar, Toolbar, Box, Card, CssBaseline, IconButton, CircularProgress } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h4">
              twittertrader
            </Typography>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {data.map((item, i) => (
          <Box key={i} sx={{
            width: '100%',
            padding: '20px',
          }}>
            <Card elevation={6} sx={{ padding: '20px', width: '100%' }}>
              <Box display="flex" alignItems="center">
                <Box width="40%">
                  <Typography variant="h6" gutterBottom>{item.name}</Typography>
                  <Typography variant="subtitle1" gutterBottom>{item.ticker}</Typography>
                  <Box display="flex" alignItems="center">
                    Positive
                    <Pie value={item.positive} color="#388e3c" />
                  </Box>
                  <Box display="flex" alignItems="center">
                    Negative
                    <Pie value={item.negative} color="#d32f2f"/>
                  </Box>
                </Box>
                <Box width="60%" maxHeight="300px" overflow="auto">
                  <TwitterTweetEmbed
                    key={`tweetEmbed${theme.palette.mode}`}
                    tweetId={item.tweetid}
                    options={{ theme: `${theme.palette.mode}`, conversation: "none" }}
                  />
                </Box>
              </Box>
            </Card>
          </Box>
        ))
        }
      </Box>
    </>
  );
}

const data = [
  {
    name: 'Tesla',
    ticker: 'TSLA',
    tweetid: '1512559449369686022',
    positive: 60,
    negative: 20,
  },
  {
    name: 'Apple',
    ticker: 'APPL',
    tweetid: '1510049444166717440',
    positive: 75,
    negative: 15,
  },
  {
    name: 'REALLY LONG STOCK NAME FOR TESTING',
    ticker: 'LNGTCKR',
    tweetid: '1512105760494346240',
    positive: 70,
    negative: 15,
  },
  {
    name: 'Tesla',
    ticker: 'TSLA',
    tweetid: '1512559449369686022',
    positive: 60,
    negative: 20,
  },
  {
    name: 'Apple',
    ticker: 'APPL',
    tweetid: '1510049444166717440',
    positive: 75,
    negative: 15,
  },
  {
    name: 'REALLY LONG STOCK NAME FOR TESTING',
    ticker: 'LNGTCKR',
    tweetid: '1512105760494346240',
    positive: 70,
    negative: 15,
  },
];

function Pie({ value, color }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', margin: '10px 10px' }}>
      <CircularProgress variant="determinate" value={value} sx={{ color: color }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
