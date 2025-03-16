'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { SectionHeader } from './SectionHeader';
import useTranslation from '@/hooks/use-translation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string;
  imageUrl: string;
  url?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <div>
      <SectionHeader title={t('Works')} description={t('Works List')} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
              {project.imageUrl && (
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
              )}
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription>{project.technologies}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 shadow-none flex flex-col gap-2">
              <p className="text-sm">{project.description}</p>
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  {t('View Work')}{' '}
                  <ArrowRight className="w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
