// export function Chat1ItemOutput({ idMessage }) {
//   const {
//     data, isLoading,
//     isError,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: [REVIEWS, idMessage],
//     queryFn: () => dogFoodApi.getRewiewsByProductId(id),

//   })

//   if (isLoading) return <p>Загружается</p>
//   if (isError) {
//     return (
//       <div className="d-flex flex-column justify-content-center">

//         <p>
//           Error happend:
//           {' '}
//           {error.message}
//         </p>

//         <button
//           onClick={refetch}
//           type="button"
//           className="btn btn-primary"
//         >
//           Refetch
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div>
//       {textMessage}
//     </div>
//   )
// }

export function Chat1ItemOutput({
  textMessage,
}) {
  return (
    <div>
      <h1> Output messages</h1>
      {textMessage}
    </div>
  )
}
