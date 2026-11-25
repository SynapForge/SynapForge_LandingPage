import React from 'react';
import { motion } from 'framer-motion';
import { CORE_TEAM } from '../data/companyData';

export default function TeamSection({ t }) {
  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 border-b border-black/5 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 text-xs font-mono text-[#FF5500] mb-3">
              <span className="font-bold">{t.team.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-inherit tracking-tight">
              {t.team.title}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
            {t.team.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 rounded-3xl glass-panel flex flex-col justify-between hover:border-[#FF5500]/40 transition-colors shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF5500] to-amber-500 flex items-center justify-center font-bold text-white text-lg shadow-md">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-inherit">
                      {member.name}
                    </h4>
                    <p className="text-xs text-[#FF5500] font-mono">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-mono">
                  {member.title}
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-3 italic">
                  {member.education}
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-3 mb-4 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/5 dark:border-white/5">
                  {member.skills.slice(0, 4).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
