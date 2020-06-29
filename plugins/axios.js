export default function ({ $axios, redirect }) {
  $axios.setBaseURL('http://localhost:8080/')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if (code === 403) {
      redirect('/login')
    }
  })
}
