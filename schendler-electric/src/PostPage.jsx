import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const posts = {
        "1": {
            title: "בית ירוק",
            author: "Admin",
            date: "2024-06-01",
            content: "This is the content of the first post.",
            paragraphs: [
                { "header": "בית ירוק", "content": "חברתנו מתמחה בתכנון ביצוע והטמעת מערכות ירוקות, המשלבות תרומה לאיכות הסביבה, עם חסכון כספי ללקוח. החבילות הירוקות שמציעה חברתנו משלבות מספר תחומים, של חסכון בחשמל, חסכון במים, ושימוש בחומרים ירוקים." },
                {
                    "header": "ייצור חשמל אלטרנטיבי", "content": `החשמל אותו אנו צורכים ממערכת החלוקה הארצית, מיוצר בתחנות כח, המייצרות זיהום אוויר המתבטא בגזי חממה הפוגעים בשכבת האוזון, מכלות את מלאי הנפט הטבעי, ובנייתן באה על חשבון שטחים פתוחים, אשר הולכים ומצטמצמים בנוף ארצנו. 
ככל שנשכיל למצוא מקורות אנרגיה חילופיים, ונפחית את צריכת החשמל של מכשירי החשמל בהם אנו משתמשים, במיוחד של מכשירי החשמל זוללי האנרגיה הגורמים ל"פיקים" – צריכת שיא בשעות העומס, נפחית את הצורך בבניית תחנות כח חדשות להזנת פיקים אלו. בשנים האחרונות, התפתחה טכנולוגיה המנצלת את האור של השמש לייצור חשמל. טכנולוגיה זו קרויה פוטו-וולטאית (פוטו= אור, וולטאית=מתח חשמלי) 
ובאנגלית  PV - Photo Voltaic.
הטכנולוגיה הפוטו-וולטאית יוצרת חשמל נקי ובטוח, תוך ניצול קרקע זמינה או גגות חשופים.
האור הפוגע בפנלים הסולאריים יוצר חשמל. החשמל זורם אל הממיר, וממנו דרך מונה ייצור אל רשת חברת החשמל. חברת החשמל מתחייבת לרכוש את כל החשמל המיוצר במערכת, במחיר מסובסד לתקופה של 20 שנה. 
בנק הפועלים מעמיד כיום הלוואות מיוחדות למימון מערכות אלו.
כל מערכת פוטו וולטאית מחייבת תכנון ע"י מהנדס חשמל. שינדלר אלקטריק מתמחה בתכנון והתאמת מערכות אלה ללקוח.`},
                { "header": "חסכון בחשמל", "content": `חסכון בחשמל לצרכי חימום וקירור
צרכני החשמל הכבדים בבניה הפרטית הינם מזגני האוויר, ואמצעי החימום בבית. בשנים האחרונות הולכות ומתפתחות טכנולוגיות מתקדמות המשלבות שימוש באינוונטרים ובמשאבות חום, אשר מביאות לחיסכון משמעותי של עד 50% בצריכת החשמל לעומת מערכות מיושנות.
אינוורטר (dc inverter air conditioner) הוא מזגן אוויר שביחידת המדחס שלו מנוע הפועל בזרם ישר במהירות משתנה. טכנולוגיית שהתפתחה במשך השנים עד לרמתה הנוכחית, בה למעשה מונע אלמנט הדחיסה על ידי מנוע DC אשר מהירות הסיבוב שלו נשלטת ומבוקרת על ידי תדר העבודה והמתח המסופקים לו.
משאבת חום היא התקן המוציא חום ממאגר חום אחד ומעביר אותו למשנהו, ממאגר "קר" למאגר "חם" כמו במקרה של מזגן בפעולת קירור. או ממאגר "חם" למאגר "קר", כמו במקרה של מזגן בפעולת חימום.
חברתנו מתמחה בתכנון ובביצוע מערכות מיזוג אוויר וחימום תת רצפתי המתקדמות ביותר בבחינת היעילות האנרגטית שלהן. ` },

            ]
        },
        "2": {
            title: "Second Post",
            author: "Admin",
            date: "2024-06-02",
            content: "This is the content of the second post.",
        },
        "3": {
            title: "Third Post",
            author: "Admin",
            date: "2024-06-03",
            content: "This is the content of the third post.\n\nIt can contain multiple paragraphs.\n\nThis is the second paragraph of the third post.",
        }
    };
    // Helper function to split content into paragraphs
    const renderParagraphs = (content) => {
        if (!content) return null;
        // Split by two or more newlines (handles \n\n or \r\n\r\n)
        return content.split(/\r?\n\r?\n+/).map((para, idx) => (
            <p key={idx}>{para}</p>
        ));
    };
    useEffect(() => {
        console.log("PostPage mounted with id:", id);
        // Scroll to the top of the page when the component mounts
        if (id) {
            setPost(posts[id]);
        }
    }, [id]);




    return (
        !post ? (
            posts[id] === undefined ? (
                <div>Post not found.</div>
            ) : (
                <div>Loading...</div>
            )
        ) : (
            <div className="post-page" style={styles.postPage}>
                <h1 style={styles.postTitle}>{post.title}</h1>
                <p style={styles.postAuthor}>
                    <em>
                        By {post.author} on {new Date(post.date).toLocaleDateString()}
                    </em>
                </p>
                <div
                    className="post-content"
                    style={styles.postContent}
                >
                    {post.paragraphs ? (
                        post.paragraphs.map((para, index) => (
                            <div key={index} style={{ marginBottom: 28 }}>
                                {para.header && (
                                    <h2 style={styles.paraHeader}>{para.header}</h2>
                                )}
                                <p style={styles.postContent}>{para.content}</p>
                            </div>
                        ))
                    ) : (
                        renderParagraphs(post.content)
                    )}
                </div>

                <textarea
                    placeholder='הוסף תגובה...'
                    style={styles.textArea}
                    onChange={(e) => console.log(e.target.value)}
                    
                />
            </div>
        )
    );
};

