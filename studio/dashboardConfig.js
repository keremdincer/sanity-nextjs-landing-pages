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
                  buildHookId: '5e0f218464006a6dd00b60d0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7k879vtb',
                  apiId: 'fcfd565e-c425-4eeb-8eef-131bc50bb0d8'
                },
                {
                  buildHookId: '5e0f2184c1db7a0af1e327ad',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nq13ob57',
                  apiId: '81a3e15e-ad1e-42bc-a36e-2b7f894ec336'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/keremdincer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nq13ob57.netlify.com', category: 'apps'}
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
