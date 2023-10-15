import { motion } from "framer-motion";
import Link from "next/link";
export const BlogCard = ({ title, image, date, url, alt }) => {
  const blogVariant = {
    hidden: { opacity: 0, x: "-50vw" },
    visible: { opacity: 1, x: 0 },
    normal: { scale: 1 },
    transformed: { scale: 1.05 },
  };
  return (
    <motion.div
      variants={blogVariant}
      initial={"normal"}
      animate={"visible"}
      whileHover={"transformed"}
      className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition "
      href="#"
    >
      <Link href={url}>
        <div className="aspect-w-16 aspect-h-9">
          <img
            className="w-full h-96 object-cover rounded-t-xl"
            src={image}
            alt={alt}
          />
        </div>
        <div className="p-4 md:p-5">
          <p className="mt-2 text-xs uppercase text-gray-600">{date}</p>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-green-500 ">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};
