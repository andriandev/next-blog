import MetaHead from '@/components/shared/meta-head';
import PostList from '@/components/post/post-list';
import Pagination from '@/components/shared/pagination';
import { getAllPost, getPageCount } from '@/config/data';

function Home(props) {
  const { post, pageCount, page } = props;

  return (
    <>
      <MetaHead title="Next Blog" description="Next blog layout" />
      <PostList allPost={post} />
      <Pagination pageCount={pageCount} page={page} />
    </>
  );
}

export async function getStaticProps() {
  const post = getAllPost();

  if (!post) {
    return {
      notFound: true,
    };
  }

  const pageCount = getPageCount();
  const page = 1;

  return {
    props: { post: post, pageCount: pageCount, page: page },
  };
}

export default Home;
