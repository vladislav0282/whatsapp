// import { useQuery } from '@tanstack/react-query'
// import { useDispatch } from 'react-redux'
// import { greenApi } from '../../../API/GreenApi'
// import { MESSAGE_OUTPUT } from '../../../redux/constants'
// import { getData } from '../../../redux/slices/dataSlice'
// import styles from './chat1.module.css'
// import { withQuery } from '../../../HOCs/withQuery'
// import { Chat1ItemOutput } from '../Chat1Item/Chat1ItemOutput'
// import { MESSAGE_OUTPUT } from '../../../redux/constants'

// function Chat1Inner({ data }) {
//   if (!data.length) {
//     return (
//       <div className={styles.emptyList}>
//         <h3>
//           Output messages not found
//           {' '}
//           <i className="bi bi-emoji-frown" />
//         </h3>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h3>Output messages</h3>
//       {data.map((msg) => (
//         <Chat1ItemOutput
//           key={msg.idMessage}
//           id={msg.idMessage}
//           chatId={msg.chatId}
//           textMessage={msg.textMessage}
//         />
//       ))}
//     </div>
//   )
// }
// const Chat1InnerWithQuery = withQuery(Chat1Inner)

export function Chat1Output() {
  // const {
  //   data, isLoading, isError, error, refetch,
  // } = useQuery({
  //   queryKey: [MESSAGE_OUTPUT],
  //   queryFn: () => greenApi.getAllOutputMessages(),
  // })
  // console.log({ data })

  return (
    <>
    </>
    // <Chat1InnerWithQuery
    //   data={data}
    //   isLoading={isLoading}
    //   isError={isError}
    //   error={error}
    //   refetch={refetch}
    // />
  )
}
