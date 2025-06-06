'use client'
import React from 'react'
import Footer from '../../../components/library/Footer'
import BookSection from '@/components/library/books/BookSection'
import PopularAuthors from '@/components/library/books/PopularAuthors'

const Page = () => {
  return (
    <div className="bg-white text-black">
      {/* Book Section */}
      <BookSection/>
      {/* Popular Authors */}
      <PopularAuthors/>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page
