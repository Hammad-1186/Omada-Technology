"use client";
const HeadingSection = () => {

  const faqs = [
    {
      question: "What services does NexaVista Technologies offer?",
      answer:
        "We offer a range of services, including web development, mobile app development, copywriting, digital marketing, and graphic design. Whether you're looking for a custom website, email marketing services, or brand design, we have you covered.",
    },
    {
      question: "How long does it take to complete a website development project?",
      answer:
        "The timeline for website development varies depending on the complexity of the project. On average, a simple website can take 2-4 weeks, while more complex projects can take several months. We work closely with you to establish deadlines and keep the project on track.",
    },
    {
      question: "Do you offer maintenance and support after the project is completed?",
      answer:
        "Yes! We offer ongoing maintenance and support services to ensure that your website or application runs smoothly. Our team is available for updates, troubleshooting, and any adjustments you may need.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely! We specialize in redesigning websites to modernize them with the latest technologies, improve performance, and enhance user experience. We can also add new functionalities to your existing site.",
    },
    {
      question: "How much does it cost to develop a website?",
      answer:
        "The cost of website development depends on the scope of the project, the features you need, and the complexity of the design. After an initial consultation, we will provide a detailed quote based on your specific requirements.",
    },
    {
      question: "Do you offer custom mobile app development?",
      answer:
        "Yes, we provide custom mobile app development for both iOS and Android platforms using Swift, Flutter, and React Native. Whether you need a native app or a cross-platform solution, we can help bring your app ideas to life.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries, including e-commerce, education, healthcare, finance, and more. Our expertise allows us to create tailored solutions for businesses of all sizes.",
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer:
        "Yes, we offer SEO and digital marketing services to help your website rank higher on search engines and attract more traffic. Our marketing team also specializes in email marketing, social media marketing, and content creation to boost your online presence.",
    },
    {
      question: "What is your process for working with clients?",
      answer:
        "We start with an initial consultation to understand your needs and goals. Then, we move to planning and design, where we create mockups and gather your feedback. Once the project is approved, we begin development. After thorough testing, we launch the project and provide ongoing support.",
    },
    {
      question: "How can I get started with a project at NexaVista Technologies?",
      answer:
        "Getting started is easy! You can contact us through our website's contact form, email us directly, or give us a call. We’ll schedule a consultation to discuss your needs and outline the next steps.",
    },
  ];

  return (
    <div>
      <section>
    <div className="bg-gradient-to-r from-[#371802] to-[#5a2a07] min-h-screen flex justify-center items-center">
     
          {/* Left Side */}
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-6"> Frequently Asked Question</h1>
  
     </div>
     </div>
     </section>

                  {/* Section 2 */}

                  <section>
      <div className="py-16 px-6 md:px-20" style={{ backgroundColor: "rgb(236, 228, 217)" }}>
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "rgb(63,58,52)" }}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold mb-2" style={{ color: "rgb(63,58,52)" }}>
                {faq.question}
              </h3>
              <p className="text-lg" style={{ color: "rgb(142,142,148)" }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>


     </div>
  );
};

export default HeadingSection;
