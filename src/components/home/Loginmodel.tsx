type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({  onClose }: LoginModalProps) => {
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h2 className="mb-6 text-center text-3xl font-bold">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-black font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg text-black border bg-gray-200 p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 text-black block font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg text-black border bg-gray-200 p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Don't have an account?
          <span className="cursor-pointer font-semibold text-blue-600 hover:underline">
            {" "}Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginModal;