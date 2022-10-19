// const url = 'https://www.dji.com/cn/mavic-3?from[]=nav&site=brandsite&from[]=homepage&height=200#faq'
const url = 'https://www.dji.com:8080'

function foo(url){
  let protocol = ''
  let hostname = ''
  let port = ''
  let pathname = '/'
  let hash= ''
  let search = []
  if(url.includes('?')){
    let urls = url.split('?')
    url = urls[0]
    let urlsearch = ''
    if(urls[1].includes('#')){
      urlsearch = urls[1].split('#')[0]
      hash = urls[1].split('#')[1]
    }
    search = urlsearch.split('&')
  }
  protocol = url.match(/^\w{4,5}/)[0] + ':'
  url = url.slice(protocol.length + 2) //删去http://,https://

  let spliturl = url.split('/')
  hostname = spliturl[0]
  if(hostname.includes(':')){
    [hostname,port] = hostname.split(':')
  }
  if(spliturl.length > 1){
    spliturl.shift()
    pathname = spliturl.join('/')
  }

  

  console.log('protocol=',protocol)
  console.log('hostname=',hostname)
  console.log('port=',port)
  console.log('pathname=',pathname)
  console.log('hash=',hash)
  for(let i of search){
    console.log('search:',i)
  }
  
}

foo(url)