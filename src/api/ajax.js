import axios from "axios"


export default function ajax(url, data={}, methods='GET'){

  return new Promise ((res,rej) => {
    //获取promise对象
    let promise
    if (methods==='GET'){
      promise =  axios.get(url, {params:data})
    } else {
      promise =  axios.post(url, data)
    }
    promise.then(rep => {
      res(rep.data)
    }).catch(err => {
      alert('请求错误',err.message)
    })
  })

}

// async function login(){
  // ajax('/login',{name:"tom",pwd:"123"},'POST').then(function (response) {
  //   const result = response.data
  //   })
  //  const response = await ajax('/login',{name:"tom",pwd:"123"},'POST')
  // const result = response.data
// }
