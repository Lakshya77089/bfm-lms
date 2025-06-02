'use client';
import React, { useState } from 'react';
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu } from 'lucide-react'
import { ConnectButton } from 'thirdweb/react'
import { client } from '../../actions/wallet'
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const welcomeScreen = {
		title: 'BFM Academy',
		subtitle: 'where web3 wizards are made',
		img: {
			width: 200,
			height: 200,
		},
	}
  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-2 md:ml-10">
          <img src="/blue_bfm_logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-2xl text-black font-bold">academy</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          <a href="/login" className="mr-4 text-blue-700">Log in</a>
          <button className="bg-blue-700 text-white rounded px-4 py-2">
            <a href="/register" className="flex items-center">
              <span>Sign up</span>
            </a>
          </button>
          <Suspense
					fallback={
						<Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
							<span className="translate-x-[12px] transition-all group-hover:translate-x-0">
								Enroll Now
							</span>
							<ArrowRight
								className="relative right-12 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
								size={24}
							/>
						</Button>
					}
				>
					<div className="bg-white border-2 border-blue-700 rounded scale-80"> 
  <ConnectButton
    client={client}
    connectButton={{
      label: 'Connect Wallet',
      className: 'connect-wallet',
    }}
    connectModal={{
      title: 'Get started with BFMAcademy',
      titleIcon: '/page/logo-blue.png',
      privacyPolicyUrl: 'https://www.bfmacademy.in/privacy-policy',
      size: 'wide',
    }}
  />
</div>
				</Suspense>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700 focus:outline-none">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          <button className="bg-blue-700 text-white rounded px-4 py-2">
          <a href="/login">Log in</a>
          </button>
          <button className="bg-blue-700 text-white rounded px-4 py-2">
            <a href="/register" className="flex items-center justify-center">
              <span>Sign up</span>
            </a>
          </button>
          <button className="border border-blue-700 text-blue-700 font-bold py-2 px-4 rounded">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
