/* ============================================================
   GREAZ — Site Data
   كل محتوى الموقع في هذا الملف: الإعدادات، الترجمات، القائمة.
   Edit everything here: config, translations, menu items.
   ============================================================ */

const CONFIG = {
  brand: 'GREAZ',
  whatsapp: '96181829144',              // WhatsApp number with country code, digits only
  phoneDisplay: '+961 81 829 144',
  phoneTel: '+96181829144',
  addressEn: 'Beirut, Lebanon',
  addressAr: 'بيروت، لبنان',
  hoursEn: 'Daily · 11:00 AM – 12:00 AM',
  hoursAr: 'يومياً · 11:00 صباحاً – 12:00 منتصف الليل',
  mapUrl: 'https://maps.google.com/?q=Beirut,Lebanon',
};

/* ============================================================
   Translations — الترجمات
   ============================================================ */
const I18N = {
  ar: {
    'nav.menu': 'القائمة',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',

    'hero.eyebrow': '★ بيت السماش برجر — بيروت ★',
    'hero.title': 'مش برجرك <em>المعتاد</em>',
    'hero.sub': 'نحمّص اللحم على الصاج لحظة طلبك، نغطسه بصوص GREAZ السري، ونقدّمه لك طازجاً وساخناً. اطلب عبر واتساب ويكون جاهزاً قبل وصولك.',
    'hero.order': 'اطلب الآن',
    'hero.wa': 'راسلنا واتساب',
    'hero.sticker': 'سماش برجر',
    'hero.badge1': 'لحم طازج 100%',
    'hero.badge2': 'يُحضَّر عند الطلب',
    'hero.badge3': 'صوص GREAZ السري',

    'menu.kicker': '— تفضل —',
    'menu.title': 'قائمتنا',
    'menu.sub': 'اختر عنصرك، أضف أو احذف ما تشاء من المكونات، وأرسل طلبك عبر واتساب بضغطة واحدة.',
    'cat.all': 'الكل',
    'cat.burgers': 'برغر',
    'cat.wraps': 'راب',
    'cat.appetizers': 'مقبلات',
    'cat.drinks': 'مشروبات',
    'card.add': 'أضف',

    'modal.customize': 'خصّص طلبك',
    'modal.ingredients': 'المكونات',
    'modal.ingredientsHint': '(اضغط على المكون لإزالته)',
    'modal.extras': 'إضافات',
    'modal.extrasHint': '(اختر ما تشاء)',
    'modal.chooseOne': 'اختر واحداً',
    'modal.notesLbl': 'ملاحظات',
    'modal.notesPh': 'مثال: صوص إضافي جانباً، بصل محروق قليلاً…',
    'modal.add': 'أضف إلى السلة',
    'modal.included': 'مشمول ✓',
    'modal.removed': 'تمت الإزالة ✕',
    'modal.addedToast': 'تمت الإضافة إلى السلة ✓',

    'cart.title': 'سلة الطلبات',
    'cart.clear': 'تفريغ',
    'cart.empty': 'سلتك فارغة',
    'cart.emptyHint': 'أضف ما يشتهيه قلبك من القائمة 🍔',
    'cart.subtotal': 'الإجمالي',
    'cart.pickup': '📍 للاستلام من: ',
    'cart.checkout': 'إرسال الطلب عبر واتساب',
    'cart.note': 'يتم إرسال طلبك كرسالة واتساب منسّقة — أكّد طلبك معنا ونجهّزه فوراً 🔥',
    'cart.barText': 'عرض السلة',

    'wa.orderTitle': '🍔 *طلب جديد — GREAZ*',
    'wa.no': 'بدون',
    'wa.choice': 'الاختيار',
    'wa.notes': '📝 ملاحظات',
    'wa.total': '💵 *الإجمالي*',
    'wa.pickup': '📍 *الاستلام من:*',
    'wa.thanks': 'شكراً 🙏 GREAZ — Not Your Usual Burger',

    'about.kicker': 'قصتنا',
    'about.title': 'قصة GREAZ',
    'about.p1': 'بدأت GREAZ بفكرة بسيطة: برجر سماش حقيقي، بلحم طازج يُطحن يومياً، يُضغط على صاج ساخن حتى تتكون الحواف المقرمشة، ثم يُغطس بصوصنا السري.',
    'about.p2': 'لا اختصارات، لا مكونات مجمّدة، لا استعجال على حساب الطعم. كل برجر يُحضَّر عند الطلب فقط — ولهذا سميناه: مش برجرك المعتاد.',
    'feat1.t': 'سماش عند الطلب',
    'feat1.d': 'نضغط اللحم على الصاج الساخن لحظة الطلب',
    'feat2.t': 'لحم بقري طازج',
    'feat2.d': 'يُطحن يومياً، 100% طازج وموثوق المصدر',
    'feat3.t': 'صوص GREAZ السري',
    'feat3.d': 'خلطتنا الخاصة التي يعود الزبائن من أجلها',

    'contact.kicker': 'بانتظارك',
    'contact.title': 'تجدنا هنا',
    'contact.addressLbl': 'العنوان',
    'contact.phoneLbl': 'للتواصل والطلبات',
    'contact.hoursLbl': 'ساعات العمل',

    'footer.tag': 'Not Your Usual Burger — مش برجرك المعتاد',
    'footer.rights': 'جميع الحقوق محفوظة',
  },

  en: {
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.eyebrow': '★ SMASH BURGER HOUSE — BEIRUT ★',
    'hero.title': 'NOT YOUR <em>USUAL</em> BURGER',
    'hero.sub': 'Fresh beef smashed to order on the griddle, drowned in our secret GREAZ sauce, served hot. Order on WhatsApp and it\'s ready by the time you arrive.',
    'hero.order': 'Order Now',
    'hero.wa': 'WhatsApp Us',
    'hero.sticker': 'SMASH BURGER',
    'hero.badge1': '100% Fresh Beef',
    'hero.badge2': 'Smashed to Order',
    'hero.badge3': 'Secret GREAZ Sauce',

    'menu.kicker': '— Dig In —',
    'menu.title': 'Our Menu',
    'menu.sub': 'Pick your item, add or remove any ingredient, and send your order via WhatsApp in one tap.',
    'cat.all': 'All',
    'cat.burgers': 'Burgers',
    'cat.wraps': 'Wraps',
    'cat.appetizers': 'Appetizers',
    'cat.drinks': 'Drinks',
    'card.add': 'Add',

    'modal.customize': 'Customize',
    'modal.ingredients': 'Ingredients',
    'modal.ingredientsHint': '(tap an ingredient to remove it)',
    'modal.extras': 'Add Ons',
    'modal.extrasHint': '(choose as many as you like)',
    'modal.chooseOne': 'Choose one',
    'modal.notesLbl': 'Notes',
    'modal.notesPh': 'e.g. sauce on the side, extra crispy…',
    'modal.add': 'Add to Cart',
    'modal.included': 'Included ✓',
    'modal.removed': 'Removed ✕',
    'modal.addedToast': 'Added to cart ✓',

    'cart.title': 'Your Cart',
    'cart.clear': 'Clear',
    'cart.empty': 'Your cart is empty',
    'cart.emptyHint': 'Add something delicious from the menu 🍔',
    'cart.subtotal': 'Total',
    'cart.pickup': '📍 Pickup from: ',
    'cart.checkout': 'Send Order via WhatsApp',
    'cart.note': 'Your order is sent as a formatted WhatsApp message — we\'ll confirm and fire up the grill 🔥',
    'cart.barText': 'View Cart',

    'wa.orderTitle': '🍔 *NEW ORDER — GREAZ*',
    'wa.no': 'No',
    'wa.choice': 'Choice',
    'wa.notes': '📝 Notes',
    'wa.total': '💵 *Total*',
    'wa.pickup': '📍 *Pickup from:*',
    'wa.thanks': 'Thank you 🙏 GREAZ — Not Your Usual Burger',

    'about.kicker': 'Our Story',
    'about.title': 'THE GREAZ STORY',
    'about.p1': 'GREAZ started with one simple idea: a real smash burger — fresh, daily-ground beef pressed on a screaming-hot griddle until the edges get crispy, then drowned in our secret sauce.',
    'about.p2': 'No shortcuts, no frozen patties, no rushing flavor. Every burger is made to order only — and that\'s exactly why it\'s not your usual burger.',
    'feat1.t': 'Smashed to Order',
    'feat1.d': 'Pressed on the hot griddle the moment you order',
    'feat2.t': 'Fresh Daily Beef',
    'feat2.d': 'Ground every day, 100% fresh and trusted',
    'feat3.t': 'Secret GREAZ Sauce',
    'feat3.d': 'Our signature blend people keep coming back for',

    'contact.kicker': 'Come Hungry',
    'contact.title': 'FIND US',
    'contact.addressLbl': 'Address',
    'contact.phoneLbl': 'Call & Order',
    'contact.hoursLbl': 'Opening Hours',

    'footer.tag': 'Not Your Usual Burger',
    'footer.rights': 'All rights reserved',
  },
};

