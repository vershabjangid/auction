import React from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'

export function Home() {
  return (
    <>
      <section className='main border border-1 border-danger'>
        <div className='main_inner_overlay'>
            <Header/>
            <Sidebar/>
        </div>
      </section>
    </>
  )
}
