import React from 'react';
import { motion } from 'framer-motion';
const AnimationPage = (props) => {
    return (
        <motion.div transition={{duration: .3}} initial={{opacity: 0, scale: .5}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: .5}}>
            {props.children}
        </motion.div>
    );
};

export default AnimationPage;