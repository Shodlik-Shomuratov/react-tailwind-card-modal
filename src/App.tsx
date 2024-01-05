import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

function App() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="w-full h-[100vh] flex items-center justify-center bg-blue-800">
			<div className="w-[350px] h-[500px] bg-white hover:drop-shadow-2xl hover:shadow-gray-900 duration-200 flex flex-col overflow-hidden ">
				<div className="w-full h-[250px] bg-card-background bg-no-repeat bg-center bg-cover p-8">
					<h1 className="uppercase font-bold text-white drop-shadow-md">
						News
					</h1>
				</div>
				<div className="w-full h-full box-border p-8 flex flex-col justify-between">
					<div>
						<p className="text-xs font-bold text-gray-400">
							January 05 2024
						</p>
						<h1 className="text-2xl font-bold text-gray-900 my-3">
							What happened in Uzbekistan?
						</h1>
						<p>The library for web and native user interfaces</p>
					</div>
					<div
						className="w-full flex flex-row items-center text-blue-800 cursor-pointer"
						onClick={() => setShowModal(true)}
					>
						<ChevronRightIcon className="w-7 h-7 border rounded-full border-blue-800" />
						<h1 className="ml-2 font-medium">Find out more</h1>
					</div>
					{showModal &&
						createPortal(
							<Modal onClose={() => setShowModal(false)} />,
							document.body
						)}
				</div>
			</div>
		</div>
	);
}

export default App;
