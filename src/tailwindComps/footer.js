import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <p>Telephone: 073-3301026</p>
          <p>Email: bilcenterochservice@hotmail.com</p>
          <p>Address: Gamla vägen 69, Kalmar, Trekanten, 388 40</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <a href="https://www.google.com/maps/place/Bilcenter+Trekanten+AB/@56.7014177,16.1085175,17z/data=!3m1!4b1!4m6!3m5!1s0x4657c96a149deb79:0x28550d4052b09f27!8m2!3d56.7014177!4d16.1110924!16s%2Fg%2F11ry77f49m?entry=ttu" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <a href="https://www.blocket.se/butik/bilcenter-trekanten" target="_blank" rel="noopener noreferrer">Blocket</a>
          <div>
          <a href="https://www.bytbil.com/handlare/bilcenter-trekanten-ab-7619" target="_blank" rel="noopener noreferrer">Bytbil</a>
          </div>
          <div>
          <a href="https://www.klicket.se/handlare/bilcenter_trekanten_ab_24928/" target="_blank" rel="noopener noreferrer">Klicket</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
