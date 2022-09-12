import MetaHead from '@/components/shared/meta-head';
import PostList from '@/components/post/post-list';
import { getAllPost } from '@/config/data';

function Home() {
  const postData = getAllPost();

  return (
    <>
      <MetaHead title="Next Bootstrap" description="Next bootstrap layout" />
      <PostList allPost={postData} />
    </>
  );
}

export default Home;
