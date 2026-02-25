import { posts } from '../data/post';
import {
    IntroBlock,
    HeadingBlock,
    ParagraphBlock,
    CalloutBlock,
    QuoteBlock,
    ListBlock
} from '../../components/ConentBlocks';

export async function generateStaticParams() {
    return posts.map(post => ({ slug: post.slug }));
}

// Динамическая генерация SEO metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = posts.find(p => p.slug === slug);

    const canonicalUrl = `https://velikanov-farming.ru/blog/${slug}`;

    if (!post) {
        return {
            title: 'Статья не найдена'
        };
    }

    return {
        title: `${post.title} | Блог фермерского хозяйства`,
        description: post.excerpt,
        keywords: `${post.category}, ${post.title}, фермерское хозяйство`,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            locale: 'ru_RU',
        },
        alternates: {
            canonical: canonicalUrl,
        },
        authors: [{ name: post.author }],
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="bg-[#334C35] min-h-screen text-[#EADCC1] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#F7C35F] mb-4">Статья не найдена</h1>
                    <a href="/blog" className="text-[#F7C35F] hover:underline">Вернуться к блогу</a>
                </div>
            </div>
        );
    }

    const renderBlock = (block, index) => {
        switch (block.type) {
            case 'intro':
                return <IntroBlock key={index} text={block.text} />;
            case 'heading':
                return <HeadingBlock key={index} level={block.level} text={block.text} />;
            case 'paragraph':
                return <ParagraphBlock key={index} text={block.text} />;
            case 'callout':
                return <CalloutBlock key={index} title={block.title} text={block.text} />;
            case 'quote':
                return (
                    <QuoteBlock
                        key={index}
                        text={block.text}
                        author={block.author}
                        source={block.source}
                        sourceUrl={block.sourceUrl}
                    />
                );
            case 'list':
                return <ListBlock key={index} items={block.items} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#334C35] min-h-screen text-[#EADCC1] font-sans">
            {/* JSON-LD разметка для статьи */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "datePublished": post.date,
                        "author": {
                            "@type": "Person",
                            "name": post.author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Фермерское хозяйство Великанов"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://yoursite.com/blog/${post.slug}`
                        },
                        "articleSection": post.category,
                        "keywords": post.category,
                        "wordCount": post.content.reduce((acc, block) =>
                            acc + (block.text ? block.text.split(' ').length : 0), 0
                        )
                    })
                }}
            />

            <div className="container mx-auto px-4">
                {/* Breadcrumbs с schema.org разметкой */}
                <nav className="py-4 text-sm text-[#EADCC1]/60 flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
                    <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <a href="/" className="hover:text-[#F7C35F] transition-colors" itemProp="item">
                            <span itemProp="name">Главная</span>
                        </a>
                        <meta itemProp="position" content="1" />
                    </span>
                    <span>›</span>
                    <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <a href="/blog" className="hover:text-[#F7C35F] transition-colors" itemProp="item">
                            <span itemProp="name">Блог</span>
                        </a>
                        <meta itemProp="position" content="2" />
                    </span>
                    <span>›</span>
                    <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <span className="text-[#F7C35F]" itemProp="name">{post.title}</span>
                        <meta itemProp="position" content="3" />
                    </span>
                </nav>

                <article className="py-8 max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-2 bg-[#F7C35F] text-[#2c1810] text-sm font-semibold rounded-full mb-6">
                        {post.category}
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7C35F] mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-[#F7C35F]/20 text-[#EADCC1]/60">
                        <time dateTime={post.date}>{post.date}</time>
                        <span>{post.readTime} чтения</span>
                        <span itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{post.author}</span>
                        </span>
                    </div>

                    {/* Рендер контента */}
                    <div className="article-content text-lg">
                        {post.content.map((block, index) => renderBlock(block, index))}
                    </div>

                    {/* Author Box */}
                    <div className="mt-12 p-6 bg-[#334C35]/90 rounded-xl border border-[#F7C35F]/20 flex gap-4" itemScope itemType="https://schema.org/Person">
                        <div className="w-16 h-16 rounded-full bg-[#F7C35F]/20 border-2 border-[#F7C35F] flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F7C35F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#F7C35F] mb-2" itemProp="name">Автор: {post.author}</h3>
                            <p className="mb-3" itemProp="description">Фермер с 15-летним практическим опытом, владелец хозяйства в Тацинском районе Ростовской области. Специализация — производство продовольственной пшеницы, подсолнечника и льна. В работе опирается на экономику поля: контроль себестоимости, управление рисками, системная защита растений и грамотная стратегия продаж зерна.</p>
                            <a href="tel:+79281789282" className="inline-flex items-center gap-2 text-[#F7C35F] font-semibold hover:text-[#e5b44f]" itemProp="telephone">
                                Связаться с автором
                            </a>
                        </div>
                    </div>


                    {/* Похожие статьи для перелинковки */}
                    {(() => {
                        const relatedPosts = posts
                            .filter(p =>
                                p.slug !== post.slug &&
                                p.category === post.category
                            )
                            .slice(0, 3);

                        if (relatedPosts.length > 0) {
                            return (
                                <div className="mt-12 pt-12 border-t border-[#F7C35F]/20">
                                    <h2 className="text-2xl font-bold text-[#F7C35F] mb-8">Похожие статьи</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedPosts.map((relPost) => (
                                            <a
                                                key={relPost.slug}
                                                href={`/blog/${relPost.slug}`}
                                                className="group p-6 bg-[#334C35]/90 border border-[#F7C35F]/20 rounded-xl hover:border-[#F7C35F]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <span className="inline-block px-3 py-1 bg-[#F7C35F]/10 text-[#F7C35F] text-xs font-semibold rounded-full mb-3 group-hover:bg-[#F7C35F]/20 transition-colors">
                                                    {relPost.category}
                                                </span>
                                                <h3 className="text-lg font-bold text-[#F7C35F] mb-2 group-hover:text-[#e5b44f] transition-colors">
                                                    {relPost.title}
                                                </h3>
                                                <p className="text-[#EADCC1]/70 text-sm mb-4 line-clamp-2">
                                                    {relPost.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-[#EADCC1]/60">
                                                    <time dateTime={relPost.date}>{relPost.date}</time>
                                                    <span>{relPost.readTime}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })()}


                </article>
            </div>
        </div>
    );
}