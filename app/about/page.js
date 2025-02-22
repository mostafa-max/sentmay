"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div dir="rtl" className="relative z-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero2.webp"
            alt="خلفية صفحة عن سنتماي"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-100/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              عن <span className="text-primary">موقع سَنتِمَاي</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              منصة رقمية تهدف إلى توثيق وتسليط الضوء على قرية سنتماي، التابعة لمركز ميت غمر بمحافظة الدقهلية، من خلال عرض تاريخها، معالمها، الشخصيات المؤثرة فيها، المساجد، الأسواق، الحرف التقليدية، والمتاجر المحلية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">رؤيتنا</h2>
          <p className="text-lg text-base-content/80 mb-8">
            نطمح إلى توثيق وإبراز هوية قرية سنتماي، والتعريف بأهم معالمها التاريخية والثقافية، مع تقديم دليل شامل لمحلاتها التجارية وأسواقها وحرفها اليدوية التي تمثل جزءًا من تراثها العريق.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">ساهم في توثيق تاريخ سنتماي</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            هل لديك معلومات عن سنتماي؟ هل تمتلك صورًا أو تفاصيل عن أماكنها ومعالمها؟ ساعدنا في توثيق تراثها ونشره ليصل إلى الجميع.
          </p>
          <Link href="/#forms">
          <button className="btn btn-primary btn-lg">
            أضف معلومات جديدة
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
