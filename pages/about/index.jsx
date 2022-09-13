import MetaHead from '@/components/shared/meta-head';

function About() {
  return (
    <>
      <MetaHead title="About" description="Next bootstrap about" />
      <div className="card shadow-sm">
        <div className="card-body">
          <h1>About</h1>
          <p>Next js blog bootstrap starter template</p>
        </div>
      </div>
    </>
  );
}

export default About;
