import { Langs } from '@/i18n/config';
import { ImageResponse } from 'next/og';
import { createTranslator } from '@/i18n';
export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') as Langs;
    const t = await createTranslator(locale);
    const imageUrl = t('setting.profileImageUrl');

    let profileImageUrl = null;
    if (imageUrl && imageUrl !== '') {
      const profileImageResponse = await fetch(
        new URL(imageUrl, process.env.NEXT_PUBLIC_BASE_URL)
      );
      const profileImageData = await profileImageResponse.arrayBuffer();
      const profileImageBase64 = Buffer.from(profileImageData).toString('base64');
      profileImageUrl = `data:image/jpeg;base64,${profileImageBase64}`;
    }

    const name = t('setting.name');
    const title = t('setting.title');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e293b',
            position: 'relative',
          }}
        >
          {/* Background Banner */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '200px',
              backgroundColor: '#14b8a6',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Profile Image */}
            {profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt="Profile"
                width={128}
                height={128}
                style={{
                  borderRadius: '50%',
                  border: '4px solid #14b8a6',
                  marginBottom: '20px',
                }}
              />
            ) : (
                <span
                  style={{
                    color: '#9CA3AF',
                    fontSize: '60px',
                    fontWeight: 'bold',
                    width: '128px',
                    height: '128px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '4px solid #14b8a6',
                    backgroundColor: '#374151',
                  }}
                >
                  {name.slice(0, 1)}
                </span>
            )}

            {/* Name */}
            <h1
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              {name}
            </h1>

            {/* Title */}
            <p
              style={{
                fontSize: 30,
                color: '#94a3b8',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              {title}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
