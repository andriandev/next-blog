import Head from 'next/head';
import { useRouter } from 'next/router';

function MetaHead(props) {
  // Get canonical url
  const { asPath } = useRouter();

  // Delete params '?' and '#'
  let urlPath = '';
  if (asPath.includes('?')) {
    urlPath = asPath.split('?')[0];
  } else if (asPath.includes('#')) {
    urlPath = asPath.split('#')[0];
  } else {
    urlPath = asPath;
  }

  // Delete '/' in home page
  if (urlPath === '/') {
    urlPath = '';
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        name="robots"
        content={props.index === 'noindex' ? 'noindex, nofollow' : props.index}
      />
      <link
        rel="canonical"
        href={
          props.canonical
            ? process.env.NEXT_PUBLIC_BASE_URL + '/' + props.canonical
            : process.env.NEXT_PUBLIC_BASE_URL + urlPath
        }
      ></link>
    </Head>
  );
}

MetaHead.defaultProps = {
  title: 'Next Bootstrap',
  description: 'Next js bootstrap layout',
  index: 'index, follow',
};

export default MetaHead;
