'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from './SectionHeader';
import useTranslation from '@/hooks/use-translation';
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
      <Badge variant="outline" className="font-normal bg-background border-border">
        {name}
      </Badge>
      <span
        className={`text-xs ${
          years === '1年未満'
            ? 'text-muted-foreground'
            : years === '1年～3年'
              ? 'text-primary'
              : 'text-foreground font-semibold'
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
      <h3 className="font-medium mb-3 text-foreground">{category.name}</h3>
      <div className="space-y-1">
        {Object.entries(category.skills).map(([name, years]) => renderExperienceItem(name, years))}
      </div>
    </div>
  );
}

export function Skills({ experience }: SkillsProps) {
  const { t } = useTranslation();

  return (
    <div>
      <SectionHeader title={t('Skills')} description={t('Technical skills and experience')} />
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
