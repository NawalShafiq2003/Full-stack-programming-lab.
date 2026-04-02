import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="font-sans">
            <div className="text-xs text-blue-500 mb-6">
                <Link to="/">Home</Link> &gt; <span className="text-gray-500 text-sm">About Us</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">About Us</h2>

            <div className="bg-gray-100 p-8 rounded-sm mb-12">
                <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-200 p-2 rounded-sm">Welcome to the Company</h3>
                <div className="flex gap-6 mb-8 text-sm text-gray-600 leading-relaxed px-2">
                    <div className="w-2/3">
                        <p className="mb-4">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                    </div>
                    <div className="w-1/3">
                         <img src={`https://via.placeholder.com/300x200/e2e8f0/000?text=Company`} alt="Company" className="w-full h-auto rounded-sm" />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-200 p-2 rounded-sm">Our Company members</h3>
                <p className="text-sm text-gray-600 mb-6 px-2">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                
                <div className="grid grid-cols-4 gap-6 text-center">
                    {[
                         { name: 'Jennifer lawrence', title: 'Business Consultant', img: 'https://via.placeholder.com/200x200/e2e8f0/000?text=Photo+1' },
                         { name: 'Jennifer lawrence', title: 'Business Consultant', img: 'https://via.placeholder.com/200x200/e2e8f0/000?text=Photo+2' },
                         { name: 'Jennifer lawrence', title: 'Business Consultant', img: 'https://via.placeholder.com/200x200/e2e8f0/000?text=Photo+3' },
                         { name: 'Jennifer lawrence', title: 'Business Consultant', img: 'https://via.placeholder.com/200x200/e2e8f0/000?text=Photo+4' },
                    ].map((member, idx) => (
                         <div key={idx} className="bg-white border text-center p-4">
                             <img src={member.img} alt={member.name} className="w-full h-auto rounded-sm mb-4" />
                             <h4 className="font-bold text-gray-800 text-sm mb-1">{member.name}</h4>
                             <div className="text-xs text-gray-500 mb-2">{member.title}</div>
                             <p className="text-[10px] text-gray-400">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor</p>
                         </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;