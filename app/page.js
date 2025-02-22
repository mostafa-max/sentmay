"use client";
import { motion } from "motion/react";
import { FiMapPin, FiUsers, FiHome, FiStar, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const googleForms = [
  {
    name: "استبيان المساجد",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeVYAEYOAcmRoOCaV5rIegu4AslOWOHVXdLYOes-559Z0eZtg/viewform?usp=header",
    description: "شاركنا بصورة جميلة و نبذة تاريخية للمسجد القريب منك و ممكن تضيف الاحتياجات اللازمة للمسجد"
  },
  {
    name: "استبيان المحلات",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd_lArpYfDIFjaXNMvSTB8xGXz1hawti3y18Y1e0x9vLzcWzw/viewform?usp=preview",
    description: "لو عندك أي محل أو مشروع أو صالة ألعاب رياضية تقدر تساعد لناس توصلك بطريقة أسهل "
  },
  {
    name: "استبيان المحترفين",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdBGr71xc7iVu7NkwWckui4DEKntf9kFevb0wmty-Oy4ONYuQ/viewform?usp=header",
    description: "لو متمكن من أي مهنة أو وظيفة شارك بياناتك وخبراتك ,لسهولة التواصل "
  },
  {
    name: "استبيان أبرز الشخصيات",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdazpKHdD7tRKl1wRCd4evvvfcC50I-LSaGx6n-7CDJzvUeGw/viewform?usp=header",
    description: "شاركنا بمعلومات دقيقة عن أبرز الشخصيات واجعلها قصة ملهمة للأجيال القادمة"
  },
  {
    name: "استبيان المنشآت",
    link: "https://forms.gle/your-form-link-3",
    description: "شارك في توفير معلومات عن المدارس بأنوعها والحضانات والأماكن الخدمية زي الوحدة الصحية وغيره"
  }
];

const HomePage = () => {
  const features = [
    {
      icon: <FiMapPin />,
      title: "موقع متميز",
      description: "تقع قرية سنتماي في مركز ميت غمر بمحافظة الدقهلية"
    },
    {
      icon: <FiUsers />,
      title: "شخصيات بارزة",
      description: "تضم القرية العديد من الشخصيات المؤثرة في مختلف المجالات"
    },
    {
      icon: <FiHome />,
      title: "معالم بارزة",
      description: "تحتوي القرية على أماكن تاريخية تعكس هويتها الثقافية"
    },
    {
      icon: <FiStar />,
      title: "حرف وصناعات",
      description: "تشتهر سنتماي بالحرف اليدوية والصناعات التقليدية"
    }
  ];

  const villageDetails = {
    name: "قرية سنتماي",
    description:
      "تعد قرية سنتماي من القرى العريقة التابعة لمركز ميت غمر بمحافظة الدقهلية، حيث تمتلك تاريخًا غنيًا وتراثًا ثقافيًا متنوعًا. تشتهر القرية بالزراعة وبعض الحرف التقليدية، وتضم العديد من الشخصيات البارزة في مجالات مختلفة.",
    image: "/hero.webp"
  };

  return (
    
    <div dir="rtl" className="relative z-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero2.webp"
            alt="خلفية قرية سنتماي"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-200/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              اكتشف <span className="text-primary">قرية سنتماي</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              تعرف على تاريخ وتراث قرية سنتماي التابعة لمركز ميت غمر بمحافظة الدقهلية
            </p>
            <Link href="/#forms">
          <button className="btn btn-primary btn-lg">
            أضف معلومات جديدة
          </button>
          </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false, amount:0.3 }}
              className="bg-base-200 p-6 rounded-xl text-center"
            >
              <div className="text-primary text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-base-content/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Village Section */}
      <section className="bg-base-200/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">تعرف على قرية سنتماي</h2>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-base-100 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto"
          >
            <div className="relative h-80">
              <Image
                src={villageDetails.image}
                alt={villageDetails.name}
                fill
                className="object-cover"
              
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{villageDetails.name}</h3>
              <p className="text-base-content/80 mb-4">{villageDetails.description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">ساهم معنا في توثيق تاريخ سنتماي</h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            هل لديك معلومات أو صور عن سنتماي؟ ساعدنا في حفظ تراثها عبر إضافة محتوى جديد.
          </p>
        
        </div>
      </section>
      {/* Google Forms Section */}
      <section id="forms" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">شارك في استبياناتنا</h2>
        <p className="text-xl text-center mb-12">نرحب بمشاركتك في استبياناتنا لمساعدتنا في تحسين خدماتنا وتوثيق تاريخنا.</p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {googleForms.map((form, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false, amount:0.3 }}
              className="bg-base-200 p-6 rounded-xl text-center min-w-[250px] flex-1 max-w-[300px] shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{form.name}</h3>
              <p className="text-base-content/80 mb-4">{form.description}</p>
              <a
                href={form.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-primary text-lg font-medium"
              >
                <FiExternalLink className="w-5 h-5 mr-2" />
                املأ الاستبيان
              </a>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
