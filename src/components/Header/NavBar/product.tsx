import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './product.scss'

type Props = {
  isShow: boolean
  kind: string
}

function Product({ isShow, kind }: Props) {
  return (
    <div className={isShow ? 'd-block product' : 'd-none'}>
      <Row>
        <Col>
          <h2>{kind}</h2>
        </Col>
        <Col>TYpe</Col>
      </Row>
    </div>
  )
}

export default Product
