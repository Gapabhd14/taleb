let eplainText = `תל"ב= תקן לאיכות בהדרכה 
\nהתל"ב של זרוע היבשה נקרא - 'יסודות מנצחים'
\nהתל"ב מחולק לחמישה נושאים עיקריים לפי מימדי ההדרכה: ניהול הדרכה, תכנית הכשרה, סגל, חניכים וסביבה.
\nהתל"ב נועד ליצירת סטנדרנט באיכות ההדרכה בצה"ל, כאשר נהליו מהווים פקודה מחייבת לכלל ההכשרות בצה"ל.
\nכל שנתיים מתקיימת ביקורת מטכ"לית הבוחנת את יישום ושימוש נהלי התל"ב בבית הספר.
\nלפניך לומדת תל"ב הכוללת בתוכה הסבר על כלל פרקי התל"ב ושאלות תרגול לבחינה עצמית.
\nמטרת הלומדה היא הכרת נהלי התל"ב ושיפור ההדרכה בבהל"צ.
\nשימו לב כי בלומדה מופיעים הנהלים הרלוונטים ביותר לזיכרון והבנה אך בתל"ב עצמו תוכלו לעצמו נהלים נוספים שאינם מפורטים כאן.`;
// let eplainText = `\nתל"ב = תקן\n לאיכות\n בהדרכה\n\nהתל"ב של זרוע היבשה נקרא- 'יסודות מנצחים'`;
let counter = 0;
const numberOfChapter = [8, 4, 7, 5, 3];
const titleChap = ["ניהול הדרכה" , "תוכנית הכשרה", "סגל הכשרה", "חניכים", "סביבת הכשרה"];
const titles = [["יחסי גומלין בתחום ההדרכה", "שעון פעילות", "תוכנית עבודה הדרכתית", "היערכות לפתיחת מחזור", "סיכומים עיתיים בהכשרה", "סיכום סוף מחזור הכשרה", "הערכת הכשרה ומשוב שטח", "שימוש במערכת הקמפוס"],
["פיתוח הכשרה חדשה", "כתיבה, עדכון ואישור תיקי יסוד", "הערכת חניכים (מבחנים בהכשרה)", "תיק מדריך"],
["הגדרת תפקידים לסגלי הדרכה", "איתור ומיון מפקדים להכשרות", "הכנות מפקדים", "פיתוח והערכת מפקדים", "תחלופת מפקדים בהכשרות", "הרחקת איש סגל", `פורום הדרכה בה"די`],
["נוהל חניך מתקשה", "ועדה להערכת חניך", "בחירת חניך מצטיין וחניך למופת", "תיק אישי לחניך", "העברת מקל"], 
["קליטה והטמעת מאמן בהכשרות", `קליטת אמל"ח ביחידת הדרכה`, "שגרת אחזקת תשתיות הדרכה"]];
const contents = [[`מפקדת החיל חונכת את הבה"ד באופן מקצועי ונושאת באחריות בתחום ההדרכה במספר נושאים:\n •	כתיבת תפיסת הדרכה חיילית\n •	כתיבת תו"ל\n •	אישור תיקי יסוד \n •	הובלת הלמידה המבצעית\n •	ייזום והקמת מאמנים\n •	הטמעת אמל"ח חדש בהכשרות\n •	הנחיות מקצועיות שוטפות\n •	אישור תכולת הדרכה\n •	בקרת איכות ההכשרות\n •	קבלת החלטות שותפות עבור ההכשרות`, `שעון פעילות הינו גרף המגדיר את העיתוי של מופעי ההדרכה המרכזיים בהכשרה. מטרת שעון זה היא ניהול שגרת ההכשרה בצורה שיטתית ואיכותית \n עקרונות: \nשעון הפעילות יכלול מופעים ברמה הבית ספרית וברמה הגדודית והענפית .\nשעון הפעילות ברמה הבית ספרית יגולם בגרף ההכשרה \n הבקרה על מימוש מופעי שעון הפעילות ברמת הבה"ד תבוצע על ידי הגפ"ה וברמת הגדוד על ידי קה"דית הגדוד / הענף \n מופעי ההדרכה: \nאישור הכנת סגל \nאישור תוכניות לפתיחת ההכשרה \nפורומי הסמכות \nועדות הערכה לחניכים \nהצגת סיכום הכשרה \n העברת מקל\n`,
`תוכנית עבודה יחידתית מאפשרת ליחידה להתקדם ולקדם תהליכי הדרכה לצד התפעול השוטף של היחידה. בתוכנית מביא המפקד לידי ביטוי את חזונו, מטרותיו וסדרי העדיפויות שלו.
תוכנית העבודה ההדרכתית היא נגזרת מתוכנית העבודה השנתית של היחידה ותיכתב על ידי הגפ"ה ותאושר אצל מפקד הבה"ד. \nהתוכנית מחולקת למשימות על פי מימדי ההדרכה ותגלם את הפעולות ההדרכתיות המחייבות: \n•	אבחון הדרכתי\n •	הערכת הכשרות\n •	פיתוח הכשרות ותיקוף תיקי יסוד\n •	פיתוח תכולות ושיטות הדרכה \n•	הטמעת אמל"ח ומאמנים\n •	מופעי למידה ומופעי הטעמת התל"ב להכשרות`, `מטרת הנוהל היא ביצוע תהליך סדור של אישורי תוכניות למחזור על ידי מפקד הבה"ד
פקודת ההיערכות למחזור תופץ עד כחודש וחצי על ידי האג"ם ותכלול בתוכה:\n\n •	גרף הכשרות לתקופת ההדרכה \n•	אילוצים וגורמים משפיעים פים וחוץ בה"דיים\n •	עיתויים לביצועי אישורי תוכניות\n •	דרקטיבות של מפקד הבה"ד לתקופת ההדרכה \n\nהגדרות רלוונטיות-\n •	תקופת הדרכה: פרק זמן מוגדר של הדרכה שנעשית בקורס מסוים ( תקופות ההדרכה יהיו על פי מחזור הגיוס)\n •	מחזור קורס או הכשרה- מופע מוגדר של קורס עם הגדרת תאריכי פתיחה וסיום\n •	סדרה בתוך ההכשרה- לבנת תוכן שמועברת תוך ההכשרה`, `סיכומים עיתיים במהלך ההכשרה הם מנגנונים שמאפשרים מעקב ובקרה אחר מימוש תוכנית ההכשרה, וכן אחר התקדמות החניכים בתהליך הלמידה. \n\nישנם חמישה סוגים של סיכומים עיתיים:\n 1.	סיכום יומי\n 2.	סיכום שבועי\n 3.	סיכומים לשבועות עצימים\n 4.	סיכום אמצע מחזור\n 5.	סטטוס הסמכות\n\n כלל סיכומים אלו נדרשים לתיעוד וישמרו לפרק זמן של שנתיים.
אחריות התיעוד וניהול הידע הינה של  קה"דית המסגרת ובבקרה של הגפ"ה`, `מטרת סיכום סוף מחזור הכשרה הינה לבחון את מידת השגת מטרות ההכשרה והפקת לקחין למחזור הבא.
איסוף הנתונים יתבצע לאורך הקורס ויתבסס על מקורות מידע שונים, בין היתר על הסיכומים העיתיים שהתבצעו במהלך הקורס.
ביצוע סיכום למחזור הינו באחריות מפקד הפלוגה/ ממ"ג/ רמ"ד והוא יושלם עד שבוע מיום סיום ההכשרה. \n\n סיכום ההכשרה כולל שלושה דגשים עיקריים: \n 1.	מידת העמידה במטרות ההכשרה\n 2.	פערי הסמכות\n 3.	הפקת לקחים`, `נוהל זה מייצר תהליך שיטתי וסדור להערכת תוכניות ההכשרה לצורך שימורם עדכניות ואפקטיביות.
את תהליך ההערכה יובילו מפקד הגפ"ה והיועץ הארגוני. \n\nהנושאים העיקריים להערכה:\n •	רמת הכשירות של בעל התפקיד\n •	רמת הכושר והבשלות המנטלית בסיום ההכשרה\n •	מידת רלוונטוית הכשירויות המושגות בהכשרה לתפקיד בשטח`, `הקמפוס הדיגיטלי היא מערכת לניהול ההדרכה והלמידה, תומכת בתהליכי למידה בהכשרות, באימונים ומשמשת לניהול כשירות הפרט.
עקרונות העבודה: \n •	ניהול קורסי אב התואמים לתיק היסוד.\n •	ניהול מחזורי ההכשרה על פי הקורס אב.\n •	תיק חניך- תיעוד מלא של נתוני הלומד בהכשרה לרבות מבחנים, מישובים ודפי הערכה.\n •	תיק איש סגל- תיעוד מלא של נתנוני האיש סגל לרבות מבחני כשירות, מישובים ודפי הערכה.\n •	ביצוע העברת מקל וקליטות חיילים.\n •	סטטוס הסמכות. \nבכל הכשרה יש למנות נאמן קמפוס ועליו להוביל את התיעוד ההכשרות בקמפוס תוך ליווי של הגפ"ה. באחריות נאמן הקמפוס לבצע בקרה שוטפת לאורך כל המחזור אודות ביצוע ההזנות.`],
[`פיתוח הכשרה חדשה מתבצע דרך כלל בעקבות שינויים בתו"ל, תפיסות ואמל"ח. אשר דורשים בעלי תפקידים חדשים שלא היו קיימים בעבר.  \n תהליך פיתוח ההכשרה:\n\n עיבוד וניתוח התפקיד\n\n קביעת רציונאל ההכשרה \n\n ניתוח הכשירויות לידע ולמיומנויות הנדרשות \n\n הגדרת אפון הערכת החניך והאקטים המחייבים להסמכתו (עץ הערכה) \n\n בניית מערכת שעות עקרונית להכשרה \n\n הגדרת לוחות זמנים ותחומי אחריות`,
`תיק יסוד הינו מסמך מחייב לכל קורס או השתלמות ובו מתועדים: מבנה הקורס והתנאים הנדרשים לקיומו.\n\n כתיבת תיק יסוד:\n יחידה המבצעת הכשרה נדרשת לבצע תהליך של כתיבה ואישור התיק בשלושה מצבים\n •	צורך בשינוי מרכזי של הקורס/ ההשתלמות\n •	תיקוף תיק היסוד אחת לחמש שנים \n •	פיתוח קורס/ השתלמות חדשים\n\n כתיבת התיק תתבצע על פי מנחה לכתיבת תיק יסוד. \n תיק היסוד יאושר על ידי מפקד הגפ"ה, רע"ן / ממ"ג, מפקד בהל"צ והחיל.\n קיים מסמך המנחה מי הגורמים המקצועיים בבהל"צ שמוסמכים לאשר ומסווג על פי נושאים.`,
`מבחן הינו כלי המאפשר למפקדים להעריך את רמת הידע, ההבנה והכשירות של חניך במהלך ההכשרה. יש להבחין בין תרגיל שהינו חלק מתהליך הלמידה לבין תרגיל המהווה מבחן עבור החניך.\n עץ הערכה-  בעץ הערכה יופיעו הציונים של כלל מצבי המבחן לרבות מבחנים עיוניים, מעשיים וכן תרגילים והתנסויות מחייבות. כלל הציונים ישוכללו לכדי ציון סופי לחניך בהכשרה על פי משקלים שנקבעו מראש. המבחנים העיוניים לא יעלו על 30% מסך המבחנים המסמיכים בהכשרה. לכל מבחן יהיה טופס 'מתאר מבחן' אשר מגדיר את הנושאים המוערכים במבחן, היקף בכל נושא ובכל רמת ידע וכן את אופן חלוקת הציונים ואת ציון הסף למבחן. טופס זה יהיה חשוף לנבחנים במעמד המבחן. לכל מבחן מעשי יבנה דף הערכה אשר יכלול את הקריטריונים להערכת הביצוע של הנבחן ואת אופן חלוקת המשקלים הפנימית לצורך מתן ציון למבחן. טרם המבחן יש לפרסם לחניכים את הנושאים עליהם הם עתידים להיבחן, במבחן מעשי נדרש לפרסם לחניכים את הדף ההערכה.  \n מועדי מבחן- לכל חניך יינתנו שני מועדים- א' ו- ב'. בסמכות המ"פ או מקבילו ומעלה לאשר מועד ג'.`,
`לכל יחידת לימוד יכתב תיק מדריך, רצף של כמה שיעורים באותו נושא או תת פרק יקרא יחידת לימוד ולו מספר תיקי מדריך. \n כל תיק מדריך יאושר על ידי הגורמים הבאים:\n •	אישור תורתי ממפקדת החיל ומפקד המסגרת.\n •	אישור הדרכתי מהגפ"ה. \n כתיבה או תיקוף של תיק מדריך נדרש במקרים הבאים:\n 1.	בפיתוח קורס חדש\n 2.	פיתוח קורס קיים (הוספת כשירויות, שיעורים חדשים וכו)\n 3.	עדכון שיטת הלימוד, עדכון תו"ל\n 4.	אחת לשלוש שנים \n על תיקי המדריך להיות נגישים לכלל בעלי התפקידים הרלוונטיים בבה"ד.`],
[`הגדרת תפקידים ברורה מאפשרת לכל בעל תפקיד למלא את תפקידו מתוך תחומי אחריותו ותוך תיאום עם בעלי תפקידים אחרים.\n 
במסמך 'יסודות מנצחים' תמצאו הגדרות תפקידים ל:\n •	מ"כ\n •	סמל\n •	מ"מ\n •	משה"ד\n •	מ"פ\n •	קצין מגמה/ מדור\n •	מדריך\n •	רמ"ד / רע"ן\n •	גפ"ה`,
`בכל זמן נתון יש לשמר תמהיל של אנשי סגל ותיקים אל מול אנשי גל חדשים ביחסים המינימאליים הבאים: \n הכשרות בבא"ח- הממ"ג יהווה 'עקב בקרקע' בזמן ששאר סגל ההכשרה מתחלף כל מחזור. \n הכשרות הפיקוד- 30% סגל ותיק מול 70% סגל חדש. \n שלב המיון לאנשי הסגל יכלול את הדברים הבאים: \n •	מבחן רמה מקצועי. \n •	מבחן רמה הדרכתי- יסודות מנצחים, חניכה. (ניתן לבצע מבחן זה ע"י סימולציות, דינמיקות קבוצתיות והעברת שיעורים- החלפת מבחן בזה תאושר על ידי מפקד הגפ"ה)\n •	סימולציה קבוצתית. \n •	ראיון אישי עם מפקד המסגרת בדרגת סא"ל. \n תיעוד וניהול הידע יהיה באחריות המג"ד / הרע"ן, הידע יהיה שמור למשך שנה מיום הביצוע.`,
`הכנת סגל הינה תנאי הכרחי למעבר טרם פתיחת המחזור. הכנות הסגלים יחולקו לכמה צירים:\n ציר פיקודי-\n •	תפיסת תפקיד מפקד בהכשרה, תכני המענה הפיקודי, חובות וזכויות החייל, מדיניות ענישה ותפיסת המרחק הפיקודי, הרצאות מחייבות- ת"ש, קב"ן ורופא\n ציר מקצועי והדרכתי-\n •	מעבר על תוכנית ההכשרה- כשירויות, עץ הערכה ומבנה, העמקה מקצועית, עדכוני תו"ל ותחקירים, למידה ותיקוף תכולת ההדרכה, מעבר סדנת חניכה ומב"ב, ביצוע בחני רמה  (מקצועי והדרכתי)\n ציר עבודת הסגל-\n •	במידה ומדובר על מפקדים חדשים- סדנת היכרות, הגדרת יעדים, הגדרת בעלי תפקידים, תיאום ציפיות, נורמות ונהלים\n כל איש סגל נדרש לנכוח ב 80% ממופעי הכנת הסגל. בתכנים המחייבים על כולם לנכוח- איש סגל שלא ינכח יידרש להשלים. הכנת סגל במדורי הדרכה תתבצע 3 פעמים שנה למשך שבועיים לכל הכנה ותכלול את המופעים הבאים:\n •	קביעת יעדים למדור ובחינת עמידה ביעדים שנקבעו קודם, עדכון תכולות ההדרכה לאור עדכוני תו"ל והוראות מקצועיות, מבחני רמה למדריכים ולמדריכות במדור`,
`מטרות הערכת הסגל הן: הסמכת לתפקיד כאיש סגל, שימור כשירותו של איש הסגל, חניכת איש סגל לצורך שיפור תפקידו. \n תוכנית הערכה לאיש סגל: \n לכל איש סגל תבנה תוכנית הערכה אחת למחזור ותוצג לאיש הסגל בשבוע הראשון של הכנת הסגל. התוכנית תכלול מבחנים מסמיכים ומופעי חניכה. \n מופעי וכלי הערכה וחניכה: \n מבחן רמה מקצועי, בוחן כש"ג, בוחן קליעה, בוחן הדרכה, משוב מפקד, חווד תקופתי של המפקד ישיר \n בחירת איש סגל מצטיין – \n אחת למחזור יבחרו מפקדים אשר בלטו בשאיפתם למצוינות במהלך ההכשרה, המפקדים יבחרו על ידי מפקד ההכשרה.`,
`מפקדים בדרג מ"פ יבצעו תפקיד של 8 חודשים לכל הפחות. מפקדים בדרג ממ"ג, רמ"ד או מג"ד יבצעו תפקיד של שנתיים לכל הפחות. אחריות העברת התיק הינה של המפקד היוצא אלא אם הוגדר אחרת על ידי מפקד בהל"צ. התיק יכלול את הדברים הבאים: •	תיקי יסוד להכשרות עליהם עתיד לפקד, סיכומי מחזורים של שני מחזורי ההכשרה האחרונים, שבצ"ק המפקדים תחת פיקודו לרבות חוות דעת וצפי עבור כל מפקד להמשך שירותו, מסמך סיכום תפקיד של המפקד היוצא, סוגיות ונושאים שסוכמו לאחרונה למיקוד ומעקב של המפקד, סוגיות ונושאים פתוחים הנדרשים להמשך טיפול \n מופעים מחייבים בכניסה לתפקיד: \n מ"פ וממ"ג - סדנת כניסה לתפקיד, ביקור במופעים משמעותיים בהכשרה, פגישות עבודה עם גורמי עבודה כפי שיוגדר על ידי מפקד היחידה, ראיונות ושיחות עם פקודים, הכשרת ממ"ג / רמ"ד בבית הספר להדרכה. \n מג"ד ורע"ן - סדנת כניסה לתפקיד, הכשרת מג"ד ורע"ן בבית הספר להדרכה, ביקור במופעים משמעותיים בהכשרה, פגישות עבודה עם גורמי עבודה כפי שיוגדר על ידי מפקד היחידה \n מסמך בראשית- כחודש מתחילת תפקידו של כל מפקד עליו לכתוב מסמך בראשית שיכלול אבחון היחידה ויעדים אישיים של בעל התפקיד הנכנס.`,
`סמכויות הרחקת איש סגל:\n •	מפקד/ מדריך (חוגר) – מפקד היחידה בדרגת אל"ם.\n •	מ"מ/ מפק"ץ (קצין ראשוני) – מפקד היחידה בדרגת אל"ם לקצין בחובה  / תא"ל לקצין בקבע.\n •	מ"פ/ מפקד קורס – מפקד המרכז להכשרות היסוד/ מפקד החיל הרלוונטי. \n\n תהליכי סיום תפקיד עקב אירוע חריג ועקב פער משמעותי בביצוע התפקיד מפורטים במסמך 'יסודות מנצחים'`,
`בכל בה"ד יתכנסו 2 סוגים של פורומים:\n פורום בכיר- כולל את המפקד, המג"דים והרע"נים המפקדים על ההכשרות בבה"ד.\n פורום מורחב- כולל את המפקד, המג"דים, הרע"נים, הרמ"דים, הממ"גים והמ"פים.\n פורום בכיר יתכנס 3 פעמים בשנה.\n פורום מורחב יתכנס פעמיים בשנה.`],
[`חניך מתקשה הוא חניך שאינו עומד בתנאי הסף להכשרה. כפי שמפורט בתיק היסוד, בהבט הלימודי או בהבט הנורמטיבי והערכי.  \n לכל חניך מתקשה תבנה תוכנית אישית לקידומו- ציר פיתוח אישי (צפ"א), התוכנית תוצג לחייל בשיחת מפקד פורמלית ברמת מ"מ לפחות. \n אחת לשבועיים יקיים המפקד הישיר שיחת סטטוס התקדמות עם החייל במהלכה ישקף לחייל את התקדמותו וכן יקבעו מדדים חדשים לשבועיים הבאים. \n מעקב וניהול הידע: \n אחת לחודש יש לקיים דיון סטטוס התקדמות על החניכים מתקשים בראשות מפקד הפלוגה.  \n במידה והחייל הדביק את הפער ואינו זקוק לעוד לתוכנית אישית, בסמכות מפקד ההכשרה להורידו מרשימת החניכים המתקשים. רשימת החניכים המתקשים תנוהל ע"י מפקד הפלוגה. `,
`ועדת הערכה לחניך הינה מופע המתקיים כאשר קיים ספק לגבי התאמתו של החניך לתפקיד והיכולת להסמיכו בסיום הכשרה.  \n תנאים מקדימים להעלאת חניך לוועדת הערכה:\n ●	לבצע שיקוף עם החניך על מצבו \n ●	עיתוי להעלאת חניך וועדה יהיה לפני שעברו 80% מתכני ההכשרה המחייבים \n ●	במידה ואחרי ה 80% מתגלה אירוע ערכי/ נורמטיבי ניתן להחריג סעיף קודם באישור מפקד הבה"ד \n עילות להעלאת חניך לוועדת הערכה: \n ●	הפסד ימי הכשרה על פי תיק היסוד \n ●	אירוע ערכי/ נורמטיבי / משמעתי \n ●	אי עמידה בציוני הסף  \n סמכות לביצוע הוועדה: \n ●	טירונות / אימון מתקדם/ קורס מקצועי- מג"ד/ רע"ן בדרגת סא"ל \n ●	מ"כים- מפקד בה"ד בדרגת אל"ם \n ●	קק"צ- קצין חיל או הסמכות הרלוונטית בדרגת תא"ל`,
`תעודות הצטיינות תינתן לנמצאים בקרב עשרת האחוזים הראשונים מבין מסיימי הקורס ואינם נופלים מציון של 80. באחריות מ"פ או מקבילו בהמלצת סגל המפקדים לסכם את המועמדים להצטיינות ולמופת עד 3 ימים לפני סוף הקורס.  החניך המצטיין והחניך למופת יצוינו במהלך טקס הסיום ויזכו לקהל את הסיכה בטקס הסיום מהאישיות הבכירה בטקס. \n קריטריונים תומכים לבחירת חניך מצטיין וחניך למופת:\n חניך מצטיין- \n ●	ציונים גבוהים- ציון סופי מעל 80 \n ●	חוו"ד מפקד בולט לחיוב \n ●	ללא אירועי משמעת משמעותיים \n ●	סוציומטרי עמיתים גבוה \n ●	תכונותיו העיקריות אשר יבואו לידי ביטוי הינן: חתירה למצוינות, יוזמה, עזרה לזולת והתמדה. \n חניך למופת-  \n ●	חוו"ד מפקד בולט לחיוב \n ●	ללא אירועי משמעת משמעותיים \n ●	סוציומטרי עמיתים גבוה \n ●	תכונותיו העיקריות אשר יבואו לידי ביטוי הינן: השקעה, יוזמה לזולת, התמדה, למידה והשתפרות`,
`תיק אישי לחניך משמש אמצעי לאיסוף המידע וריכוזו. \n מידע המנוהל בתיק האישי: \n ●	סיכום דף קליטה לקורס הכולל נתוני רקע על החניך \n ●	סטטוס ביצוע לרבות ציוני המבחנים בכלל תנאי הסף להסמכה כפי שהוגדרו בתיק היסוד \n ●	משובי התנסויות ותרגילים \n ●	תוכנית החניכה ותיעוד החניכה \n ●	אירועים אישיים חריגים לרבות- תוכנית חניך מתקשה, ועדת הערכה, סיכום תחקירים שהחניך היה חלק מהם- אירועי משמעת, אירועי בטיחות וכו' \n ●	אירועי פרט: ת"ש,  קב"ן, רפואי \n ●	מידע נוסף לשיקול דעתו של המפקד`,
`על הדו"ח לפרט את המידע הבא: \n פרטים אישיים- מקום מגורים, מצב משפחתי \n מידע מקצועי- פירוט הישגים בהכשרה. נקודות חוזקה מקצועיות ונקודות חולשה שנדרש להמשיך ולהעמיק בהם במהלך ההכשרה והמלצות להמשך מוקדי חניכה. \n מידע נוסף- סוגיות ת"ש, רפואה, ברה"ן או כל נושא אחר המחייב תשומת לב מפקדים והמשך טיפול. \n נתונים נוספים- על פי שיקול עת מפקד בדרג מג"ד. \n העברת המקל תתבצע טרם קליטתו של החייל ביחידתו החדשה ולא יוקדם משבועיים טרם סיום ההכשרה.`],
[]];
let counterContent;

