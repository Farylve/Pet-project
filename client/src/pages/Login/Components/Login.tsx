import React, { useEffect, useState } from "react"
import { Button, Form, Input } from "antd"
import styles from "./Login.module.scss"
import { useDispatch } from "react-redux"
import { loginAction } from "../Redux/actions"
import logo from "../../../static/logo.svg"

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [formState, setFormState] = useState({
    login: "",
    password: "",
  })

  const formHandler = () => {
    const { login, password } = form.getFieldsValue(["login", "password"])
    setFormState({
      login,
      password,
    })
  }

  const submitHandler = () => {
    const { login, password } = formState
    dispatch(loginAction.request({ login, password }))
  }

  return (
    <div className={styles.formWrapper}>
      <img src={logo} height="250"></img>
      <Form
        onChange={formHandler}
        onSubmitCapture={submitHandler}
        form={form}
        className={styles.form}
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          name="login"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
            <span className={styles.spanStyles}>Логин</span>
            <input className={styles.styledInput} />
        </Form.Item>

        <Form.Item
          name="password"
          // rules={[{ required: true, message: "Please input your password!" }]}
        >
            <label htmlFor='password'  className={styles.spanStyles}>Пароль</label>
            <input id='password' className={styles.styledInput} />
        </Form.Item>

        <Form.Item>
          <button className={styles.buttons} type="submit">
            Войти
          </button>
        </Form.Item>

      </Form>
    </div>
  )
}

export default Login
