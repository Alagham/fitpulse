export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-light">
      <h1 className="text-3xl font-bold text-primary mb-6">Login</h1>
      <button className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-emerald-600">
        Sign in with Google
      </button>
    </div>
  );
}
