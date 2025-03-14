import { motion } from 'framer-motion';
import { lazy } from 'react';


export const Folio = lazy(() => import("../../Pages/Folio"));

export const LoadingScreen = () => (
    <motion.div
        className="flex items-center justify-center h-screen bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <motion.div
            className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
    </motion.div>
);