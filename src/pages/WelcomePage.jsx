import React, { useMemo } from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const WelcomePage = () => {
  const iconContextSize = useMemo(() => ({ size: '6em' }), [])
  return (
    <WelcomeScreen>
      <Grid container direction="column" justify="center" className="full">
        <div className="highllight">
          <Grid item container xd={12} justify="center" alignItems="center">
            <Grid item>
              <IconContext.Provider value={iconContextSize}>
                <WiDaySunny />
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              xd={12}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Weather App
              </Typography>
              <Link
                color="inherit"
                area-label="menu"
                component={RouterLink}
                to="/main"
              >
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  )
}

export default WelcomePage
