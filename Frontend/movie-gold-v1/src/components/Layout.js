import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <main>
        <Outlet/> {/* This element will be replaced by the child render element  */}
    </main>
  )
}

export default Layout