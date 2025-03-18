'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import useTranslation from '@/hooks/use-translation';
import useLang from '@/hooks/use-lang';

interface Article {
  title: string;
  url: string;
  created_at: string;
  tags: {
    name: string;
  }[];
}

export default function QiitaArticleList({ userName }: { userName: string }) {
  const [data, setData] = useState<Article[]>([]);
  const { t } = useTranslation();
  const { locale } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://qiita.com/api/v2/items?page=1&per_page=100&query=user:' + userName;
      const res = await fetch(url);
      const result = await res.json();
      setData(result as Article[]);
    };

    fetchData();
  }, [userName]);

  if (data.length === 0) {
    return <div>{t('No data')}</div>;
  }

  return (
    <div className="grid gap-4">
      {data.map((item, index) => (
        <Link href={item.url} target="_blank" key={index} className="block">
          <article className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold text-foreground line-clamp-2">{item.title}</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag.name}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
                <time dateTime={item.created_at}>
                  {new Date(item.created_at).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="text-primary font-medium">{t('Read Qiita articles')} →</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
