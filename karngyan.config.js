// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {  
  name: 'Preyal Ameta',
  domain: 'template.karngyan.com', // add without https:// , used in meta tags and share urls
  image: '/images/sphere.gif',
  email: 'ameta.preyal@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'template.karngyan.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'preyalameta02',
    linkedin: 'preyalameta02',
    // facebook: 'preyal.ameta.3',
    //twitter: 'gyankarn',
    // instagram: 'preyal_ameta',
    codestats: 'pameta02' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/ametapreyal'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/preyal_ameta_dark.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS 15.6'},
      {title: 'Memory', value: '8 GB (LPDDR5 - Apple M2 Pro'},
      {title: 'Keyboard', value: 'Cosmic Byte CB-GK-18 - Mechanical Outemu Red Switches'},
      {title: 'Mouse', value: 'Logitech - G102 Lightsync Wired'},
      {title: 'Monitor', value: 'Samsung Essential Series 24 Inch Full HD VA Panel 4MS 100Hz Curved Monitor'},
      {title: 'Machine', value: 'MacBook Pro (13-inch, 2022)• Apple M2'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'GEP Worldwide', src: '/images/gep_logo_dark.png', url: 'https://www.gep.com/' },
      { name: 'OML', src: '/images/oml-logo.png', url: 'https://oml.in/' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: 'Varun Jain', designation: 'Founder, SendX & SendPost', image: '/images/varun.jpeg', linkedin: 'https://www.linkedin.com/in/varun-jain-582b0215/', content: 'Gyan interned with SendX and SendPost for around 6 months. He is a very strong full-stack engineer who can create pixel perfect frontend while being able to work on backend pieces sending millions of emails per day. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user\'s perspective.' },
      { name: 'Gaurav Sen', designation: 'Founder, InterviewReady', image: '/images/gaurav.jpeg', linkedin: 'https://www.linkedin.com/in/gkcs/', content: 'Karn is an extraordinarily talented, diligent and foresighted individual. He is gifted at building products from paper to code, and has a knack of finding efficient solutions to complex problems. In my experience, I have rarely seen such a mixture of talent and passion put together. At InterviewReady, Karn exceeded our expectations. If you are considering working with him: congratulations, you are going to have a great time!' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'I am a software engineer with a curiosity that spins into side projects, and when I am not coding, you will probably find me on a tennis court.',
        words: ['developer', 'gamer', 'engineer', 'programmer', 'encoder'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
