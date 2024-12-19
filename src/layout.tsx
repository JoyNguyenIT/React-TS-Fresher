import { Outlet } from "react-router-dom"
import AppHeader from "components/layout/app.header"
import { useContext, useEffect } from "react"
import { fetchAccountAPI } from "./services/api"
import { useCurrentApp } from "./components/context/app.context"




function Layout() {

  const { setUser, setIsAuthenticated } = useCurrentApp()

  useEffect(() => {
    const fetchAccount = async () => {
      const res = await fetchAccountAPI()
      if (res.data) {
        setIsAuthenticated(true)
        setUser(res.data.user)
      }
    }
    fetchAccount()
  }, [])


  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}

export default Layout
