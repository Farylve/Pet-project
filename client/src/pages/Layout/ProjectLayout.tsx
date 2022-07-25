import { Breadcrumb, Layout, Menu, MenuProps } from "antd"
import React, { FC, useEffect, useState } from "react"
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}))

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`,
      }
    }),
  }
})

export const ProjectLayout: FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("authorize")
  const location = useLocation()

  useEffect(()=> {
    if (location.pathname === "/") {
      console.log("navigate main")
  
      navigate("/main")
    }
  }, [])

  const [isLogin, setIsLogin] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  return isLogin ? (
    <Layout style={{height: '100vh'}} >
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
           {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ) : (
    <> {children} </>
  )
}
