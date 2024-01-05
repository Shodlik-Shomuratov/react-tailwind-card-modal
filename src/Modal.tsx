import { ShareIcon, XMarkIcon } from "@heroicons/react/16/solid";

function Modal(props: any) {
	return (
		<div className="w-full h-full bg-black/95 fixed top-0 right-0 flex items-center justify-center">
			<div className="w-[600px] bg-gray-900 drop-shadow-md">
				<div className="w-full flex justify-end items-center py-5 px-7">
					<XMarkIcon
						className="w-10 h-10 cursor-pointer text-gray-500"
						onClick={props.onClose}
					/>
				</div>
				<div className="w-full text-white px-20 pt-5 pb-20 flex flex-col justify-between">
					<h1 className="text-2xl font-bold">Tell your friends</h1>
					<p className="my-8 text-lg">
						If you like what we do, please tell your friends and
						share the love
					</p>
					<div className="flex flex-row">
						<button
							type="button"
							className="bg-gray-950 px-5 py-3 flex items-center rounded"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-blue-500"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
							<p className="ml-5">Twitter</p>
						</button>
						<button
							type="button"
							className="bg-gray-950 px-5 py-3 flex items-center rounded ml-5"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-blue-900"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
							</svg>
							<p className="ml-5">Facebook</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