window.addEventListener("load", () => {
    // window.scrollTo(0, 1);
    document.getElementById("explainTaleb").style.visibility = "hidden";
    document.getElementById("instuctionTaleb").style.visibility = "hidden";
    document.getElementById("backBtn").style.visibility = "hidden";
    document.getElementById("contentSubject").style.visibility = "hidden";
    document.getElementById("nextBtnContent").style.visibility = "hidden";
    document.getElementById("backBtnContent").style.visibility = "hidden";
    // document.getElementById("learningTaleb").style.visibility = "hidden";
    document.getElementById("backBtn").addEventListener("click", function() {
        counter-= 2;
        start();
    });
    document.getElementById("nextBtn").addEventListener("click", start);
});

const start = (event) => {
    counter++;
    // console.log(counter);
    document.getElementById("nextBtn").style.visibility = "visible";
    document.getElementById("explainTaleb").style.visibility = "hidden";
    document.getElementById("instuctionTaleb").style.visibility = "hidden";
    // document.getElementById("learningTaleb").style.visibility = "hidden";
    if(counter === 0) {
        document.getElementById("startPage").style.visibility = "visible";
        document.getElementById("backBtn").style.visibility = "hidden";
    }
    if(counter === 1) {
        document.getElementById("backBtn").style.visibility = "hidden";
        let explain = document.getElementById("explain");
        explain.innerText = eplainText;
        document.getElementById("startPage").style.visibility = "hidden";
        document.getElementById("explainTaleb").style.visibility = "visible";
    }
    else if(counter === 2) {
        document.getElementById("backBtn").style.visibility = "visible";
        document.getElementById("explainTaleb").style.visibility = "hidden";
        document.getElementById("instuctionTaleb").style.visibility = "visible";
    }
    else if(counter === 3) {
        document.getElementById("instuctionTaleb").style.visibility = "hidden";
        document.getElementById("backLearning").style.visibility = "hidden";
        // document.getElementById("learningTaleb").style.visibility = "visible";
        document.getElementById("learningTaleb").style.display = "block";
        document.getElementById("backBtn").style.visibility = "hidden";
        document.getElementById("nextBtn").style.visibility = "hidden";
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`chap${i}`).addEventListener("click", () => startLearn(i));
        }
    }
}

