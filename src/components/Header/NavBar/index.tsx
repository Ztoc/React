import React, { useState } from 'react'
import { Nav, Row, Col } from 'react-bootstrap'
import Product from './product'

type Props = {
  links: string[]
}

const NavBar = ({ links }: Props) => {
  const [isShow, setShow] = useState(false)
  const [kind, setKind] = useState('')
  return (
    <div>
      <Nav
        className="position-relative"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        {links.map((item) => {
          return (
            <Nav.Item>
              <Nav.Link
                href="#"
                id={item}
                className="text-dark"
                onMouseEnter={() => {
                  const ele = document.getElementById(item)
                  console.log(ele)
                  ele?.classList.add('border-bottom')
                  setShow(true)
                  setKind(item)
                }}
                onMouseLeave={() => {
                  const ele = document.getElementById(item)
                  console.log(ele)
                  ele?.classList.remove('border-bottom')
                  setShow(false)
                }}
              >
                {item}
              </Nav.Link>
            </Nav.Item>
          )
        })}
      </Nav>
      <Product isShow={isShow} kind={kind} />
    </div>
  )
}

export default NavBar