/* ============================================================
   Add-ons — الإضافات (MENU ADD ONS)
   ============================================================ */
const EXTRAS = {
  double:      { name: { en: 'Double (2 Patties)',    ar: 'دوبل (قطعتا لحم)' },  price: 2 },
  triple:      { name: { en: 'Triple (3 Patties)',    ar: 'تريبل (3 قطع لحم)' }, price: 3 },
  beefBacon:   { name: { en: 'Beef Bacon',            ar: 'لحم بقري مقدّد' },    price: 2 },
  mozzPatty:   { name: { en: 'Mozzarella Patty',      ar: 'قرص موزاريلا مقلي' }, price: 2 },
  cheddar:     { name: { en: 'Red Cheddar Slice',     ar: 'شريحة شيدر حمراء' },  price: 1 },
  jalapeno:    { name: { en: 'Jalapeño',              ar: 'هالبينو حار' },       price: 1 },
  onionRings:  { name: { en: 'Onion Rings',           ar: 'حلقات بصل' },         price: 1 },
  combo:       { name: { en: 'COMBO · Fries + Soft Drink', ar: 'كومبو · بطاطس + مشروب غازي' }, price: 3 },
};

/* ============================================================
   Menu — القائمة
   ingredients: قابلة للإزالة من نافذة العنصر
   extras: إضافات مدفوعة · choices: اختيار إجباري (صوص/نكهة)
   ============================================================ */
