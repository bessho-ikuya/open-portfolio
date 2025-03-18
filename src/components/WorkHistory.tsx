'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import useTranslation from '@/hooks/use-translation';
interface WorkHistoryItem {
  order: number;
  period: string;
  projectName: string;
  responsibilities: string;
  teamSize: string;
  environment: string;
  frameworks: string;
  description: string;
}

interface WorkHistoryProps {
  workHistory: WorkHistoryItem[];
}

export function WorkHistory({ workHistory }: WorkHistoryProps) {
  const { t } = useTranslation();

  return (
    <div>
      <SectionHeader title={t('Work History')} description={t('Work History Description')} />
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-8">
            {workHistory.map((work, index) => (
              <div key={index} className="relative pl-4">
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary"></div>
                {index !== workHistory.length - 1 && (
                  <div className="absolute left-[3px] top-4 w-[2px] h-[calc(100%+2rem)] bg-primary/20"></div>
                )}

                {/* Content */}
                <div className="pl-4">
                  <Badge variant="outline" className="mb-2">
                    {work.period}
                  </Badge>
                  <h3 className="font-bold text-lg">{work.projectName}</h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-4">{work.description}</p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        <ChevronDown className="h-4 w-4" />
                        <span className="hover:underline">{t('Show Details')}</span>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-2 text-sm pl-2 border-l-2 border-border">
                        <div>
                          <span className="font-medium">{t('Responsibilities: ')}</span>
                          <span className="text-muted-foreground">{work.responsibilities}</span>
                        </div>
                        <div>
                          <span className="font-medium">{t('Team Size: ')}</span>
                          <span className="text-muted-foreground">{work.teamSize}</span>
                        </div>
                        <div>
                          <span className="font-medium">{t('Environment: ')}</span>
                          <span className="text-muted-foreground">{work.environment}</span>
                        </div>
                        <div>
                          <span className="font-medium">{t('Frameworks: ')}</span>
                          <span className="text-muted-foreground">{work.frameworks}</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
