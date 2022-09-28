//

import Card from './Card'
import Link from './Link'
import Paper from './Paper'
import Input from './Input'
import Button from './Button'
import Tooltip from './Tooltip'
import Backdrop from './Backdrop'
import Typography from './Typography'
import CssBaseline from './CssBaseline'
import Autocomplete from './Autocomplete'
import { Components, Theme } from '@mui/material'

const ComponentsOverrides = (theme: Theme): Components<Theme> => {
  return Object.assign(
    Card(theme),
    Link(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    CssBaseline(theme),
    Autocomplete(theme)
  )
}

export default ComponentsOverrides