const MENU = [
  /* ---------- BURGERS ---------- */
  {
    id: 'smash',
    cat: 'burgers',
    img: 'assets/img/smash-burger.jpg',
    emoji: '🍔',
    name: { en: 'SMASH BURGER', ar: 'سماش برجر' },
    desc: {
      en: 'Potato bun, beef patty, cheddar cheese, caramelized onion, iceberg lettuce, dill pickles, GREAZ sauce & ketchup.',
      ar: 'خبز بطاطس، قطعة لحم بقري، جبن شيدر، بصل مكرمل، خس آيسبرغ، مخلل خيار، صوص GREAZ والكاتشب.',
    },
    price: 5,
    ingredients: [
      { id: 'bun',   name: { en: 'Potato Bun',        ar: 'خبز البطاطس' } },
      { id: 'beef',  name: { en: 'Beef Patty',        ar: 'لحم بقري' } },
      { id: 'ched',  name: { en: 'Cheddar Cheese',    ar: 'جبن شيدر' } },
      { id: 'onion', name: { en: 'Caramelized Onion', ar: 'بصل مكرمل' } },
      { id: 'lett',  name: { en: 'Iceberg Lettuce',   ar: 'خس آيسبرغ' } },
      { id: 'pickle',name: { en: 'Dill Pickles',      ar: 'مخلل خيار' } },
      { id: 'greaz', name: { en: 'GREAZ Sauce',       ar: 'صوص GREAZ' } },
      { id: 'ketch', name: { en: 'Ketchup',           ar: 'كاتشب' } },
    ],
    extras: ['double', 'triple', 'beefBacon', 'mozzPatty', 'cheddar', 'jalapeno', 'onionRings', 'combo'],
  },
  {
    id: 'chicken',
    cat: 'burgers',
    img: 'assets/img/chicken-burger.jpg',
    emoji: '🍗',
    name: { en: 'CHICKEN BURGER', ar: 'برجر دجاج' },
    desc: {
      en: 'Potato bun, fried chicken breast dipped in BBQ or buffalo sauce, iceberg lettuce, honey mustard, ranch & cheddar cheese sauce.',
      ar: 'خبز بطاطس، صدر دجاج مقلي مغموس بصوص الباربكيو أو البافلو، خس آيسبرغ، عسل مستردة، رانش وصوص جبن الشيدر.',
    },
    price: 5,
    ingredients: [
      { id: 'bun',    name: { en: 'Potato Bun',          ar: 'خبز البطاطس' } },
      { id: 'chick',  name: { en: 'Fried Chicken Breast',ar: 'صدر دجاج مقلي' } },
      { id: 'lett',   name: { en: 'Iceberg Lettuce',     ar: 'خس آيسبرغ' } },
      { id: 'hm',     name: { en: 'Honey Mustard',       ar: 'عسل مستردة' } },
      { id: 'ranch',  name: { en: 'Ranch',               ar: 'رانش' } },
      { id: 'cheds',  name: { en: 'Cheddar Cheese Sauce',ar: 'صوص جبن الشيدر' } },
    ],
    choices: [
      {
        id: 'dip', name: { en: 'Sauce Dip', ar: 'الصوص المغموس' },
        options: [
          { id: 'bbq',    name: { en: 'BBQ',        ar: 'باربكيو' } },
          { id: 'buffalo',name: { en: 'Buffalo',     ar: 'بافلو' } },
        ],
      },
    ],
    extras: ['mozzPatty', 'cheddar', 'jalapeno', 'onionRings', 'combo'],
  },

  /* ---------- WRAPS ---------- */
  {
    id: 'wrap',
    cat: 'wraps',
    img: 'assets/img/wrap.jpg',
    emoji: '🌯',
    name: { en: 'BONELESS WRAP', ar: 'راب بونلس' },
    desc: {
      en: 'Tortilla wrap, chicken tenders dipped in BBQ sauce, mozzarella cheese, chips sticks, honey mustard & ranch sauce.',
      ar: 'خبز تورتيلا، أصابع دجاج مغموسة بصوص الباربكيو، جبن موزاريلا، أصابع بطاطس مقرمشة، عسل مستردة ورانش.',
    },
    price: 5,
    ingredients: [
      { id: 'tort',  name: { en: 'Tortilla Wrap',   ar: 'خبز تورتيلا' } },
      { id: 'tend',  name: { en: 'Chicken Tenders', ar: 'أصابع دجاج' } },
      { id: 'mozz',  name: { en: 'Mozzarella',      ar: 'جبن موزاريلا' } },
      { id: 'chips', name: { en: 'Chips Sticks',    ar: 'أصابع بطاطس مقرمشة' } },
      { id: 'hm',    name: { en: 'Honey Mustard',   ar: 'عسل مستردة' } },
      { id: 'ranch', name: { en: 'Ranch',           ar: 'رانش' } },
    ],
    extras: ['cheddar', 'jalapeno', 'combo'],
  },

  /* ---------- APPETIZERS ---------- */
  {
    id: 'fries',
    cat: 'appetizers',
    img: 'assets/img/fries.jpg',
    emoji: '🍟',
    name: { en: 'FRIES', ar: 'بطاطس مقلية' },
    desc: { en: 'Classic golden crispy fries with sea salt.', ar: 'بطاطس ذهبية مقرمشة بملح البحر.' },
    price: 3,
    ingredients: [
      { id: 'pot',  name: { en: 'Golden Fries', ar: 'بطاطس ذهبية' } },
      { id: 'salt', name: { en: 'Sea Salt',     ar: 'ملح البحر' } },
    ],
    extras: ['cheddar', 'jalapeno'],
  },
  {
    id: 'chiliFries',
    cat: 'appetizers',
    img: 'assets/img/chili-fries.jpg',
    emoji: '🌶️',
    name: { en: 'CHILI FRIES', ar: 'بطاطس بالتشيلي' },
    desc: { en: 'Fries topped with chili beef and cheddar cheese.', ar: 'بطاطس مقلية مغطاة بتشيلي اللحم البقري وجبن الشيدر الذائب.' },
    price: 6,
    ingredients: [
      { id: 'fries', name: { en: 'Fries',        ar: 'بطاطس مقلية' } },
      { id: 'chili', name: { en: 'Chili Beef',   ar: 'تشيلي لحم بقري' } },
      { id: 'ched',  name: { en: 'Cheddar Cheese', ar: 'جبن شيدر' } },
    ],
    extras: ['jalapeno'],
  },
  {
    id: 'loadedFries',
    cat: 'appetizers',
    img: 'assets/img/loaded-fries.jpg',
    emoji: 'loaded',
    name: { en: 'LOADED FRIES', ar: 'بطاطس لودد' },
    desc: {
      en: 'Fries topped with chicken tenders, BBQ, cheddar cheese, ranch & honey mustard sauce.',
      ar: 'بطاطس مغطاة بأصابع دجاج مقرمشة، باربكيو، جبن شيدر، رانش وعسل مستردة.',
    },
    price: 6.5,
    ingredients: [
      { id: 'fries', name: { en: 'Fries',            ar: 'بطاطس مقلية' } },
      { id: 'tend',  name: { en: 'Chicken Tenders',  ar: 'أصابع دجاج' } },
      { id: 'bbq',   name: { en: 'BBQ Sauce',        ar: 'صوص باربكيو' } },
      { id: 'ched',  name: { en: 'Cheddar Cheese',   ar: 'جبن شيدر' } },
      { id: 'ranch', name: { en: 'Ranch',            ar: 'رانش' } },
      { id: 'hm',    name: { en: 'Honey Mustard',    ar: 'عسل مستردة' } },
    ],
    extras: ['jalapeno'],
  },
  {
    id: 'onionRings',
    cat: 'appetizers',
    img: 'assets/img/onion-rings.jpg',
    emoji: '🧅',
    name: { en: 'ONION RINGS 7PCS', ar: 'حلقات بصل 7 قطع' },
    desc: { en: 'Crispy golden onion rings served with BBQ sauce.', ar: 'حلقات بصل ذهبية مقرمشة تقدم مع صوص الباربكيو.' },
    price: 5,
    ingredients: [
      { id: 'rings', name: { en: 'Onion Rings',  ar: 'حلقات بصل مقرمشة' } },
      { id: 'bbq',   name: { en: 'BBQ Dip',      ar: 'صوص باربكيو جانبي' } },
    ],
    extras: ['jalapeno'],
  },
  {
    id: 'cheeseBalls',
    cat: 'appetizers',
    img: 'assets/img/cheese-balls.jpg',
    emoji: '🧆',
    name: { en: 'CHEESE BALLS 6PCS', ar: 'كرات جبن 6 قطع' },
    desc: { en: 'Golden fried mozzarella balls with a melting cheese pull.', ar: 'كرات موزاريلا مقلية ذهبية بجبنة ذائبة من الداخل.' },
    price: 6,
    ingredients: [
      { id: 'balls', name: { en: 'Mozzarella Balls', ar: 'كرات موزاريلا' } },
      { id: 'crust', name: { en: 'Crispy Coating',  ar: 'قشرة مقرمشة' } },
    ],
    extras: ['jalapeno'],
  },
  {
    id: 'tenders',
    cat: 'appetizers',
    img: 'assets/img/tenders.jpg',
    emoji: '🍗',
    name: { en: 'CHICKEN TENDERS 4PCS', ar: 'أصابع دجاج 4 قطع' },
    desc: { en: 'Crispy chicken tenders with your dip: BBQ, honey mustard or buffalo.', ar: 'أصابع دجاج مقرمشة مع الصوص الذي تختاره: باربكيو، عسل مستردة أو بافلو.' },
    price: 5,
    ingredients: [
      { id: 'tend', name: { en: 'Chicken Tenders', ar: 'أصابع دجاج مقرمشة' } },
    ],
    choices: [
      {
        id: 'dip', name: { en: 'Dip Sauce', ar: 'الصوص الجانبي' },
        options: [
          { id: 'bbq',  name: { en: 'BBQ',          ar: 'باربكيو' } },
          { id: 'hm',   name: { en: 'Honey Mustard',ar: 'عسل مستردة' } },
          { id: 'buff', name: { en: 'Buffalo',      ar: 'بافلو' } },
        ],
      },
    ],
  },
  {
    id: 'wings',
    cat: 'appetizers',
    img: null, /* TODO: image coming next update */
    emoji: '🍖',
    name: { en: 'WINGS 7PCS', ar: 'أجنحة 7 قطع' },
    desc: { en: '7 chicken wings dipped in BBQ or buffalo.', ar: '7 أجنحة دجاج مغمسة بالباربكيو أو البافلو.' },
    price: 5,
    ingredients: [
      { id: 'wings', name: { en: 'Chicken Wings', ar: 'أجنحة دجاج' } },
    ],
    choices: [
      {
        id: 'dip', name: { en: 'Dip Sauce', ar: 'الصوص' },
        options: [
          { id: 'bbq',  name: { en: 'BBQ',          ar: 'باربكيو' } },
          { id: 'hm',   name: { en: 'Honey Mustard',ar: 'عسل مستردة' } },
          { id: 'buff', name: { en: 'Buffalo',      ar: 'بافلو' } },
        ],
      },
    ],
  },
  {
    id: 'boneless',
    cat: 'appetizers',
    img: null, /* TODO: image coming next update */
    emoji: '🐔',
    name: { en: 'BONELESS 7PCS', ar: 'بونلس 7 قطع' },
    desc: { en: '7 boneless chicken bites dipped in BBQ or buffalo.', ar: '7 قطع بونلس دجاج مغمسة بالباربكيو أو البافلو.' },
    price: 8,
    ingredients: [
      { id: 'bone', name: { en: 'Boneless Bites', ar: 'قطع بونلس مقرمشة' } },
    ],
    choices: [
      {
        id: 'dip', name: { en: 'Dip Sauce', ar: 'الصوص' },
        options: [
          { id: 'bbq',  name: { en: 'BBQ',          ar: 'باربكيو' } },
          { id: 'hm',   name: { en: 'Honey Mustard',ar: 'عسل مستردة' } },
          { id: 'buff', name: { en: 'Buffalo',      ar: 'بافلو' } },
        ],
      },
    ],
  },

  /* ---------- DRINKS ---------- */
  {
    id: 'softDrink',
    cat: 'drinks',
    img: null, /* TODO: image coming next update */
    emoji: '🥤',
    name: { en: 'SOFT DRINK', ar: 'مشروب غازي' },
    desc: { en: 'Chilled soft drink — cola, sprite or fanta.', ar: 'مشروب غازي مثلج — كولا، سبرايت أو فانتا.' },
    price: 1,
    choices: [
      {
        id: 'flavor', name: { en: 'Flavor', ar: 'النكهة' },
        options: [
          { id: 'cola',   name: { en: 'Cola',   ar: 'كولا' } },
          { id: 'sprite', name: { en: 'Sprite', ar: 'سبرايت' } },
          { id: 'fanta',  name: { en: 'Fanta',  ar: 'فانتا' } },
        ],
      },
    ],
  },
  {
    id: 'water',
    cat: 'drinks',
    img: null, /* TODO: image coming next update */
    emoji: '💧',
    name: { en: 'WATER', ar: 'مياه' },
    desc: { en: 'Chilled bottled water.', ar: 'قارورة مياه باردة.' },
    price: 0.5,
  },
];

/* Marquee words */
const MARQUEE = {
  ar: ['سماش برجر', 'برجر دجاج', 'راب بونلس', 'بطاطس لودد', 'أجنحة', 'حلقات بصل', 'كرات جبن', 'صوص GREAZ السري'],
  en: ['SMASH BURGER', 'CHICKEN BURGER', 'BONELESS WRAP', 'LOADED FRIES', 'WINGS', 'ONION RINGS', 'CHEESE BALLS', 'SECRET GREAZ SAUCE'],
};
