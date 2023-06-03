import { Chat2Form } from './Chat2Form'
import productDeteilStyle from './productDeteilStyle.module.css'
import { Chat2Output } from './Chat2Output/Chat2Output'
import { Chat2Input } from './Chat2Input/Chat2Input'

export function Chat2() {
  return (
    <div className={productDeteilStyle.cardLeft}>
      <div>
        <Chat2Output />
        <Chat2Input />
      </div>
      <div className="d-flex flex-derection-row justify-content-center">
        <h5 className="p-1 m-1">
          Написать сообщение
          {' '}
          {/* {reviewsCount} */}
        </h5>
      </div>
      <div>
        <Chat2Form />
      </div>
    </div>

  )
}
