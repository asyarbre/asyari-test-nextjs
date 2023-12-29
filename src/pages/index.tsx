import { GetServerSidePropsContext } from 'next';

import Header from '@/components/content/home/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='layout'>
        <h1 className='text-2xl font-semibold'>Home</h1>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
