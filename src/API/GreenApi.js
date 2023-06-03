/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
// import { toast } from 'react-hot-toast'
/* eslint-disable class-methods-use-this */

class GreenApi {
  constructor({ signURL }) {
    this.signURL = signURL
  }

  // getAuthorizationHeader(token) {
  //   return `Bearer ${token}`
  // }

  // async checkToken(token) {
  //   if (!token) throw new Error('Отсутствует токен')
  // }

  async getChatHistory() {
    const res = await fetch('https://api.green-api.com/waInstance1101821330/getChatHistory/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa')
    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
          Проверьте отправляемые данные. Status: ${res.status}`)
    }
    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
            Попробуйте сделать запрос позже. Status: ${res.status}`)
    }
    return res.json()
  }

  async getSettings() {
    const res = await fetch('https://api.green-api.com/waInstance1101821330/getSettings/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa')
    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
          Проверьте отправляемые данные. Status: ${res.status}`)
    }
    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
            Попробуйте сделать запрос позже. Status: ${res.status}`)
    }
    return res.json()
  }

  async addMessage(data) {
    const res = await fetch('https://api.green-api.com/waInstance1101821330/lastIncomingMessages/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (res.status >= 300) {
      throw new Error(
        `Произошла ошибка при добавлении бара, код ${res.status}`,
      )
    }
    return res.json()
  }

  async getAllInputMessages() {
    const res = await fetch('https://api.green-api.com/waInstance1101821330/lastIncomingMessages/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa')
    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
          Проверьте отправляемые данные. Status: ${res.status}`)
    }
    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
            Попробуйте сделать запрос позже. Status: ${res.status}`)
    }
    return res.json()
  }

  async getAllOutputMessages() {
    const res = await fetch('https://api.green-api.com/waInstance1101821330/lastOutgoingMessages/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa')
    if (res.status >= 400 && res.status < 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
        Проверьте отправляемые данные. Status: ${res.status}`)
    }
    if (res.status >= 500) {
      throw new Error(`Произошла ошибка при получении списка cообщений.
          Попробуйте сделать запрос позже. Status: ${res.status}`)
    }
    return res.json()
  }
}

export const greenApi = new GreenApi({ signURL: 'https://api.green-api.com/waInstance1101821330' })

// {{host}}/waInstance{{idInstance}}/lastIncomingMessages/{{apiTokenInstance}}
// receiveNotification/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa

// async signIn(data) {
//   console.log(data)
//   const res = await fetch(`${this.signUrl}/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },

//     body: JSON.stringify(data),
//   })

//   if (res.status === 401) {
//     throw new Error(`Error ${res.status}: Wrong email or password`)
//   }

//   if (res.status === 404) {
//     throw new Error(`Error ${res.status}: The user with the specified email was not found`)
//   }

//   if (res.status >= 300) {
//     throw new Error(`Error ${res.status}: The "email" field must be a valid email address`)
//   }

//   return res.json()
// }

// async signUp(data) {
//   const res = await fetch(`${this.signUrl}/registration`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   if (res.status > 299) {
//     throw new Error(`Error ${res.status}: User with this email is already registered`)
//   }

//   return res.json()
// }

// async getUserByToken(token) {
//   this.checkToken(token)
//   const res = await fetch(`${this.signUrl}/auth`, {
//     headers: {
//       authorization: this.getAuthorizationHeader(token),
//     },
//   })

//   return res.json()
// }

// async editUserInfo(token, value) {
//   const res = await fetch(`${this.signUrl}/v2/sm9/users/me`, {
//     method: 'PATCH',
//     headers: {
//       authorization: `Bearer ${token}`,
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(value),
//   })
//   if (res.status === 200) {
//     toast.success('Info updated successfully!', {
//       duration: 2000,
//     })
//   }
//   return res.json()
// }

// async editUserAvatar(token, value) {
//   const res = await fetch(`${this.signUrl}/v2/sm9/users/me/avatar`, {
//     method: 'PATCH',
//     headers: {
//       authorization: `Bearer ${token}`,
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(value),
//   })

//   if (res.status === 200) {
//     toast.success('Avatar updated successfully!', {
//       duration: 2000,
//     })
//   }
//   return res.json()
// }
