import React from 'react'
import { Form } from 'react-bootstrap'

type Props = {
  filters: string[]
}

const Filter = ({ filters }: Props) => {
  return (
    <div>
      <Form>
        {filters.map((item, index) => {
          return (
            <div className="mb-3" key={index}>
              <Form.Check type="checkbox" label={item} />
            </div>
          )
        })}
      </Form>
    </div>
  )
}

export default Filter