export default PostPage;

const styles = {
    postPage: {
        padding: '20px',
        margin: '0 auto',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #0a2342 0%, #19747e 100%)',
        boxShadow: '0 6px 32px 0 rgba(0,0,0,0.18)',
        color: '#e0f7fa', // light teal for text
        fontFamily: 'Heebo, Rubik, Arial, sans-serif',
        transition: 'box-shadow 0.3s',
        minHeight: 400
    },
    postContent: {
        whiteSpace: 'pre-wrap',
        fontFamily: 'inherit',
        fontSize: '1.13rem',
        marginBottom: '20px',
        lineHeight: 1.85,
        color: '#e0f7fa', // light teal for content
        letterSpacing: '0.01em',
        wordBreak: 'break-word',
        padding: '0 2px'
    },
    postTitle: {
        fontSize: '2.2rem',
        fontWeight: 800,
        marginBottom: 10,
        color: '#fff', 
        letterSpacing: '0.04em',
        textShadow: '0 2px 12px #0a2342'
    },
    postAuthor: {
        fontSize: '1.05rem',
        color: '#e0f7fa', // light teal for content
        marginBottom: 18,
        fontStyle: 'italic',
        borderBottom: '1px solid #19747e',
        paddingBottom: 8
    },
    postHeader: {
        fontSize: '1.35rem',
        color: '#fff', 
        fontWeight: 700,
        margin: '0 0 8px 0',
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        borderLeft: '4px solid #21cbf3',
        paddingLeft: 12,
        background: 'rgba(33,203,243,0.07)'
    },
    postParagraph: {
        margin: 0
    },
    postImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        marginBottom: '20px'
    },
    paraHeader: {
        fontSize: '1.35rem',
        color: '#fff', 
        fontWeight: 700,
        margin: '0 0 8px 0',
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        borderLeft: '4px solid #21cbf3',
        paddingLeft: 12,
        background: 'rgba(33,203,243,0.07)',
        marginBottom: 10
    },
    textArea: {
        width: '100%', // Use 100% for full container width
        boxSizing: 'border-box', // Ensure padding is included in width
        marginTop: '20px',
        borderRadius: '8px',
        border: '1.5px solid #21cbf3',
        minHeight: '60px',
        resize: 'vertical',
        background: '#0a2342',
        color: '#e0f7fa',
        fontFamily: 'inherit',
        fontSize: '1.05rem',
        boxShadow: '0 2px 8px 0 rgba(44,83,100,0.18)',
        padding: '20px', // Padding inside the textarea
    }

};