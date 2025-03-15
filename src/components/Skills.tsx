import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from './SectionHeader';

interface SkillExperience {
  [key: string]: string;
}

interface SkillCategory {
  name: string;
  skills: SkillExperience;
}

interface SkillsProps {
  experience: SkillCategory[];
}

function renderExperienceItem(name: string, years: string) {
  return (
    <div key={name} className="flex items-center justify-between py-1">
      <Badge
        variant="outline"
        className="font-normal bg-white dark:bg-transparent border-gray-400 dark:border-gray-600"
      >
        {name}
      </Badge>
      <span
        className={`text-xs ${
          years === '1年未満'
            ? 'text-gray-600 dark:text-gray-500'
            : years === '1年～3年'
              ? 'text-emerald-700 dark:text-teal-400'
              : 'text-indigo-700 dark:text-blue-400'
        }`}
      >
        {years}
      </span>
    </div>
  );
}

function renderExperienceSection(category: SkillCategory) {
  return (
    <div key={category.name} className="mb-6">
      <h3 className="font-medium mb-3 text-gray-900 dark:text-gray-100">{category.name}</h3>
      <div className="space-y-1">
        {Object.entries(category.skills).map(([name, years]) => renderExperienceItem(name, years))}
      </div>
    </div>
  );
}

export function Skills({ experience }: SkillsProps) {
  return (
    <div>
      <SectionHeader title="スキル" description="技術スキルと経験年数" />
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {experience.map((category) => renderExperienceSection(category))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
