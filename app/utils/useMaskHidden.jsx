import { useState } from 'react';

const useMaskHidden = size => {
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = e => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left - size / 2,
			y: e.clientY - rect.top - size / 2,
		});
	};

	return {
		setIsHovered,
		mousePosition,
		handleMouseMove,
		size: isHovered ? size : 0,
	};
};

export default useMaskHidden;
