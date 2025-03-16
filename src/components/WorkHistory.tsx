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
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-teal-500"></div>
                {index !== workHistory.length - 1 && (
                  <div className="absolute left-[3px] top-4 w-[2px] h-[calc(100%+2rem)] bg-teal-500/20"></div>
                )}

                {/* Content */}
                <div className="pl-4">
                  <Badge variant="outline" className="mb-2">
                    {work.period}
                  </Badge>
                  <h3 className="font-bold text-lg">{work.projectName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">
                    {work.description}
                  </p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer transition-colors">
                        <ChevronDown className="h-4 w-4" />
                        <span className="hover:underline">詳細を表示</span>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-2 text-sm pl-2 border-l-2 border-gray-200">
                        <div>
                          <span className="font-medium">担当工程：</span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {work.responsibilities}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">人数規模：</span>
                          <span className="text-gray-600 dark:text-gray-400">{work.teamSize}</span>
                        </div>
                        <div>
                          <span className="font-medium">環境・言語：</span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {work.environment}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">フレームワーク：</span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {work.frameworks}
                          </span>
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
