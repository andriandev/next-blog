import MetaHead from '@/components/shared/meta-head';

function Profile() {
  return (
    <>
      <MetaHead title="Profile" description="Detail profile" index="noindex" />
      <div className="card shadow-sm">
        <div className="card-body">
          <h1>Profile</h1>
          <div className="mt-3">
            <p>Name: Berlin</p>
            <p>Email: berlin@gmail.com</p>
            <p>Password: 123</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
