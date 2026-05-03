import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaFileContract, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "الشروط والأحكام | ELZAEEM INTERNATIONAL",
  description:
    "الشروط والأحكام لاستخدام موقع وخدمات مركز الزعيم الدولي لكماليات السيارات والطباعة والدعاية في مصر",
  keywords: ["شروط وأحكام", "مركز الزعيم الدولي", "كماليات سيارات", "طباعة دعاية"],
  openGraph: {
    title: "الشروط والأحكام | ELZAEEM INTERNATIONAL",
    description:
      "شروط وأحكام استخدام موقع وخدمات مركز الزعيم الدولي لكماليات السيارات والطباعة والدعاية",
    type: "website",
  },
};

const termsSections = [
  {
    title: "۱. قبول الشروط",
    content: `باستخدامك لموقع ELZAEEM INTERNATIONAL أو الحصول على خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا أو خدماتنا.`,
  },
  {
    title: "۲. الخدمات المقدمة",
    content: `يقدم مركز الزعيم الدولي خدمات كماليات السيارات (شاشات، ليدات، أفلام حماية، فاميه، أنظمة صوتية، فرش سيارات) وخدمات الطباعة والدعاية (واجهات كلادينج، استيكرات، بنرات، رول أب، لوحات، بوسترات). نحتفظ بالحق في تعديل أو إيقاف أي خدمة في أي وقت.`,
  },
  {
    title: "۳. أسعار ومدفوعات",
    content: `الأسعار المعروضة على الموقع أو المقدمة في عروض الأسعار قابلة للتغيير دون إخطار مسبق. تتم المدفوعات نقداً أو عبر وسائل الدفع المتفق عليها. يتطلب بعض الخدمات دفع عربون قبل البدء في التنفيذ.`,
  },
  {
    title: "٤. مدة التنفيذ والضمان",
    content: `نلتزم بذكر مدة التنفيذ المتوقعة لكل خدمة. تقدم الشركة ضماناً على الخدمات كالتالي: أفلام الحماية والليدات (سنة كاملة)، الشاشات (۶ شهور)، الطباعة (ضمان ضد عيوب التصنيع). الضمان لا يشمل الأضرار الناتجة عن سوء الاستخدام أو الحوادث.`,
  },
  {
    title: "۵. مسؤولية العميل",
    content: `يجب على العميل التأكد من صحة البيانات والمقاييس المقدمة. العميل مسؤول عن الحصول على التراخيص اللازمة لأي إعلانات أو لوحات خارجية. نحن غير مسؤولين عن أي تأخير ناتج عن عدم استجابة العميل أو تقديم بيانات غير دقيقة.`,
  },
  {
    title: "٦. الملكية الفكرية",
    content: `جميع المحتويات على هذا الموقع (النصوص، الصور، التصاميم، الشعارات) هي ملك لمركز الزعيم الدولي ومحمية بقوانين الملكية الفكرية. يمنع نسخ أو إعادة استخدام أي محتوى دون إذن كتابي مسبق.`,
  },
  {
    title: "۷. إخلاء المسؤولية",
    content: `نبذل قصارى جهدنا لضمان دقة المعلومات على الموقع، لكننا لا نضمن خلوها من الأخطاء. الموقع والخدمات تقدم "كما هي" دون أي ضمانات أخرى سواء صريحة أو ضمنية.`,
  },
  {
    title: "۸. تعديل الشروط",
    content: `نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر الشروط المحدثة على الموقع، وهي ستصبح سارية فور النشر. استمرارك في استخدام الموقع بعد التعديل يعني قبولك للشروط الجديدة.`,
  },
  {
    title: "۹. القانون الواجب التطبيق",
    content: `تخضع هذه الشروط وتفسر وفقاً لقوانين جمهورية مصر العربية. أي نزاع ينشأ عن استخدام الموقع أو الخدمات سيكون ضمن اختصاص محاكم القاهرة الجديدة.`,
  },
  {
    title: "۱۰. معلومات التواصل",
    content: `لأي استفسارات حول هذه الشروط، يرجى التواصل معنا عبر:
الهاتف: 01067894321
العنوان: دار السلام، شارع الفيوم، القاهرة، مصر
واتساب: عبر الزر الموجود في الموقع`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-foreground">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6">
              <FaFileContract size={36} className="text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              الشروط والأحكام
            </h1>
            <p className="text-gray-300 text-lg">
              يرجى قراءة هذه الشروط بعناية قبل استخدام موقعنا أو الحصول على خدماتنا
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
            <p className="text-gray-400 text-sm mt-4">
              آخر تحديث: ٢ مايو ٢٠٢٦
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {termsSections.map((section, index) => (
              <div
                key={index}
                className="bg-dark-gray rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gold mb-4 flex items-center gap-3">
                  <FaCheckCircle className="text-gold/60" />
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-dark-gray to-medium-gray rounded-2xl p-8 border border-gold/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              هل لديك أسئلة حول الشروط؟
            </h3>
            <p className="text-gray-300 mb-6">
              فريقنا جاهز للإجابة على استفساراتك في أي وقت
            </p>
            <a
              href="tel:+201067894321"
              className="inline-flex items-center gap-2 bg-gold text-dark-bg px-8 py-3 rounded-lg font-bold hover:bg-gold/90 transition-colors"
            >
              <FaFileContract />
              تواصل معنا: 01067894321
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
