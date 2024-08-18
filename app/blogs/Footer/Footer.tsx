import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="py-20 px-10 tablet:px-20 w-full bg-white font-light text-lightGray3 tracking-wider text-[13px] flex flex-col gap-[30px] justify-between items-center  tablet2:flex-row">
            <p className="text-center">Density Exchange Blogs || Bitcoin & Crypto Trading © 2024</p>
            <nav>
                <ul className="flex">
                    <li className="hover:text-black text-center"><Link href="https://density.exchange/" target="_blank">Homepage</Link></li>
                    <li className="hover:text-black before:px-[1.2rem] text-center"><Link href="https://app.density.exchange/" target="_blank">Trade Now</Link></li>
                    <li className="hover:text-black before:px-[1.2rem] text-center"><Link href="mailto:hello@density.exchange">Contact Us</Link></li>
                </ul>
            </nav>
        </footer>
  )
}

export default Footer
