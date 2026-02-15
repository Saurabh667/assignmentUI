import React from 'react'
import heroImage from "../assets/hero.png";
import doctorImg from "../assets/doctor.jpg"
import { ClipboardList, Database, UserPlus, BookOpen,Twitter, Facebook, Linkedin, Mail,Star } from "lucide-react";

const Home = () => {
   const features = [
    {
      icon: <ClipboardList size={40} />,
      title: "Automated Diet Charting",
      desc: "Generate personalized Ayurvedic diet charts instantly using AI-powered recommendations.",
    },
    {
      icon: <Database size={40} />,
      title: "8000+ Food Database",
      desc: "Access a comprehensive Ayurveda-compliant food database for accurate nutrition planning.",
    },
    {
      icon: <UserPlus size={40} />,
      title: "Patient Management",
      desc: "Easily manage patient profiles, history, and diet plans in one place.",
    },
    // {
    //   icon: <BookOpen size={40} />,
    //   title: "Recipe-Based Analysis",
    //   desc: "Analyze recipes and get smart nutritional breakdowns tailored to Ayurveda.",
    // },
  ];
  const steps = [
    {
      number: "01",
      title: "Add Patient Info",
      image:
        "https://www.creativefabrica.com/wp-content/uploads/2022/01/25/Medical-Patient-Vector-Concept-Color-Graphics-24072286-1.jpg",
    },
    {
      number: "02",
      title: "Select Foods & Preferences",
      image:
        "https://cdn.vectorstock.com/i/preview-1x/54/45/macronutrient-food-guide-circle-of-nutritional-vector-48965445.jpg",
    },
    {
      number: "03",
      title: "Generate Diet Plan",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "04",
      title: "Share / Download Report",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.59TucVZrq4WRbxhW9HnVVwHaE7?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];
  const doctors = [
    {
      name: "Dr. Aisha Sharma",
      role: "Orthopaedic Surgeon",
      desc: "Dietitians guide healthy eating, balancing nutrition for lifelong wellness.",
      image: doctorImg,
    },
    {
      name: "Dr. Meera Kapoor",
      role: "Clinical Dietitian",
      desc: "Specialized in personalized diet planning and preventive healthcare.",
      image: doctorImg,
    },
    {
      name: "Dr. Riya Patel",
      role: "Nutrition Specialist",
      desc: "Focused on holistic and Ayurveda-compliant nutrition solutions.",
      image: doctorImg,
    },
  ];
  const testimonials = [
    {
      name: "Dr. Arjun Mehta",
      role: "Ayurvedic Practitioner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "This platform has transformed how I create personalized diet plans. It saves time and ensures accuracy in every recommendation.",
    },
    {
      name: "Dr. Neha Sharma",
      role: "Clinical Dietitian",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "The AI-powered diet generation is incredibly efficient. My patients love the structured and easy-to-follow plans.",
    },
    {
      name: "Dr. Rohan Kapoor",
      role: "Nutrition Specialist",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      review:
        "Managing patient data and generating reports has never been easier. A must-have tool for healthcare professionals.",
    },
  ];
  return (
    <>
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
            Personalized <br />
            Ayurvedic Diets, <br />
            Simplified
          </h1>

          <p className="mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl">
            An AI-powered platform for doctors, dietitians, and patients to create 
            accurate, Ayurveda-compliant diet chart instantly.
          </p>

          <button className="mt-8 px-8 py-4 bg-green-800 text-white text-xl font-semibold rounded-xl hover:bg-green-900 transition duration-300 shadow-md">
            Get Started
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Doctor and Patient"
            className="w-full lg:w-[650px] rounded-2xl"
          />
        </div>

      </div>
    </section>
    <section className="bg-gray-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Key Features
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful tools designed for doctors, dietitians, and healthcare professionals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-6 group-hover:bg-green-700 group-hover:text-white transition duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Simple 4-step process to generate personalized Ayurvedic diet plans.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-lg">
                  {step.number}
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Doctors / Dietitians
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Meet our expert medical professionals
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-72 object-fill group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {doc.name}
                </h3>

                <p className="text-green-600 font-medium mt-2">
                  {doc.role}
                </p>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {doc.desc}
                </p>

                <div className="flex justify-center gap-4 mt-6 text-gray-500">
                  <Twitter className="w-5 h-5 hover:text-green-600 cursor-pointer transition" />
                  <Facebook className="w-5 h-5 hover:text-green-600 cursor-pointer transition" />
                  <Linkedin className="w-5 h-5 hover:text-green-600 cursor-pointer transition" />
                  <Mail className="w-5 h-5 hover:text-green-600 cursor-pointer transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-gray-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Testimonials
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            What our medical professionals say
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-green-100"
              />

              <h3 className="mt-5 text-xl font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-green-600 text-sm font-medium mt-1">
                {item.role}
              </p>

              <div className="flex justify-center mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default Home
