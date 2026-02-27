'use client'

import { posts } from '../../blog/data/post';
import Link from 'next/link';
import CategoryIcon from '../ui/CategotyIcon';
import { useState } from 'react';

export default function BlogPageComponent() {
    const [selectedCategory, setSelectedCategory] = useState('Все статьи');

    // Получаем уникальные категории из постов
    const categories = ['Все статьи', ...Array.from(new Set(posts.map(post => post.category)))];

    // Фильтруем посты по выбранной категории
    const filteredPosts = selectedCategory === 'Все статьи'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#263C28", fontFamily: "'Inter', sans-serif" }}>
            {/* схема */}
            <script

                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Блог фермерского хозяйства",
                        "description": "Практические советы от фермеров с многолетним стажем",
                        "url": "https://velikanov-farming.ru/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Фермерское хозяйство Великанов"
                        },
                        "blogPost": posts.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.excerpt,
                            "datePublished": post.date,
                            "author": {
                                "@type": "Person",
                                "name": post.author
                            },
                            "url": `https://velikanov-farming.ru/blog/${post.slug}`
                        }))
                    })
                }}
            />

            <div className="mx-auto container text-[#EADCC1]">
                {/* Breadcrumbs */}
                <nav
                    className="px-4 sm:px-6 lg:px-8 py-4 text-sm text-[#EADCC1]/60 flex items-center gap-2"
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                >
                    <span
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        <Link
                            href="/"
                            className="hover:text-[#F7C35F] transition-colors"
                            itemProp="item"
                        >
                            <span itemProp="name">Главная</span>
                        </Link>
                        <meta itemProp="position" content="1" />
                    </span>

                    <span>›</span>

                    <span
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        <span className="text-[#F7C35F]" itemProp="name">
                            Блог
                        </span>
                        <meta itemProp="position" content="2" />
                    </span>
                </nav>

                {/* Hero Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center animate-fadeIn">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F7C35F] font-bold leading-tight mb-6">
                            Блог фермерского хозяйства
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                            Делимся опытом выращивания пшеницы, льна и подсолнечника. Практические советы от фермеров с многолетним стажем
                        </p>
                    </div>
                </section>

                {/* Filter Categories */}
                <section className="px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`category-tag px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                                        ? 'bg-[#F7C35F] text-[#2c1810]'
                                        : 'bg-[#F7C35F]/20 text-[#F7C35F] border border-[#F7C35F]/40 hover:bg-[#F7C35F]/30'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-7xl mx-auto">
                        {filteredPosts.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-xl text-[#EADCC1]/60">
                                    Статьи в этой категории скоро появятся
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPosts.slice().reverse().map(post => (
                                    <article
                                        key={post.slug}
                                        className="blog-card bg-gradient-to-br from-[#2c1810] to-[#1a0e08] rounded-xl border border-[#F7C35F]/20 hover:border-[#F7C35F]/40 overflow-hidden transition-all hover:scale-105"
                                    >
                                        {/* блок с картинкой */}
                                        <div className="relative h-64 bg-gradient-to-br from-[#F7C35F]/20 to-[#F7C35F]/5 flex items-center justify-center z-0">
                                            <CategoryIcon category={post.category} />
                                            <span className="absolute top-4 left-4 px-3 py-1 bg-[#F7C35F] text-[#2c1810] text-xs font-semibold rounded-full">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* блок с текстом */}
                                        <div className="relative z-10 -mt-10 p-6 bg-gradient-to-br from-[#2c1810] to-[#1a0e08] rounded-t-xl">
                                            <div className="flex items-center gap-4 mb-3 text-sm text-[#EADCC1]/60">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime} чтения</span>
                                            </div>

                                            <h2 className="text-xl font-bold text-[#F7C35F] mb-3 hover:text-[#e5b44f] transition-colors">
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h2>

                                            <p className="text-[#EADCC1] text-sm leading-relaxed mb-4">
                                                {post.excerpt}
                                            </p>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-2 text-[#F7C35F] font-semibold hover:gap-3 transition-all"
                                            >
                                                Читать далее
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </article>

                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}