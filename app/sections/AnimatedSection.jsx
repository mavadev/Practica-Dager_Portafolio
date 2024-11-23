'use client';
import { motion } from 'framer-motion';

const sectionAnimation = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: 'easeInOut',
		},
	},
};

const AnimatedSection = ({ children, className, id }) => {
	return (
		<motion.div
			id={id}
			initial='hidden'
			whileInView='visible'
			className={className}
			variants={sectionAnimation}>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
