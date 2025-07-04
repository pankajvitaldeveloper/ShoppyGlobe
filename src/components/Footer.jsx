import React from 'react'
import GitHubButton from './GitHubButton'

const Footer = () => {
  return (
   <>
    {/* Fixed GitHub link with icon on the right side */}
    <GitHubButton />
    <footer className="bg-blue-700 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <span className="text-lg font-semibold mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
        </span>
       
      </div>
    </footer>
   </>
  )
}

export default Footer