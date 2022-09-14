import Image from 'next/image';
import MetaHead from '@/components/shared/meta-head';
import Sidebar from '@/layout/sidebar';
import { getPostBySlug, getAllPost } from '@/config/data';

function Post(props) {
  const { post, allPost } = props;

  return (
    <>
      <MetaHead
        title={post.title}
        description={post.description}
        canonical={post.slug}
      />
      <div className="row">
        <div className="col-12 col-md-8 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="text-center">
                <Image
                  width={600}
                  height={350}
                  src={`/assets/img/${post.image}`}
                  alt={post.title}
                  className="rounded"
                />
              </div>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
        <Sidebar allPost={allPost} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const postData = getPostBySlug(params.post_slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  const allPost = getAllPost(1, 5);

  return {
    props: { post: postData, allPost: allPost },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Post;
