import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | ELZAEEM INTERNATIONAL",
  description:
    "سياسة الخصوصية لمركز الزعيم الدولي لكماليات السيارات والطباعة والدعاية - كيف نجمع ونستخدم ونحمي بياناتك الشخصية",
  keywords: ["سياسة الخصوصية", "حماية البيانات", "مركز الزعيم الدولي", "كماليات سيارات"],
  openGraph: {
    title: "سياسة الخصوصية | ELZAEEM INTERNATIONAL",
    description:
      "سياسة خصوصية مركز الزعيم الدولي لحماية بياناتك الشخصية",
    type: "website",
  },
};

const privacySections = [
  {
    title: "۱. المعلومات التي نجمعها",
    content: `نقوم بجمع المعلومات التالية عند استخدامك لموقعنا أو خدماتنا:
• البيانات الشخصية: الاسم، رقم الهاتف، البريد الإلكتروني (إذا توفر)
• بيانات الطلب: نوع الخدمة المطلوبة، تفاصيل المشروع، الصور المرفقة
• بيانات الجهاز: نوع المتصفح، نظام التشغيل، عنوان IP
• بيانات الاستخدام: الصفحات التي تزورها، الوقت المستغرق، من أين أتيت للموقع
• عبر واتساب: رقم الهاتف، الرسائل، الصور والفيديوهات المرسلة`,
  },
  {
    title: "۲. كيف نستخدم معلوماتك",
    content: `نستخدم المعلومات التي نجمعها للأغراض التالية:
• تقديم عروض أسعار دقيقة للخدمات المطلوبة
• التواصل معك بخصوص طلبك وحالة التنفيذ
• تحسين جودة خدماتنا وتجربة المستخدم على الموقع
• إرسال عروض وخصومات (فقط إذا وافقت على ذلك)
• الامتثال للالتزامات القانونية وحماية حقوقنا`,
  },
  {
    title: "۳. حماية البيانات",
    content: `نحن نأخذ أمن بياناتك بجدية تامة. نستخدم إجراءات أمنية فنية وإدارية لحماية معلوماتك من الوصول غير المصرح به، التغيير، الإفصاح أو الإتلاف. تشمل هذه الإجراءات:
• تشفير البيانات أثناء النقل عبر بروتوكول HTTPS
• حماية الخوادم بجدران الحماية وتحديثات الأمان المستمرة
• تقييد الوصول للمعلومات الشخصية للموظفين المخولين فقط
• تخزين البيانات في بيئات آمنة ومحمية`,
  },
  {
    title: "۴. مشاركة البيانات مع أطراف ثالثة",
    content: `نحن لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك المحدودة فقط في الحالات التالية:
• مزودي الخدمات (مثل خدمات الاستضافة، التحليلات) الذين يساعدونا في تشغيل الموقع
• السلطات القانونية عند تلقي طلب رسمي بموجب القانون
• في حالة اندماج أو استحواذ على الشركة، حيث تنتقل البيانات للكيان الجديد
جميع الأطراف الثالثة ملزمة باتفاقيات سرية صارمة.`,
  },
  {
    title: "۵. ملفات تعريف الارتباط (Cookies)",
    content: `يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتحسين تجربتك:
• ملفات ضرورية: لضمان عمل الموقع بصورة سليمة
• ملفات تحليلية: لفهم كيفية استخدام الموقع (عبر Google Analytics)
• ملفات الوظائف: لتذكر تفضيلاتك وتحسين الأداء
يمكنك التحكم في ملفات تعريف الارتباط عبر إعدادات المتصفح، لكن تعطيلها قد يؤثر على بعض وظائف الموقع.`,
  },
  {
    title: "۶. حقوقك في بياناتك",
    content: `بناءً على قوانين حماية البيانات، لديك الحقوق التالية:
• حق الوصول: يمكنك طلب نسخة من بياناتك الشخصية المحفوظة لدينا
• حق التصحيح: يمكنك طلب تحديث أو تصحيح بياناتك غير الدقيقة
• حق الحذف: يمكنك طلب حذف بياناتك الشخصية (مع مراعاة الالتزامات القانونية)
• حق سحب الموافقة: يمكنك سحب موافقتك على معالجة بياناتك في أي وقت
للممارسة هذه الحقوق، يرجى التواصل معنا عبر وسائل الاتصال المذكورة أدناه.`,
  },
  {
    title: "۷. بيانات الأطفال",
    content: `خدماتنا غير موجهة للأطفال دون سن ۱۸ عاماً. نحن لا نجمع عن عمد بيانات شخصية من الأطفال. إذا علمت أن طفلك قدم لنا بيانات شخصية دون موافقتك، يرجى التواصل معنا فوراً وسنقوم بحذف هذه المعلومات.`,
  },
  {
    title: "۸. التحديثات على سياسة الخصوصية",
    content: `قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر النسخة المحدثة على هذه الصفحة مع تاريخ "آخر تحديث". في حالة التغييرات الجوهرية، سنقوم بإخطارك عبر الموقع أو واتساب. ننصح بمراجعة هذه الصفحة بشكل دوري.`,
  },
  {
    title: "۹. روابط لمواقع خارجية",
    content: `قد يحتوي موقعنا على روابط لمواقع أو خدمات خارجية (مثل فيسبوك، إنستغرام، واتساب). نحن غير مسؤولين عن سياسات الخصوصية لتلك المواقع. ننصحك بقراءة سياسات الخصوصية الخاصة بكل موقع تزوره عبر روابطنا.`,
  },
  {
    title: "۱۰. معلومات التواصل",
    content: `إذا كان لديك أي أسئلة حول هذه السياسة أو ترغب في ممارسة حقوقك، يرجى التواصل معنا عبر:
الهاتف: 01067894321
العنوان: دار السلام، شارع الفيوم، القاهرة، مصر
واردات واتساب: متاحة عبر الزر الموجود في الموقع
البريد الإلكتروني: info@elzaeem.com`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-foreground">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6">
              <FaShieldAlt size={36} className="text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              سياسة الخصوصية
            </h1>
            <p className="text-gray-300 text-lg">
              نحن نحمي بياناتك ونحترم خصوصيتك - اقرأ كيف نتعامل مع معلوماتك
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
            <p className="text-gray-400 text-sm mt-4">
              آخر تحديث: ٢ مايو ٢٠٢٦
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className="bg-dark-gray rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-gold mb-4 flex items-center gap-3">
                  <FaCheckCircle className="text-gold/60" />
                  {section.title}
                </h2>
                <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-dark-gray to-medium-gray rounded-2xl p-8 border border-gold/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              لديك استفسارات حول الخصوصية؟
            </h3>
            <p className="text-gray-300 mb-6">
              فريقنا جاهز للإجابة على جميع أسئلتك المتعلقة بحماية بياناتك
            </p>
            <a
              href="tel:+201067894321"
              className="inline-flex items-center gap-2 bg-gold text-dark-bg px-8 py-3 rounded-lg font-bold hover:bg-gold/90 transition-colors"
            >
              <FaShieldAlt />
              تواصل معنا: 01067894321
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">روابط سريعة:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/terms"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                الشروط والأحكام
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#home"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                العودة للرئيسية
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
