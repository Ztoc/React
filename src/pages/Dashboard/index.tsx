import React, { useState } from 'react'
import Header from '../../components/Header'
import {
  Row,
  Col,
  Form,
  Stack,
  ButtonGroup,
  ToggleButton,
} from 'react-bootstrap'
import Filter from '../../components/Filter'
import Products from '../../components/Products'

const Dashboard = () => {
  const [isActive, setActive] = useState(true)
  const selectedStyle = {
    style: {
      grid: isActive ? { opacity: '1' } : { opacity: '0.5' },
      small: !isActive ? { opacity: '1' } : { opacity: '0.5' },
    },
  }

  const filters = ['CLOTH', 'GLASS', 'SHOES', 'TROUSER']
  return (
    <div>
      <Header />
      <Row className="mt-5">
        <Col lg={3}>
          <Filter filters={filters} />
        </Col>
        <Col lg={9}>
          <h1>Various Products</h1>
          <Row>
            <Col lg={8}>
              <h5>Products</h5>
            </Col>
            <Col ms="auto">
              <Stack direction="horizontal" gap={3}>
                <Form.Select aria-label="Default select example">
                  <option value="1">Price</option>
                  <option value="2">Title</option>
                </Form.Select>
                <div className="vr" />
                <ButtonGroup>
                  <ToggleButton
                    type="radio"
                    variant="white"
                    onClick={(e) => setActive(true)}
                    name="radio"
                    value="d"
                    style={selectedStyle.style.grid}
                    onChange={(e) => setActive(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-grid-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                    </svg>
                  </ToggleButton>
                  <ToggleButton
                    type="radio"
                    variant="white"
                    name="white"
                    value="d"
                    onClick={(e) => setActive(false)}
                    style={selectedStyle.style.small}
                    onChange={(e) => console.log('ddd')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-grid-3x3-gap-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                    </svg>
                  </ToggleButton>
                </ButtonGroup>
              </Stack>
            </Col>
          </Row>

          <Products></Products>

        </Col>
      </Row>
    </div>
  )
}
export default Dashboard