const startLearn = (numberToLearn) => {
    document.getElementById("boxContainer").innerHTML = "";
    document.getElementById("chap5").style.visibility = "hidden"; 
    document.getElementById("backLearning").style.visibility = "visible";
    // console.log(numberToLearn);
    document.getElementById("titlePage").innerText = titleChap[numberToLearn-1];
    for (let i = 0; i < numberOfChapter[numberToLearn-1]; i++) {
        // document.getElementById("boxContainer").innerHTML += `<div id="box">נוהל 1.${i+1}</div>`;
        document.getElementById("boxContainer").innerHTML += `<div id="box${i+1}"><p id="nohalTitle">נוהל ${numberToLearn}.${i+1}</p></div>`;
    }
    for (let j = 0; j < numberOfChapter[numberToLearn-1]; j++) {
        document.getElementById(`box${j+1}`).addEventListener("click", () => openExplainContent(numberToLearn ,j+1));
     }
    document.getElementById("iconHome").addEventListener("click", function() {
        document.getElementById("backLearning").style.visibility = "hidden";
        document.getElementById("chap5").style.visibility = "visible";
    });

}

const openExplainContent = (numberOfcapterContent, numberOfNohal) => { 
    document.getElementById("contentSubject").style.visibility = "visible";
    document.getElementById("nextBtnContent").style.visibility = "visible";
    document.getElementById("backBtnContent").style.visibility = "hidden";
    document.getElementById("finishBtnContent").style.visibility = "hidden";
    // console.log(numberOfcapterContent);
    // console.log(numberOfNohal);
    document.getElementById("titleContent").innerText = titles[numberOfcapterContent-1][numberOfNohal-1];
    document.getElementById("explainContent").innerText = contents[numberOfcapterContent-1][numberOfNohal-1];
    if(numberOfNohal > 1) {
        document.getElementById("backBtnContent").style.visibility = "visible";
    }
    if(numberOfNohal == numberOfChapter[numberOfcapterContent-1]) {
        document.getElementById("nextBtnContent").style.visibility = "hidden";
    }
    if(numberOfcapterContent == 2 && numberOfNohal == 3 || numberOfcapterContent == 3 && numberOfNohal == 3 || numberOfcapterContent == 4 && numberOfNohal == 3) {
        document.getElementById("explainContent").classList.add("smallFont");
    }
    else if(numberOfcapterContent == 3 && numberOfNohal == 5) {
        document.getElementById("explainContent").classList.add("smallFont2");
    }
    else {
        document.getElementById("explainContent").classList.remove("smallFont");
        document.getElementById("explainContent").classList.remove("smallFont2");
    }
    document.getElementById("nextBtnContent").addEventListener("click", function() {
        document.getElementById("finishBtnContent").style.visibility = "hidden";
        counterContent = numberOfNohal++;
        counterContent++;
        console.log(numberOfNohal);
        // console.log(counterContent);
        if(counterContent > 1) {
            document.getElementById("backBtnContent").style.visibility = "visible";
        }
        // console.log(counterContent);
        // console.log(numberOfChapter[numberOfcapterContent-1]);
        if(counterContent >= numberOfChapter[numberOfcapterContent-1]) {
            document.getElementById("nextBtnContent").style.visibility = "hidden";
            document.getElementById("finishBtnContent").style.visibility = "visible";
            document.getElementById("finishBtnContent").addEventListener("click", function() {
            counterContent = 0;
            document.getElementById("contentSubject").style.visibility = "hidden";
            document.getElementById("finishBtnContent").style.visibility = "hidden";
            document.getElementById("backBtnContent").style.visibility = "hidden";
            });
        }
        else {
            document.getElementById("nextBtnContent").style.visibility = "visible";
        }
        if(numberOfcapterContent == 2 && numberOfNohal == 3 || numberOfcapterContent == 3 && numberOfNohal == 3 || numberOfcapterContent == 4 && numberOfNohal == 3) {
            document.getElementById("explainContent").classList.add("smallFont");
        }
        else if(numberOfcapterContent == 3 && numberOfNohal == 5) {
            document.getElementById("explainContent").classList.add("smallFont2");
        }
        else {
            document.getElementById("explainContent").classList.remove("smallFont");
            document.getElementById("explainContent").classList.remove("smallFont2");
        }
        // console.log(contents[numberOfcapterContent-1][counterContent-1]);
        // console.log(contents[numberOfcapterContent-1]);
        document.getElementById("titleContent").innerText = titles[numberOfcapterContent-1][counterContent-1];
        document.getElementById("explainContent").innerText = contents[numberOfcapterContent-1][counterContent-1];
    });

    document.getElementById("backBtnContent").addEventListener("click", function() {
        counterContent = numberOfNohal--;
        counterContent--;
        // console.log(counterContent);
        if(counterContent == numberOfChapter[numberOfcapterContent-1]) {
            document.getElementById("finishBtnContent").style.visibility = "visible";
        }
        if(counterContent < numberOfChapter[numberOfcapterContent-1]) {
            document.getElementById("finishBtnContent").style.visibility = "hidden";
            document.getElementById("nextBtnContent").style.visibility = "visible";
        }
        if(counterContent <= 1) {
            document.getElementById("backBtnContent").style.visibility = "hidden";
        }
        if(numberOfcapterContent == 2 && numberOfNohal == 3 || numberOfcapterContent == 3 && numberOfNohal == 3 || numberOfcapterContent == 4 && numberOfNohal == 3) {
            document.getElementById("explainContent").classList.add("smallFont");
        }
        else if(numberOfcapterContent == 3 && numberOfNohal == 5) {
            document.getElementById("explainContent").classList.add("smallFont2");
        }
        else {
            document.getElementById("explainContent").classList.remove("smallFont");
            document.getElementById("explainContent").classList.remove("smallFont2");
        }
        document.getElementById("titleContent").innerText = titles[numberOfcapterContent-1][counterContent-1];
        document.getElementById("explainContent").innerText = contents[numberOfcapterContent-1][counterContent-1];
    });
    // document.getElementById("nextBtnContent").addEventListener("click", () => nextContent(numberOfcapterContent, numberOfNohal));
}

// const backContent = (numberOfcapter, numberOfNohall) => {
//     console.log(numberOfNohall);
//     numberOfNohall = numberOfNohall -1;
//     counterContent = numberOfNohall - 1;
//     console.log(counterContent);
//     document.getElementById("titleContent").innerText = titles[numberOfcapter-1][counterContent-1];
//     document.getElementById("explainContent").innerText = contents[numberOfcapter-1][counterContent-1];
// }