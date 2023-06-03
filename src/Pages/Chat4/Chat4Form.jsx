/* eslint-disable max-len */
import { useMutation } from '@tanstack/react-query'
// import { useState } from 'react'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import { createReviewsFormValidationSchema } from '../helpers/validatorReviews'

function Chat4Form() {
  // const [inputValue, setInputValue] = useState('')

  const initialValues = {
    chatId: '79252826386@c.us',
    message: '',
  }

  // const tel = '79252826386@c.us'

  // const handleChange = (e) => {
  //   setInputValue(e.target.value)
  // }

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (value) => fetch('https://api.green-api.com/waInstance1101821330/sendMessage/41440d345aad43adbfb8c90da398a7d36d159eaa5a134fa8aa', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(value),
    }).then((res) => res.json()),
  })

  const handleSubmit = async (value) => {
    await mutateAsync(value)
    console.log({ value })
    // setInputValue('')
  }

  // queryClient.invalidateQueries({
  //   queryKey: [MESSAGE_3],
  // })

  return (

    <Formik
      initialValues={initialValues}
      validatorSchema={createReviewsFormValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="d-flex flex-row">
        <Field
          className="form-control"
          style={{ width: '300px', margin: '4px auto' }}
          name="message"
          type="text"
          placeholder="...текст"
        />
        <ErrorMessage component="p" className="error" name="text" />
        <button className="btn btn-success py-0 px-1 m-1" disabled={isLoading} type="submit">Отправить</button>
      </Form>
    </Formik>

  // <form onSubmit={handleSubmit}>
  //   <input type="text" value={tel} placeholder={tel} />
  //   <input type="text" value={inputValue} onChange={handleChange} placeholder="...text" />
  //   <button type="submit">Отправить</button>

  // </form>
  )
}

export default Chat4Form
