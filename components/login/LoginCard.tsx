export default function LoginCard() {
    return (
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center text-3xl mx-auto mb-4">
                {"</>"}
            </div>

            <h3 className="text-2xl font-semibold">
                Welcome.
            </h3>

            <p className="text-gray-500 mb-6">
                Continue your journey.
            </p>

            <div className="flex flex-col gap-3">
                <button className="border rounded-lg py-3 hover:bg-gray-50">
                    Continue with Google
                </button>

                <button className="border rounded-lg py-3 hover:bg-gray-50">
                    Continue with GitHub
                </button>
            </div>
        </div>
    );
}