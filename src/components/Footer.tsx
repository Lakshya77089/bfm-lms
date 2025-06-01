import Image from 'next/image'
import {
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTelegram,
	IconBrandTwitter,
	IconBrandReddit,
	IconMail,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="mx-auto bg-[#09090B] px-6 py-10 text-start text-white">
			<div className="mx-auto">
				<div className="grid gap-8 md:grid-cols-12">
					{/* Left Column - Logo and Social Icons */}
					<div className="md:col-span-1">
						{/* Logo */}
						<div className="mb-8">
							<Image
								src="/black-bfm-logo.png"
								alt="Logo"
								width={50}
								height={50}
								className="mx-auto"
							/>
						</div>

						{/* Vertical Line */}
						<div className="mx-auto mb-4 mt-20 h-16 w-fit border-l border-white max-md:hidden"></div>

						{/* Social Icons */}
						<div className="flex flex-row items-center gap-0 max-md:justify-center md:flex-col md:space-y-1">
							{[
								{ href: 'https://t.me/bfmacademyy', icon: IconBrandTelegram },
								{ href: 'https://www.instagram.com/bfmacademia', icon: IconBrandInstagram },
								{ href: 'https://x.com/BFMAcademy', icon: IconBrandTwitter },
								{ href: 'https://www.reddit.com/u/BFMAcademy', icon: IconBrandReddit },
								{ href: 'https://www.linkedin.com/company/bfm-academy/', icon: IconBrandLinkedin },
							].map(({ href, icon: Icon }, idx) => (
								<Link key={idx} href={href} target="_blank">
									<Button variant="ghost" size="icon" className="group rounded-full">
										<Icon className="h-[1.2rem] w-[1.2rem] text-white" />
									</Button>
								</Link>
							))}
						</div>
					</div>

					{/* Center Column - Let's Learn Together */}
					<div className="place-content-end md:col-span-5">
						<h1 className="text-4xl font-bold uppercase tracking-tighter text-white lg:text-6xl lg:leading-[0.8]">
							<span className="text-6xl tracking-tighter lg:text-9xl lg:leading-[0.8]">
								Let&apos;s
							</span>
							<br />
							<span className="text-6xl tracking-tighter lg:text-9xl lg:leading-[0.8]">
								Learn
							</span>
							<br />
							Together
						</h1>
						<div className="hidden md:block mt-4 text-left text-xs text-gray-400">
							BFM Academy © 2025
						</div>
					</div>

					{/* Products Column */}
					<div className="md:col-span-3">
						<h2 className="mb-4 text-lg uppercase text-gray-400">Products</h2>
						<ul className="space-y-1.5 text-white">
							{[
								['https://docsend.com/v/4gtmx/bfmacademy', 'Partnership with Media Companies'],
								['/WhitePaper.pdf', 'Event Companies'],
								['/privacy-policy', 'Professors'],
								['/terms-and-conditions', 'Institutes'],
								['/terms-and-conditions', 'KOLs and Influencers'],
								['/terms-and-conditions', 'Campus Ambassadors'],
								['/terms-and-conditions', 'Startup for Payment gateway'],
								['/terms-and-conditions', 'Chains'],
								['/terms-and-conditions', 'AI'],
								['/terms-and-conditions', 'Games'],
							].map(([href, label], i) => (
								<li key={i}>
									<a
										href={href}
										target="_blank"
										className="transition-all hover:text-gray-300"
									>
										{label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Column */}
					<div className="md:col-span-3">
						<h2 className="mb-1 mt-6 text-lg uppercase text-gray-400">
							Contact Us
						</h2>
						<p className="text-white">support@bfmacademy.in</p>
						<div className="mt-2 flex flex-row items-center gap-2">
							<Button className="group rounded-full bg-white px-8 text-black transition-all hover:bg-gray-200">
								<IconMail
									className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
									size={24}
								/>
								<a
									href="mailto:support@bfmacademy.in"
									className="translate-x-[-12px] transition-all group-hover:translate-x-0"
								>
									Contact us
								</a>
							</Button>
						</div>
						<div className="block md:hidden mt-4 text-left text-xs text-gray-400">
							BFM Academy © 2025
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
