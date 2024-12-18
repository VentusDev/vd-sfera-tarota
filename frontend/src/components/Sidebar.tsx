import React from 'react';

type SidebarProps = {
	toggleClass: boolean;
	SideBarTitle: string;
	children: React.ReactNode;
};

const Sidebar = ({
	toggleClass,
	children,
}: SidebarProps) => {
	return (
		<>
			<div
				className={`fixed right-0 top-0 glass-bg py-10  text-white w-[80vw] md:w-[50vw] h-lvh overflow-y-auto transition-transform transform ${
					toggleClass ? `translate-x-full` : ''
				}  ease-in-out duration-300 `}
			>
				<div className='max-md:p-4 md:px-10 mt-3'>
					{children}
				</div>
			</div>
		</>
	);
};

export default Sidebar;
