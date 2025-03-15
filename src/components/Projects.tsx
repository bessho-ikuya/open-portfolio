import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { SectionHeader } from './SectionHeader';

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
  return (
    <div>
      <SectionHeader title="個人開発" description="個人開発したサービス" />
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
            <CardContent className="p-4 pt-0 shadow-none">
              <p className="text-sm">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
