export const projects = [
    {
        id: 'money-split',
        title: 'MoneySplit: Smart Expense Manager',
        category: 'Mobile App',
        year: 'January 2026',
        shortDescription: 'Automatically track expenses from SMS and notifications. Secure and private.',
        description: 'MoneySplit is the intelligent expense manager that works for you. By securely analyzing your transaction SMS and notifications on-device, it automatically tracks your spending, categorizes your expenses, and helps you stay on budget—all without your data ever leaving your phone.',
        image: 'assets/moneysplit-banner.png',
        icon: 'assets/moneysplit-icon.png',
        screenshots: [
            'assets/moneysplit-dashboard.jpg',
            'assets/moneysplit-add-expense.jpg',
            'assets/moneysplit-subs.jpg',
            'assets/moneysplit-loans.jpg',
            'assets/moneysplit-settings.jpg'
        ],
        features: [
            { title: '🤖 AI-Powered Tracking', desc: 'Forget manual entry. MoneySplit automatically detects and records expenses from your bank SMS and transaction notifications in real-time.' },
            { title: '🔒 Privacy First & Offline', desc: 'Your financial data is yours alone. MoneySplit works 100% offline and processes everything on your device. No cloud uploads, no data sharing, just secure local tracking.' },
            { title: '📊 Smart Categorization', desc: 'Groceries, Travel, Utilities—MoneySplit instantly categorizes your transactions so you can see exactly where your money goes.' },
            { title: '📅 Subscriptions & Loans', desc: 'Never miss a due date. Keep track of all your recurring subscriptions and personal loans in one place.' },
            { title: '🎨 Beautiful & Modern', desc: 'Designed with the latest Material 3 guidelines, supporting dynamic colors that adapt to your device\'s wallpaper and extensive Dark Mode support.' }
        ],
        whyChoose: [
            'Zero ads',
            'No login required',
            'Secure local database',
            'Automatic backup support',
            'Lightweight & battery efficient'
        ],
        privacyPolicy: [
            {
                title: '1. Introduction',
                content: 'MoneySplit ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.'
            },
            {
                title: '2. Data Collection',
                content: 'MoneySplit is a privacy-first application. Most of your financial data is stored locally on your device using a secure database. We do not sell or rent your personal data to third parties.'
            },
            {
                title: '3. SMS & Notification Permission',
                content: 'If you enable "Auto Track" or SMS scanning, our app processes transaction SMS and notifications locally on your device to help you record transactions. This data is not uploaded to our servers unless explicitly used for AI-powered insights (via Gemini AI) if you have provided your own API key.\n\nWe NEVER read or process One-Time Passwords (OTPs), personal conversations, or any other non-financial data.'
            },
            {
                title: '4. Integration Services',
                content: 'If you use Gemini AI features, transaction descriptions may be sent to Google Gemini APIs specifically for parsing and summarization. This is only done if you have configured your own API key.'
            },
            {
                title: '5. Data Security',
                content: 'We use industry-standard security measures, including local encryption via SQLCipher, to protect your data stored on the device.'
            },
            {
                title: '6. Changes to This Policy',
                content: 'We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes.'
            },
            {
                title: '7. Contact Us',
                content: 'If you have any questions about this Privacy Policy, please contact us at thegreatdanton93@gmail.com.'
            }
        ]
    }
];
