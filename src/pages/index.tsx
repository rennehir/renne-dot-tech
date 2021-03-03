import { NextPage } from 'next';
import Head from 'next/head';
import { Button, Text, useColorMode } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text
          as="h1"
          bgGradient="linear(to-l, brand.900, brand.700)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Text>

        <Button onClick={toggleColorMode}>
          Go to the {colorMode === 'light' ? 'dark' : 'light'} side
        </Button>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
};

export default IndexPage;
