import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 text-sm mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><a href="#jobs" className="hover:underline">Browse jobs</a></li>
            <li><a href="#companies" className="hover:underline">Browse companies</a></li>
            <li><a href="#countries" className="hover:underline">Countries</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#help" className="hover:underline">Help</a></li>
            {/* <li><a href="#esg" className="hover:underline">ESG at Indeed</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#privacy" className="hover:underline">Privacy Center and Ad Choices</a></li>
            <li><a href="#terms" className="hover:underline">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Accessibility</h4>
          <ul className="space-y-1">
            <li><a href="#accessibility" className="hover:underline">Accessibility at Indeed</a></li>
            <li><a href="#language" className="hover:underline">Language: English (EN)</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center py-4">
        &copy; 2025 WorkNaija
      </div>
    </footer>
  );
}

export default Footer;
