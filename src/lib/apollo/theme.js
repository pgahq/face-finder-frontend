export const pgaCoachTheme = {
  palette: {
    primary: {
      main: '#00234B',
      light: '#043362',
      dark: '#001834',
      constrastText: '#FFFFFF',
      selected: 'rgba(0, 35, 75, 0.08)'
    },
    secondary: {
      main: '#AB9157',
      light: '#BBA778',
      dark: '#77653C',
      contrastText: '#FFFFFF'
    },
    text: {
      secondary: 'rgba(0, 0, 0, 0.54)'
    }
  },
  props: {
    MuiTabs: {
      indicatorColor: 'primary',
      textColor: 'primary'
    },
    MuiSwitch: {
      color: 'primary'
    }
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        color: 'rgba(0, 0, 0, 0.87)'
      }
    },
    MUIRichTextEditor: {
      toolbar: {
        borderBottom: '1px solid #E0E0E0',
        marginBottom: '10px'
      },
      editorContainer: {
        height: '100%'
      }
    },
    MuiToggleButtonGroup: {
      root: {
        width: '100%'
      }
    },
    MuiToggleButton: {
      root: {
        border: '1px solid #043362',
        borderColor: '#043362',
        color: '#043362',
        width: '50%',
        '&$selected': {
          backgroundColor: '#00234B',
          color: 'white',
          '&:hover': {
            backgroundColor: '#00234B'
          }
        }
      }
    }
  }
}
