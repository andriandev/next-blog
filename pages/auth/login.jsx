import MetaHead from '@/components/shared/meta-head';

function Login() {
  return (
    <>
      <MetaHead title="Login" description="Form login" />
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1>Login</h1>
              <form className="mt-3">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="text" className="form-control" id="password" />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
