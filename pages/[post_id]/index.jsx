import Link from 'next/link';
import Image from 'next/image';
import MetaHead from '@/components/shared/meta-head';
import { getPostById } from '@/config/data';

function Post(props) {
  const { post } = props;

  if (!post) {
    return (
      <>
        <MetaHead
          title="404 Page Not Found"
          description="404 Page Not Found"
          index="noindex"
        />
        <h1>404 Page Not Found</h1>
        <Link href="/">
          <button type="button" className="btn btn-primary btn-sm">
            Back Home &raquo;
          </button>
        </Link>
      </>
    );
  }

  return (
    <>
      <MetaHead
        title={post.title}
        description={post.description}
        canonical={post.id}
      />
      <div className="card my-3">
        <div className="card-body">
          <h1>{post.title}</h1>
          <Image
            width={600}
            height={300}
            src={`/assets/img/${post.image}`}
            alt={post.title}
          />
          <p>{post.description}</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const postData = getPostById(params.post_id);

  return {
    props: { post: postData },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Post;
