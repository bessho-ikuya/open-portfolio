import { createTranslator } from '@/i18n';
import { Langs } from '@/i18n/config';
import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

const getNameIcon = async (locale: Langs) => {
  const t = await createTranslator(locale);
  const name = t('setting.name')?.slice(0, 1) || 'O';
  return name;
};

// Image generation
export default async function Icon({ params }: { params: { locale: Langs } }) {
  const name = await getNameIcon(params.locale);
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          backgroundColor: '#201224',
        }}
      >
        <span style={{ fontWeight: 900 }}>{name}</span>
      </div>
    ),
    {
      ...size,
    }
  );
}