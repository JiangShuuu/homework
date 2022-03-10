export default function ({ $auth, redirect, $axios }) {
  if (process.server) {
    console.log($auth.strategy.token.get())
    // if (fetch('https://vue3-course-api.hexschool.io/v2/api/johntext/product/-MvWSbO3h-NjIUXZLLOc').then(res => res.json()).then((data) => {
    //   console.log(data)
    //   // $auth.setUserToken(data.product)
    // })) {}
    if ($axios.$get('https://vue3-course-api.hexschool.io/v2/api/johntext/product/-MvWSbO3h-NjIUXZLLOc').then((res) => {
      console.log(res)
    })) {
      redirect('/svg')
    }
    // if ($auth.strategy.token.get()) {
    //   redirect('/image')
    // }
    // $auth.fetchUser().then((data) => {
    //   console.log(data)
    // })
  }

  // 這條可行
  if (process.client) {
    if ($auth.loggedIn) {
      redirect('/image')
    }
  }
}
