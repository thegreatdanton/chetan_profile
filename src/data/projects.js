export const projects = [
    {
        id: 'money-split',
        title: 'MoneySplit: Smart Expense Manager',
        category: 'Mobile App',
        year: 'January 2026',
        shortDescription: 'Automatically track expenses from SMS and notifications. Secure and private.',
        description: 'MoneySplit is an intelligent, offline-first personal finance application designed to automate your expense tracking while keeping your data 100% private. By analyzing your transaction SMS and notifications directly on your device, it gives you a clear picture of your finances without any manual entry or cloud syncing.',
        image: 'assets/moneysplit-banner.png',
        icon: 'assets/moneysplit-icon.png',
        screenshots: [
            'assets/moneysplit-dashboard.jpg',
            'assets/moneysplit-add-expense.jpg',
            'assets/moneysplit-subs.jpg',
            'assets/moneysplit-loans.jpg',
            'assets/moneysplit-settings.jpg'
        ],
        privacyFirst: [
            '100% Offline: No servers, no cloud uploads.',
            'On-Device Processing: SMS and notification parsing happens locally.',
            'Secure Storage: All data is encrypted using SQLCipher.'
        ],
        features: [
            { title: '🤖 Automated Tracking', desc: 'Instantly records expenses from bank SMS and transaction notifications.' },
            { title: '📊 Insightful Analytics', desc: 'Interactive charts and graphs to visualize spending habits over time.' },
            { title: '💰 Account Management', desc: 'Support for Bank Accounts, Cash, Wallets, and Credit Cards with limit and due date tracking.' },
            { title: '🧠 AI-Powered Insights', desc: '(Optional) Connect your Gemini API key for personalized financial summaries and advice.' },
            { title: '📅 Smart Reminders', desc: 'Track bill due dates, subscriptions, and get daily reminders to stay on top of your finances.' },
            { title: '🔄 Unified backups', desc: 'One-tap backup and restore with automated folder management and cleanup.' },
            { title: '🎨 Modern Design', desc: 'Built with Material 3, supporting Dynamic Colors and Dark Mode.' },
            { title: '⚙️ Zero Friction', desc: 'No login required. Just install and start tracking.' }
        ],
        techStack: [
            { label: 'Framework', value: 'Flutter' },
            { label: 'Language', value: 'Dart' },
            { label: 'State Management', value: 'Riverpod' },
            { label: 'Database', value: 'Drift (SQLite) with SQLCipher encryption' },
            { label: 'AI Integration', value: 'Google Gemini API' }
        ],
        developer: {
            name: 'Chetan P',
            role: 'Application Developer',
            email: 'thegreatdanton93@gmail.com'
        },
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

