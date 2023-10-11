import { ImageResponse } from 'next/server';

export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#232E26',
        }}
      >
        <div tw="bg-pattern h-full w-full flex itens items-center justify-center">
            <h2 tw="flex text-secondary flex-col text-3xl sm:text-4xl font-bold">
              iNature
            </h2>
            <h4 tw="flex text-secondary flex-col text-xl font-bold">
              Sua solução completa para o diabetes.
            </h4>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}