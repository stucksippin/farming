// /contentblocks.jsx


export function IntroBlock({ text }) {
    return (
        <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
            {text}
        </p>
    );
}

export function HeadingBlock({ level, text }) {
    const Tag = `h${level}`;
    const sizes = {
        2: 'text-2xl',
        3: 'text-xl'
    };

    return (
        <Tag className={`text-[#F7C35F] ${sizes[level]} font-bold mt-8 mb-4`}>
            {text}
        </Tag>
    );
}

export function ParagraphBlock({ text }) {
    return <p className="mb-6">{text}</p>;
}

export function CalloutBlock({ title, text }) {
    return (
        <div className="bg-[#F7C35F]/10 border border-[#F7C35F]/30 rounded-xl p-6 my-6">
            <h3 className="text-[#F7C35F] font-semibold mb-2">{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export function QuoteBlock({ text, author, source, sourceUrl }) {
    return (
        <blockquote className="border-l-4 border-[#F7C35F] bg-[#F7C35F]/10 p-4 my-6 italic">
            {text} — {author}
            {source && (
                <>
                    {', '}
                    {sourceUrl ? (
                        <a
                            href={sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F7C35F] hover:underline"
                        >
                            {source}
                        </a>
                    ) : (
                        <span>{source}</span>
                    )}
                </>
            )}
        </blockquote>
    );
}

export function ListBlock({ items }) {
    return (
        <ul className="list-disc list-inside mb-6">
            {items.map((item, i) => (
                <li key={i}>
                    <strong>{item.label}:</strong> {item.text}
                </li>
            ))}
        </ul>
    );
}