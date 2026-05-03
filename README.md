<div align="center">

# 🏢 ELZAEEM INTERNATIONAL

### مركز الزعيم الدولي لكماليات السيارات والطباعة والدعاية

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-ff0080?style=for-the-badge)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-green?style=for-the-badge)](https://elzaeem-international.skywaveads.com)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)]()

</div>

---

## 📋 نظرة عامة

موقع إلكتروني احترافي لمركز الزعيم الدولي - شركة رائدة في مجال كماليات السيارات والطباعة والدعاية والإعلان في مصر. يوفر الموقع تجربة مستخدم مميزة مع تصميم عصري وأداء عالي.

### 🎯 المميزات الرئيسية

- **تصميم عصري ومتجاوب** - يعمل على جميع الأجهزة والشاشات
- **أداء محسّن** - تحميل سريع مع تحسين الصور و lazy loading
- **دعم كامل للغة العربية** - RTL من البداية
- **SEO محسّن** - هيكلية صفحات متوافقة مع محركات البحث
- **تكامل واتساب** - تواصل مباشر عبر WhatsApp
- **معرض أعمال تفاعلي** - مع إمكانية عرض الصور بحجم كبير
- **نموذج اتصال** - يرسل الطلبات مباشرة على واتساب
- **صفحات قانونية** - سياسة الخصوصية والشروط والأحكام
- **خلفيات متحركة** - تأثيرات بصرية جذابة دون التأثير على الأداء

---

## 🚀 التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|----------|
| **Next.js 15** | إطار عمل React مع App Router |
| **TypeScript** | كتابة كود آمن من النوع |
| **Tailwind CSS** | تصميم سريع ومتجاوب |
| **Framer Motion** | أنيميشن وتأثيرات حركية |
| **React Icons** | أيقونات متنوعة |
| **Yet Another React Lightbox** | معرض صور تفاعلي |

---

## 📦 التثبيت

### المتطلبات

- Node.js 18.0 أو أحدث
- npm, yarn, أو pnpm

### خطوات التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/yourusername/elzaeem-international.git
cd elzaeem-international

# تثبيت الحزم
npm install
# أو
yarn install
# أو
pnpm install
```

---

## 🛠️ التطوير

```bash
# تشغيل بيئة التطوير
npm run dev
# أو
yarn dev
# أو
pnpm dev

# الموقع سيعمل على:
# http://localhost:3000
```

---

## 🏗️ البناء للإنتاج

```bash
# بناء المشروع
npm run build
# أو
yarn build
# أو
pnpm build

# تشغيل النسخة المنتجة
npm start
# أو
yarn start
# أو
pnpm start
```

---

## 📁 هيكل المشروع

```
elzaeem-international/
├── public/                  # الملفات الثابتة
│   └── images/             # الصور والشعارات
├── src/
│   ├── app/               # صفحات الموقع (App Router)
│   │   ├── layout.tsx     # التخطيط الرئيسي
│   │   ├── page.tsx       # الصفحة الرئيسية
│   │   ├── privacy/       # صفحة سياسة الخصوصية
│   │   └── terms/         # صفحة الشروط والأحكام
│   ├── components/        # المكونات القابلة لإعادة الاستخدام
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   └── ...
│   ├── sections/          # أقسام الصفحة
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ...
│   ├── data/              # البيانات الثابتة
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   └── images.ts
│   └── lib/               # مكتبات مساعدة
│       └── utils.ts
├── next.config.ts         # إعدادات Next.js
├── tailwind.config.ts     # إعدادات Tailwind
├── tsconfig.json          # إعدادات TypeScript
└── package.json           # معلومات المشروع
```

---

## 🎨 التخصيص

### تغيير الألوان

عدل الملف `src/app/globals.css`:

```css
@layer base {
  :root {
    --gold: 212 175 55;
    --gold-light: 236 204 124;
    --accent-red: 239 68 68;
    --dark-bg: 15 15 20;
    --dark-gray: 25 25 30;
    /* ... */
  }
}
```

### تغيير معلومات التواصل

عدل الملف `src/app/layout.tsx`:

```typescript
const baseUrl = "https://your-domain.com";
const structuredData = {
  telephone: "+201067894321",
  email: "admin@skywaveads.com",
  taxID: "271-810-343",
  // ...
};
```

---

## 📱 معلومات التواصل

- **📞 الهاتف:** 01067894321
- **📱 واتساب:** 01067894321
- **🧾 الرقم الضريبي:** 271-810-343
- **📍 العنوان:** دار السلام، شارع الفيوم، القاهرة، مصر
- **📧 البريد الإلكتروني:** admin@skywaveads.com

---

## 🌐 الروابط الاجتماعية

- [Facebook](https://facebook.com/elzaeeminternational)
- [Instagram](https://instagram.com/elzaeeminternational)
- [TikTok](https://tiktok.com/@elzaeem)

---

## 📄 الترخيص

© 2024-2025 ELZAEEM INTERNATIONAL. جميع الحقوق محفوظة.

---

<div align="center">
  <p>صُنع بـ ❤️ بواسطة <a href="https://skywaveads.com">SkyWave Ads</a></p>
</div>
