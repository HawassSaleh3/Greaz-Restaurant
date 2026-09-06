# GREAZ 🍔 — Not Your Usual Burger

موقع مطعم GREAZ — ثنائي اللغة (عربي/إنجليزي)، متجاوب مع جميع الأجهزة، مع سلة طلبات وإرسال الطلب عبر واتساب.

Bilingual (Arabic/English) restaurant website for GREAZ — Beirut. Fully responsive, with a cart, per-item customization (add/remove ingredients & paid add-ons), and WhatsApp checkout.

## ✨ الميزات | Features

- **عربي / English** — تبديل فوري بين اللغتين مع دعم كامل للـ RTL
- **متداول مع جميع الهواتف** — تصميم Mobile-First مع شريط سلة سفلي للجوال
- **سلة طلبات** — تُحفظ تلقائياً في المتصفح (localStorage)
- **معاينة وتخصيص كل عنصر** — إزالة أي مكوّن (مخلل، بصل…) + إضافات مدفوعة (بيكون، شيدر، كومبو…) + اختيار الصوص + ملاحظات + كمية
- **الطلب عبر واتساب** — رسالة منسّقة بالكامل (العناصر، الإضافات، الإزالات، الإجمالي)
- **13 عنصراً** عبر 4 أقسام: برغر، راب، مقبلات، مشروبات

## 🚀 التشغيل | Run

موقع ثابت بدون أي dependencies — افتح `index.html` مباشرة أو:

```bash
python3 -m http.server 8000
# ثم افتح http://localhost:8000
```

## ✏️ التعديل | Customize

كل المحتوى في ملف واحد: **`js/data.js`**

| ماذا تريد أن تغيّر | أين |
|---|---|
| رقم الواتساب / الهاتف / العنوان / الساعات | `CONFIG` أعلى الملف |
| النصوص والترجمات | `I18N` |
| أسعار وأسماء ومكونات الأصناف | `MENU` |
| أسعار الإضافات (Beef Bacon, Cheddar…) | `EXTRAS` |

لإضافة صنف جديد: انسخ أي عنصر داخل `MENU` وغيّر `id`, `name`, `desc`, `price`, `ingredients`, `extras`.

## 🗂 البنية | Structure

```
index.html        ← الصفحة الوحيدة
css/style.css     ← التصميم (أحمر/أبيض كلاسيكي + RTL)
js/data.js        ← كل المحتوى (سهّل التعديل من هنا)
js/app.js         ← المنطق (سلة، واتساب، لغات)
assets/img/       ← صور الأصناف
```

---

📍 GREAZ — Beirut, Lebanon · 📞 +961 81 829 144
