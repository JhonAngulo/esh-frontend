import { MouseEventHandler } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

interface BasicBreadcrumbsProps {
  route: string
}

const BasicBreadcrumbs = ({ route }: BasicBreadcrumbsProps): JSX.Element => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href={route}>
          {route}
        </Link>
      </Breadcrumbs>
    </div>
  )
}

export default BasicBreadcrumbs
