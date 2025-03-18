import QiitaArticleList from '@/components/QiitaArticleList';
import { Header } from '@/components/Header';
import { Skills } from '@/components/Skills';
import { WorkHistory } from '@/components/WorkHistory';
import { Projects } from '@/components/Projects';
import { SectionHeader } from '@/components/SectionHeader';
import SettingLang from '@/components/SettingLang';
import ThemeToggle from '@/components/ThemeToggle';
import { Langs } from '@/i18n/config';
import { createTranslator } from '@/i18n';

export const generateMetadata = async ({ params }: { params: { locale: Langs } }) => {
  const t = await createTranslator(params.locale);
  return {
    title: t('setting.name'),
    description: t('setting.title'),
    openGraph: {
      title: t('setting.name'),
      description: t('setting.title'),
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: t('setting.name'),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?locale=${params.locale}`,
          width: 1200,
          height: 630,
          alt: t('setting.name'),
        },
      ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('setting.name'),
      description: t('setting.title'),
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/api/og`],
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

interface SkillExperience {
  [key: string]: string;
}

interface SkillCategory {
  name: string;
  skills: SkillExperience;
}

interface WorkHistory {
  order: number;
  period: string;
  projectName: string;
  responsibilities: string;
  teamSize: string;
  environment: string;
  frameworks: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string;
  url?: string;
}

export default async function Home({ params }: { params: { locale: Langs } }) {
  const t = await createTranslator(params.locale);
  const experience = t<SkillCategory[]>('setting.experience');
  const workHistory = t<WorkHistory[]>('setting.workHistory').sort((a, b) => a.order - b.order);
  const projects = t<Project[]>('setting.projects');

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Banner */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-primary" />
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
        {process.env.NEXT_PUBLIC_LOCALES &&
          process.env.NEXT_PUBLIC_LOCALES.split(',').length > 1 && <SettingLang />}
      </div>

      <div className="max-w-[1024px] mx-auto pt-24 md:pt-28 px-4 pb-16 relative">
        <Header
          name={t('setting.name')}
          email={t('setting.email')}
          title={t('setting.title')}
          location={t('setting.location')}
          githubUsername={t('setting.githubUsername')}
          contactFormUrl={t('setting.contactFormUrl')}
          imageUrl={t('setting.profileImageUrl')}
        />

        {/* Rest of the content */}
        <main className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <Skills experience={experience} />
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-8">
              <WorkHistory workHistory={workHistory} />
              <Projects projects={projects} />

              {t('setting.qiitaUserName') && t('setting.qiitaUserName') !== '' && (
                <>
                  {/* Qiita Section */}
                  <div>
                    <SectionHeader
                      title={t('Qiita Article')}
                      description={t('Qiita articles written by me')}
                    />
                    <QiitaArticleList userName={t('setting.qiitaUserName')} />
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
