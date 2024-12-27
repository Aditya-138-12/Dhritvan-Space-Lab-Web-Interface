import { motion } from "framer-motion";
import { Code, Database, Layout, Box, Wrench, Smartphone } from "lucide-react";
import SkillCard from "../ui/SkillCard";

const Team = () => {
    const skills = [
        {
            icon: "",
            title: "Shrihari N., Chair, Dhritvan Space Lab",
            skills: ["Java", "Kotlin", "Python", "Dart", "C++", "C", "JavaScript"],
        },
        {
            icon: "https://media.licdn.com/dms/image/v2/D5603AQHH4PKpNZdV5Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1733157501740?e=1740614400&v=beta&t=9dq0dchLlCKtRSZJcX5wp82EIk_jIcxn0AQJGE_oWn0",
            title: "Shrihari N., Chair, Dhritvan Space Lab",
            skills: ["Android (Native)", "Flutter"],
        },
        {
            icon: Database,
            title: "Databases",
            skills: ["Oracle Database", "MySQL", "SQLite", "MongoDB", "PostgreSQL"],
        },
        {
            icon: Wrench,
            title: "Development Tools",
            skills: ["Android Studio", "Visual Studio Code", "Anaconda"],
        },
        {
            icon: Box,
            title: "Frameworks & SDKs",
            skills: ["Android SDK", "Flutter", "Flask", "Streamlit"],
        },
        {
            icon: Layout,
            title: "Web Technologies",
            skills: ["HTML", "CSS", "JavaScript", "React"],
        },
    ];
    return (
        <section className="py-20 relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container mx-auto px-4"
            >
                {/* Skills Grid */}
                <div id="team">
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Our Team - Dhritvan Space Lab
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <SkillCard {...skill} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Team;
