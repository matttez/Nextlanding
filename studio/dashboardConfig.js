export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fd2a514ba8320083c8c20d',
                  title: 'Sanity Studio',
                  name: 'nextlanding-studio',
                  apiId: '9cead2ba-4242-4ce6-841f-0c7e6c781f1e'
                },
                {
                  buildHookId: '61fd2a5145deba009db23c29',
                  title: 'Landing pages Website',
                  name: 'nextlanding-web',
                  apiId: '0d952dcd-fd20-4442-ada5-5618c679a1f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matttez/Nextlanding',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextlanding-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
