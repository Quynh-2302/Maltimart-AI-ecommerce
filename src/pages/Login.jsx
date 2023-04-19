import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'

import '../styles/login.css'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate("")

  const login = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)

      setLoading(false)
      toast.success('Successfully logged in');
      navigate('/checkout');
    } catch (error) {
      setLoading(false)
      toast.error("Email or password no available")
    }
  }
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            {
              loading ?
                <Col lg='12' className='text-center'>
                  <h6 className='fw-bold'>Loading...</h6>
                </Col> :
                <Col lg='6' className='m-auto text-center'>
                  <h3 className='mb-4 fw-bold mb-4'>Login</h3>
                  <Form className='auth_form' onSubmit={login}>

                    <FormGroup className="form_group">
                      <input
                        type="email"
                        placeholder='Enter your mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup className="form_group">
                      <input type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </FormGroup>

                    <button type='submit' className='buy_btn login_btn'>Login</button>
                    <p>
                      Don't you have an account? {" "}
                      <Link to='/signup'>Create an account</Link>
                    </p>
                  </Form>
                </Col>
            }

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login