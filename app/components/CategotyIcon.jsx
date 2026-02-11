export default function CategoryIcon({ category }) {
    const icons = {
        'Пшеница': (
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="#F7C35F" strokeWidth="1.5">
                <path d="M12 2L12 22M12 2C10 4 8 6 8 10M12 2C14 4 16 6 16 10M8 10C6 12 4 14 4 18M8 10L12 10M16 10C18 12 20 14 20 18M16 10L12 10M12 10L12 14M12 14C10 16 8 18 6 20M12 14C14 16 16 18 18 20" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        'Лен': (
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="#F7C35F" strokeWidth="1.5">
                <path d="M12 2v20M8 6c0 2.5 1 4 4 4s4-1.5 4-4M9 14c0 2 1 3 3 3s3-1 3-3M10 18c0 1.5.5 2.5 2 2.5s2-1 2-2.5" strokeLinecap="round" />
            </svg>
        ),
        'Подсолнечник': (
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="#F7C35F" strokeWidth="1.5">
                <circle cx="12" cy="12" r="4" fill="#F7C35F" fillOpacity="0.2" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
            </svg>
        ),
        'Агротехника': (
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="#F7C35F" strokeWidth="1.5">
                <path d="M3 12h4l3-9 4 18 3-9h4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="1" fill="#F7C35F" />
            </svg>
        ),
        'Рынок зерна': (
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="#F7C35F" strokeWidth="1.5">
                <path d="M3 17l6-6 4 4 8-8M21 9v6h-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            {icons[category] || icons['Агротехника']}
        </div>
    );
}