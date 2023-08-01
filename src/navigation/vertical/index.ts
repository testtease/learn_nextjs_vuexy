// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Table Stack',
      icon: 'tabler:stack-2',
      children: [
        {
          title: 'Basic Table',
          path: '/table/basic-table',
          icon: 'tabler:circle'
        },
        {
          title: 'Data Table',
          path: '/table/data-table',
          icon: 'tabler:circle'
        }
      ]
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield'
    }
  ]
}

export default navigation
