import {
    ShoppingBag,
    Clock,
    RotateCcw,
} from "lucide-react";
import Image from "../assets/african.jpeg"

const About = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 py-16">


            {/* Our Story */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h1 className="text-4xl font-bold mb-6">Our Story</h1>
                    <div className="space-y-5 text-gray-700">
                        <p>
                            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Nepal...
                        </p>
                        <p>
                            Exclusive has more than 1 million products to offer, growing at a very fast rate...
                        </p>
                    </div>
                </div>
                <div className="relative h-[400px]">
                    <img
                        src={Image}
                        alt="Women with shopping bags"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {[10.5, 33, 45.5, 25].map((value, index) => (
                    <div key={index} className="border rounded-lg p-6 flex flex-col items-center text-center bg-white shadow-md">
                        <div className="bg-gray-100 p-3 rounded-full mb-3">
                            <ShoppingBag className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold">{value}k</h3>
                        <p className="text-sm text-gray-600">{["Sellers active on site", "Monthly product sale", "Customer active in our site", "Annual gross sale in our site"][index]}</p>
                    </div>
                ))}
            </div>

            {/* Team Section */}
            {/* <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ name: "Ayush Bajagain", role: "Founder & Chairman, Programmer" }, { name: "Ujwal Poudel", role: "Managing Director, Programmer" }, { name: "Manish Rai", role: "Product Designer, UI/UX Designer" }].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4 h-80 relative">
                  <img src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-programmer-it-developer-png-image_13520483.png" alt={member.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <div className="flex space-x-3">
                  {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <button key={i} className="p-2 text-gray-600 hover:text-gray-900">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: <ShoppingBag className="w-6 h-6" />, title: "Free and fast delivery", desc: "Free delivery for all orders over Rs.200" },
                    { icon: <Clock className="w-6 h-6" />, title: "24/7 customer service", desc: "Friendly 24/7 customer support" },
                    { icon: <RotateCcw className="w-6 h-6" />, title: "Money back guarantee", desc: "We return money within 30 days" }
                ].map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
                        <div className="bg-gray-100 p-4 rounded-full mb-4">{service.icon}</div>
                        <h3 className="text-lg font-bold uppercase mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
