

export default [
  {
    path: '/',
    redirect: "/home",
    meta: {
      mapShow: true
    }
  },
  {
    path: '/home',
    component: () => import('@/pages/home'),
    meta: {
      mapShow: true
    }
  },
  {
    name: 'researchteam',  // 是当前路由的标识名称
    path: '/researchteam',
    component: () => import('@/pages/researchTeam'),
    children: [
      //子路由不能以“/”开头
      {
        name: "graduatelist",
        path: 'graduatelist',
        component: () => import('@/pages/researchTeam/graduateList'),
        meta: {
          show: true
        }
      },
      {
        name: "mentorlist",
        path: 'mentorlist',
        component: () => import('@/pages/researchTeam/mentorList'),
        meta: {
          show: true
        }
      },
      {
        name: "mentordetail",
        path: 'mentordetail',
        component: () => import('@/pages/researchTeam/mentorDetail'),
        meta: {
          show: false,
          cPath: ["学术队伍", "导师名单"]
        }
      },
    ]
  },

  {
    name: 'paper',  // 是当前路由的标识名称
    path: '/paper',
    component: () => import('@/pages/paper'),

    children: [
      //子路由不能以“/”开头
      {
        name: "journalpaper",
        path: 'journalpaper',
        component: () => import('@/pages/paper/JournalPaper'),
      },
      {
        name: "patent",
        path: 'patent',
        component: () => import('@/pages/paper/patent'),
      },
      {
        name: "book",
        path: 'book',
        component: () => import('@/pages/paper/book'),
      },
    ]
  },
  {
    name: 'talentdevelopment',  // 是当前路由的标识名称
    path: '/talentdevelopment',
    component: () => import('@/pages/TalentDevelopment'),
    children: [
      //子路由不能以“/”开头
      {
        name: "admissions",
        path: 'admissions',
        component: () => import('@/pages/TalentDevelopment/Admissions'),
      },
      {
        name: "employment",
        path: 'employment',
        component: () => import('@/pages/TalentDevelopment/Employment'),
      }
    ]
  },
  {
    name: 'instituteoverview',
    path: '/instituteoverview',
    component: () => import('@/pages/instituteOverview'),
    children: [
      //子路由不能以“/”开头
      {
        name: "introduce",
        path: 'introduce',
        component: () => import('@/pages/instituteOverview/Introduce'),
        meta: {
          mapShow: true
        } 
      },
      {
        name: "researchdirection",
        path: 'researchdirection',
        component: () => import('@/pages/instituteOverview/researchDirection'),
        meta: {
          topShow: true,
        }
      },
      {
        name: "newspage",
        path: 'newspage',
        component: () => import('@/pages/instituteOverview/newsPage'),
        meta: {
          topShow: true,
        }
      },
      {
        name: "newsdetail",
        path: 'newsdetail',
        component: () => import('@/pages/instituteOverview/newsDetail'),
       
        meta: {
          topShow: false,
          cPath: ["研究所总览", "新闻资讯"]
        }
       
      },

    ]
  },

  

  {
    name: 'comminicate',
    path: '/comminicate',
    component: () => import('@/pages/Comminicate'),
    children: [
      //子路由不能以“/”开头
      {
        name: "cooperation",
        path: 'cooperation',
        component: () => import('@/pages/Comminicate/Cooperation'),
      },
      {
        name: "contactus",
        path: 'contactus',
        component: () => import('@/pages/Comminicate/ContactUs'),
        meta: {
          mapShow: true
        }
      }
    ]
  },

]