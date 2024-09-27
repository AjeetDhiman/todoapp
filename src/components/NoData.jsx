import React from 'react';

export const NoData = ({ title, colorCode }) => {
	return (
		<p
			style={{
				marginBottom: '15px',
				padding: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderRadius: '8px',
				color: `${colorCode}`,
			}}>
			{title}
		</p>
	);
};
