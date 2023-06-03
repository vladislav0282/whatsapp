/* eslint-disable max-len */
import { NavLink } from 'react-router-dom'

// import { useMutation } from '@tanstack/react-query'
// import { Chat1 } from '../../Pages/Chat1/Chat1'

// function Main() {
//   const initialValues = {
//     chatId: '79252826386@c.us',
//   }
//   const { mutateAsync, isLoading } = useMutation({
//     mutationFn: (values) => fetch('https://api.green-api.com/waInstance1101821330/getChatHistory/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     }).then((res) => {
//       console.log({ res })
//       // dispatch(getIdMessage(res))
//     }),
//   })
//   const submitHandler = async (values) => {
//     await mutateAsync(values)
//     // queryClient.invalidateQueries('hhhh')
//   }

//   return (

//     <button className="btn btn-success py-0 px-1 m-1" value={initialValues} onSubmit={submitHandler} disabled={isLoading} type="submit">Отправить</button>

//   )
// }

function Main() {
  return (
    <NavLink to="messages">

      Go to Chat1

    </NavLink>
  )
}
export default Main
