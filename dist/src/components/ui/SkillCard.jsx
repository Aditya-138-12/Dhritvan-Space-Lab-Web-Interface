import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-light-nebula dark:bg-dark-nebula backdrop-blur-lg border border-gray-200 dark:border-gray-800 w-full h-44"
      style={{ height: "30vh" }}
    >
      <div className="flex flex-col h-full" >
        <div className="flex items-start gap-4 mb-3">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
            <img src={Icon} className="w-6 h-6" style={{ height: "10vh", width: "10vh" }} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-md text-sm bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 border border-blue-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
